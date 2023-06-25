import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLogin } from 'redux/auth/selectors';

import { ContactForm } from 'components/Contacts/ContactForm/ContactForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { LoaderContacts } from 'components/Loaders/LoaderContacts';
import { ContactsContainer } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLogin]);

  return (
    <>
      {isLogin ? (
        <ContactsContainer>
          <ContactForm />
          {isLoading ? <LoaderContacts /> : <ContactsList />}
        </ContactsContainer>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Contacts;
