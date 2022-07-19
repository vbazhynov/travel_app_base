type BookingCardType = {
  id: string;
  userId?: string;
  tripId?: string;
  guests: number;
  date: string;
  title: string;
  trip?: {
    title: string;
    duration: number;
    price: number;
  };
  totalPrice: number;
  createdAt: string;
  onCancelBooking: Function;
};
const BookingCard = ({
  id,
  title,
  guests,
  date,
  totalPrice,
  createdAt,
  onCancelBooking,
}: BookingCardType) => {
  const bookCancelHandler = () => onCancelBooking(id);

  return (
    <li className="booking" data-created={createdAt} data-id={id}>
      <h3 className="booking__title">{title}</h3>
      <span className="booking__guests">{guests} guests</span>
      <span className="booking__date">{date.slice(0, 10)}</span>
      <span className="booking__total">{totalPrice} $</span>
      <button
        onClick={bookCancelHandler}
        className="booking__cancel"
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>x
      </button>
    </li>
  );
};
export { BookingCard };
