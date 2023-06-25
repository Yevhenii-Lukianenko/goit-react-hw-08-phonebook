import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

Notify.init({
  position: 'center-top',
  distance: '15px',
  clickToClose: 'true',
  cssAnimationStyle: 'from-left',
  width: 'fit-content',
});

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/signUp',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', text);
      Notify.success(
        `Account ${response.data.user.email} was successfully created`
      );
      setAuthToken(response.data.token);
      return response.data;
    } catch (e) {
      Notify.failure(`An account with this email already exists`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (text, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', text);
    Notify.success(
      `Login to the account ${response.data.user.name} is successful`
    );
    setAuthToken(response.data.token);
    return response.data;
  } catch (e) {
    Notify.failure(`Email or password is incorrect`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    Notify.success(`Logout operation completed successfully`);
    clearAuthToken();
    return response.data;
  } catch (e) {
    Notify.failure(`Logout error! ${e}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const authToken = state.auth.token;
    if (authToken === null) {
      return thunkAPI.rejectWithValue('You are not authorized');
    }
    try {
      setAuthToken(authToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
