import { useParams } from 'react-router-dom';
import { Button } from '../common/button/button';
import { Image } from '../common/image/image';
import { useEffect, useState } from 'react';

import './style.css';
import { BookingPopup } from './components/booking-popup/booking-popup';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { tripActionCreator } from '../../store/actions';
import { TripType } from '../../store/trip/reducer';

const Trip = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tripId } = useParams();

  useEffect(() => {
    if (tripId) {
      dispatch(tripActionCreator.loadTripById(tripId));
    }
  }, [dispatch, tripId]);
  const trip = useAppSelector(state => state.trip as unknown as TripType);

  if (trip) {
    const { image, title, duration, level, description, price } = trip;

    const openModalHandler = () => {
      setIsModalOpen(true);
    };
    const onClose = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <main className="trip-page">
          <h1 className="visually-hidden">Travel App</h1>
          <div className="trip">
            <Image src={image} className="trip__img" alt="trip image" />
            <div className="trip__content">
              <div className="trip-info">
                <h3 className="trip-info__title">{title}</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration">
                    <strong>{duration}</strong> days
                  </span>
                  <span className="trip-info__level">{level}</span>
                </div>
              </div>
              <div className="trip__description">{description}</div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">{price} $</strong>
              </div>
              <Button
                onClick={openModalHandler}
                className="trip__button button"
              >
                Book a trip
              </Button>
            </div>
          </div>
        </main>
        {isModalOpen && (
          <BookingPopup isOpen={isModalOpen} onClose={onClose} trip={trip} />
        )}
      </>
    );
  } else return <h1>Trip Not Found</h1>;
};

export { Trip };
