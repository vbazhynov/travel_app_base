import { createReducer } from '@reduxjs/toolkit';
import { loadTrips } from './actions';

type TripType = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
};

type TripState = { list: TripType[] };

const initialState: TripState = {
  list: [],
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadTrips.fulfilled, (state, action) => {
    state.list = action.payload;
  });
});

export { reducer };
