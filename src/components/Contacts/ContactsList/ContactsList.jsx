import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import {
  ContactsContainer,
  PanelLoyout,
  Title,
  List,
} from './ContactsList.styled';
import { ContactItem } from 'components/Contacts/ContactItem/ContactItem';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactsContainer>
      <PanelLoyout>
        <Title>Your contacts</Title>
        <ContactsFilter />
      </PanelLoyout>

      <List>
        {contacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </ContactsContainer>
  );
};
