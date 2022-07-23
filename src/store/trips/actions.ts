import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { getAllTrips, getTripById } from '../../helpers/api/tripsApi';

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

export const loadTrips = createAsyncThunk<TripType[], void, {}>(
  ActionType.GET_TRIPS,
  async () => {
    const trips = await getAllTrips();
    return trips;
  },
);

export const loadTripById = createAsyncThunk<TripType, string, {}>(
  ActionType.GET_TRIP$ID,
  async id => {
    const trips = await getTripById(id);
    return trips;
  },
);
