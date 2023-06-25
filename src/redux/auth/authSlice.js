import { createSlice } from '@reduxjs/toolkit';
import { register, login, currentUser, logout } from '../auth/operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    items: [],
    isLoading: false,
    isLogin: false,
    error: null,
    token: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
        state.isLogin = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const authReducer = persistedAuthReducer;
