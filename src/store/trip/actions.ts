import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { getTripById } from '../../helpers/api/tripsApi';

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

export const loadTripById = createAsyncThunk<TripType, string, {}>(
  ActionType.GET_TRIP$ID,
  async id => {
    const trips = await getTripById(id);
    return trips;
  },
);
