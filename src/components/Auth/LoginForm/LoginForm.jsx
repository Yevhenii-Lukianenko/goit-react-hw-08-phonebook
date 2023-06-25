import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { login } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';

import { TextField } from '@mui/material';
import { FormContainer, Form, Title, Button } from './LoginForm.styled';
import { LoaderButton } from 'components/Loaders/LoaderButton';

export const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoading);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(login(state));
      reset();
    } catch (error) {
      Notify.failure(`Error! ${error}`);
    }
  };

  const reset = () => setState({ email: '', password: '' });

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Log in to Phonebook</Title>
        <TextField
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          label="Email"
          size="small"
          required
        />
        <TextField
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          label="Password"
          size="small"
          required
        />
        <Button type="submit">{isLogin ? <LoaderButton /> : 'Log in'}</Button>
      </Form>
    </FormContainer>
  );
};
