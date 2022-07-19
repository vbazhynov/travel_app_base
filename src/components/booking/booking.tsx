import { BookingCard } from './components/booking-card/booking-card';
import './style.css';
import { bookingsDb } from '../../database/bookings';
import { sortByDate } from './helpers/sortbydate';
import { useState } from 'react';

const Booking = () => {
  const sortedArr = sortByDate(bookingsDb);
  const [trips, setTrips] = useState(sortedArr);

  const cancelBookingHandler = (id: string) => {
    setTrips(prevState => prevState.filter(el => el.id !== id));
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {trips.map(bookingcard => (
          <BookingCard
            key={bookingcard.id}
            onCancelBooking={cancelBookingHandler}
            id={bookingcard.id}
            title={bookingcard.trip.title}
            guests={bookingcard.guests}
            date={bookingcard.date}
            totalPrice={bookingcard.totalPrice}
            createdAt={bookingcard.createdAt}
          />
        ))}
      </ul>
    </main>
  );
};

export { Booking };
