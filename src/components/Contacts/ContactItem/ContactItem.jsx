import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { selectIsDeleting } from 'redux/contacts/selectors';

import { Item, ContactText, Button } from './ContactItem.styled';
import { LoaderButton } from 'components/Loaders/LoaderButton';
import { AiOutlineUser, AiOutlinePhone, AiOutlineDelete } from 'react-icons/ai';
// import { BsPencil } from 'react-icons/bs';

export const ContactItem = ({ contact }) => {
  const [isDeleting, setDeleting] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDeleting);

  const handleDelete = () => {
    setDeleting(true);
    dispatch(deleteContact(contact.id));
  };

  return (
    <Item>
      <ContactText>
        <AiOutlineUser />: {contact.name}
      </ContactText>
      <ContactText>
        <AiOutlinePhone />: {contact.number}
      </ContactText>
      <Button type="button" onClick={handleDelete}>
        {isLoading && isDeleting ? (
          <LoaderButton />
        ) : (
          <AiOutlineDelete style={{ width: '1.5em', height: '1.5em' }} />
        )}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
