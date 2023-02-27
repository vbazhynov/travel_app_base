import { BookingCard } from './components/booking-card/booking-card';
import { EmptyBooking } from './components/empty-booking/empty-booking';
import './style.css';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { useEffect } from 'react';
import { bookingActionCreator } from '../../store/actions';

const Booking = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bookingActionCreator.loadBookings());
  }, [dispatch]);

  const bookings = useAppSelector(state => state.bookings.entities);

  const cancelBookingHandler = (id: string) => {
    dispatch(bookingActionCreator.deleteBooking(id));
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.length > 0 ? (
          bookings.map(bookingcard => (
            <BookingCard
              key={bookingcard.id}
              id={bookingcard.id}
              onCancelBooking={cancelBookingHandler}
              tripId={bookingcard.tripId}
              title={bookingcard.trip.title}
              guests={bookingcard.guests}
              date={bookingcard.date}
              totalPrice={bookingcard.totalPrice}
              createdAt={bookingcard.createdAt}
            />
          ))
        ) : (
          <EmptyBooking />
        )}
      </ul>
    </main>
  );
};

export { Booking };
