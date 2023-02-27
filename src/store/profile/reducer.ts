import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { signIn, signUp, loadCurrentUser } from './actions';

export type User = {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
};

type ErrorType = {
  error: string;
  message: string;
  statusCode: string;
};
type UserState = {
  user: User;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: ErrorType;
};

const initialState: UserState = {
  user: { id: '', fullName: '', email: '', createdAt: '' },
  status: 'idle',
  error: {
    error: '',
    message: '',
    statusCode: '',
  },
};

const reducer = createReducer(initialState, builder => {
  builder.addMatcher(
    isAnyOf(signIn.fulfilled, signUp.fulfilled, loadCurrentUser.fulfilled),
    (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
    },
  );

  builder.addMatcher(
    isAnyOf(signIn.pending, signUp.pending, loadCurrentUser.pending),
    state => {
      state.status = 'pending';
    },
  );

  builder.addMatcher(
    isAnyOf(signIn.rejected, signUp.rejected, loadCurrentUser.rejected),
    (state, action) => {
      toast.error(action.error.message);

      state.status = 'failed';
    },
  );
});

export { reducer };
