import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { signIn, signOut, signUp, loadCurrentUser } from './actions';

export type User = {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
};

type UserState = User;

const initialState: UserState = {
  id: '',
  fullName: '',
  email: '',
  createdAt: '',
};

const reducer = createReducer(initialState, builder => {
  builder.addMatcher(
    isAnyOf(signIn.fulfilled, signUp.fulfilled, loadCurrentUser.fulfilled),
    (state, action) => {
      state = action.payload;
      console.log(state);
    },
  );
});

export { reducer };
