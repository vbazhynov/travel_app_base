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
    const { id, title, description, level, duration, price, image, createdAt } =
      action.payload;
    state.id = id;
    state.title = title;
    state.description = description;
    state.level = level;
    state.duration = duration;
    state.price = price;
    state.image = image;
    state.createdAt = createdAt;
  });
});

export { reducer };
