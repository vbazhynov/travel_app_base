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

type TripState = {
  list: TripType[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: TripState = {
  list: [],
  status: 'idle',
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadTrips.fulfilled, (state, action) => {
    state.list = action.payload;
    state.status = 'succeeded';
  });

  builder.addCase(loadTrips.pending, state => {
    state.status = 'pending';
  });

  builder.addCase(loadTrips.rejected, state => {
    state.status = 'failed';
  });
});

export { reducer };
