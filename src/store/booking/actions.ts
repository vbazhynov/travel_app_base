import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpCode, HttpError } from '../../common/enums/enums';
import {
  getAllBookings,
  addBooking,
  deleteBookingById,
  // deleteBookingById,
} from '../../helpers/api/bookingApi';
import { signOut } from '../profile/actions';
// import { HttpError } from '../../common/enums/enums';
// import {
//   HttpCode,
//   StorageKey,
//   ExceptionMessage,
// } from '../../common/enums/enums';
import { ActionType } from './common';

export type BookingType = {
  id: string;
  tripId: string;
  userId: string;
  guests: number;
  totalPrice: number;
  date: string;
  createdAt: string;
  trip: {
    title: string;
    duration: number;
    price: number;
  };
};

export type AddBookingType = {
  tripId: string;
  userId: string;
  guests: number;
  date: string;
};

const loadBookings = createAsyncThunk<BookingType[]>(
  ActionType.GET_BOOKINGS,
  async (_request, { dispatch, rejectWithValue }) => {
    try {
      const bookings: BookingType[] = await getAllBookings();
      return bookings;
    } catch (err) {
      const isHttpError = err instanceof HttpError;
      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(signOut());
      }
      return rejectWithValue('Unauthorised');
    }
  },
);

const createBooking = createAsyncThunk<BookingType, AddBookingType, {}>(
  ActionType.ADD_BOOKING,
  async request => {
    const booking: BookingType = await addBooking(request);

    return booking;
  },
);

const deleteBooking = createAsyncThunk<string, string>(
  ActionType.DELETE_BOOKING,
  async request => {
    const id: string = await deleteBookingById(request);
    return id;
  },
);

export { loadBookings, createBooking, deleteBooking };
