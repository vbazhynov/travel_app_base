import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { getAllTrips } from '../../helpers/api/tripsApi';
import {
  ExceptionMessage,
  HttpCode,
  HttpError,
} from '../../common/enums/enums';
import { signOut } from '../profile/actions';

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
  async (_request, { dispatch, rejectWithValue }) => {
    try {
      const trips = await getAllTrips();
      return trips;
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(signOut());
      }
      return rejectWithValue(ExceptionMessage.UNKNOWN_ERROR);
    }
  },
);
