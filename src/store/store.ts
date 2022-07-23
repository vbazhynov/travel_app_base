import { configureStore } from '@reduxjs/toolkit';
import { userReducer, tripsReducer, tripReducer } from './root-reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    trips: tripsReducer,
    trip: tripReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
