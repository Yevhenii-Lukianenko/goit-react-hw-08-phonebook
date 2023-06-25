import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { selectContacts, selectIsAdding } from 'redux/contacts/selectors';

import { FormContainer, Title, Submit } from './ContactForm.styled';
import { LoaderButton } from 'components/Loaders/LoaderButton';
import { TextField } from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io';

export const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAdding);

  const handleSubmit = async e => {
    e.preventDefault();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === state.name.toLowerCase()) {
        return alert(`${state.name} is already in contacts.`);
      }
    }
    try {
      await dispatch(addContact(state));
      reset();
    } catch (error) {
      Notify.failure(`Error! ${error}`);
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const reset = () => setState({ name: '', number: '' });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Add a new contact</Title>
      <TextField
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        label="Name"
        size="small"
        required
      />
      <TextField
        type="tel"
        name="number"
        value={state.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        label="Number"
        size="small"
        required
      />
      <Submit type="submit">
        {isLoading ? (
          <LoaderButton />
        ) : (
          <IoIosAddCircle style={{ width: '2.5em', height: '2.5em' }} />
        )}
      </Submit>
    </FormContainer>
  );
};
