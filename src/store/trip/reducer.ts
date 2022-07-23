import { createReducer } from '@reduxjs/toolkit';
import { loadTripById } from './actions';

export type TripType = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
};

type TripState = TripType;

const initialState: TripState = {
  id: '',
  title: '',
  description: '',
  level: '',
  duration: 0,
  price: 0,
  image: '',
  createdAt: '',
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadTripById.fulfilled, (state, action) => {
    state = action.payload;
    console.log(state);
  });
});

export { reducer };
