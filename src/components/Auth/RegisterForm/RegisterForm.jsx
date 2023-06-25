import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { selectIsLoading } from 'redux/auth/selectors';
import { register } from 'redux/auth/operations';

import { FormContainer, Form, Title, Button } from './RegisterForm.styled';
import { LoaderButton } from 'components/Loaders/LoaderButton';
import { TextField } from '@mui/material';

export const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
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
      await dispatch(register(state));
      reset();
    } catch (error) {
      Notify.failure(`Error! ${error}`);
    }
  };

  const reset = () => setState({ name: '', email: '', password: '' });

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Create a Phonebook account</Title>
        <TextField
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          label="Name"
          size="small"
          required
        />
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

        <Button type="submit">{isLogin ? <LoaderButton /> : 'Sign up'}</Button>
      </Form>
    </FormContainer>
  );
};
