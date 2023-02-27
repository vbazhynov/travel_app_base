import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpApi,
  getCurrentUserApi,
  signInApi,
} from '../../helpers/api/authApi';
import { HttpError } from '../../common/enums/enums';
import { HttpCode, StorageKey } from '../../common/enums/enums';
import { ActionType } from './common';

type User = {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
};

type signInReqType = {
  email: string;
  password: string;
};

type signUpReqType = {
  fullName: string;
  email: string;
  password: string;
};

const signUp = createAsyncThunk<User, signUpReqType>(
  ActionType.SIGN_UP,
  async request => {
    const { user, token }: { user: User; token: string } = await signUpApi(
      request,
    );

    localStorage.setItem(StorageKey.TOKEN, token);

    return user;
  },
);

const signIn = createAsyncThunk<User, signInReqType>(
  ActionType.SIGN_IN,
  async request => {
    const { user, token }: { user: User; token: string } = await signInApi(
      request,
    );

    localStorage.setItem(StorageKey.TOKEN, token);
    return user;
  },
);

const signOut = createAsyncThunk<null, void>(ActionType.SIGN_OUT, _request => {
  localStorage.removeItem(StorageKey.TOKEN);
  return null;
});

const loadCurrentUser = createAsyncThunk<User, void>(
  ActionType.LOAD_USER,
  async (_request, { dispatch, rejectWithValue }) => {
    try {
      return await getCurrentUserApi();
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(signOut());
      }

      return rejectWithValue('Unauthorised');
    }
  },
);

export { signUp, loadCurrentUser, signIn, signOut };
