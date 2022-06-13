import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { addUserToLocalStorage, getUserFromLocalStorage } from '../../utils/localStorageHandler';
import { registerUserThunk, loginUserThunk } from './userThunk';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
  return registerUserThunk('/auth/register', user, thunkAPI);
});

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
  return loginUserThunk('/auth/login', user, thunkAPI);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello There ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { user } = payload;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
