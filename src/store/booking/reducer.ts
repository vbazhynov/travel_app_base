import { createReducer } from '@reduxjs/toolkit';
import { createBooking, deleteBooking, loadBookings } from './actions';
import { BookingType } from './actions';

type BookingState = {
  entities: BookingType[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: BookingState = { entities: [], loading: 'idle' };

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadBookings.fulfilled, (state, action) => {
    state.entities = action.payload;
    state.loading = 'succeeded';
  });

  builder.addCase(createBooking.fulfilled, (state, action) => {
    state.entities.push(action.payload);
    state.loading = 'succeeded';
  });

  builder.addCase(deleteBooking.fulfilled, (state, { payload }) => {
    state.entities = state.entities.filter(item => item.id !== payload);
    state.loading = 'succeeded';
  });

  builder.addCase(loadBookings.pending, state => {
    state.loading = 'pending';
  });

  builder.addCase(loadBookings.rejected, state => {
    state.loading = 'failed';
  });
});

export { reducer };
