import { useState } from 'react';
import { FormContainer, Label, Input, Submit } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === state.name.toLowerCase()) {
        return alert(`${state.name} is already in contacts.`);
      }
    }
    dispatch(addContact(state));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const reset = () => setState({ name: '', phone: '' });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Input>
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></Input>
      </Label>
      <Submit type="submit">Add contact</Submit>
    </FormContainer>
  );
};
