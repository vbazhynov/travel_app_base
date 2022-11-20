import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,
  tripsReducer,
  tripReducer,
  bookingReducer,
} from './root-reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tripsReducer,
    trip: tripReducer,
    bookings: bookingReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
