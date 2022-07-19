import { Modal } from '../../../common/modal/modal';
import { Button } from '../../../common/button/button';
import { TripCardType } from '../../../main/components/trip/trip-card';
import React, { useState } from 'react';

type PopupType = {
  isOpen: boolean;
  onClose: Function;
  trip: TripCardType;
};

const BookingPopup = ({ isOpen, onClose, trip }: PopupType) => {
  const { title, duration, level, price } = trip;
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [dateDiff, setDateDiff] = useState(0);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dateDiff > 0) {
      alert('Date must be in future');
      return;
    }
    onClose();
  };

  const guestCountHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let guestsNum = parseInt(target.value);
    setGuests(guestsNum);
    if (!guestsNum) {
      setGuests(1);
      guestsNum = 1;
    }
    if (guestsNum > 10) {
      setGuests(10);
      guestsNum = 10;
    }
    setTotalPrice(price * guestsNum);
  };

  const dateHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const tripDate = new Date(target.value);
    const diff = Date.now() - tripDate.getTime();
    setDateDiff(diff);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <section className="trip-popup">
          <Button
            onClick={() => {
              onClose();
            }}
            className="trip-popup__close"
          >
            x
          </Button>
          <form
            onSubmit={submitHandler}
            className="trip-popup__form"
            autoComplete="off"
          >
            <div className="trip-info">
              <h3 className="trip-info__title">{title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{duration}</strong> days
                </span>
                <span className="trip-info__level">{level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input onChange={dateHandler} name="date" type="date" required />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input
                onChange={guestCountHandler}
                name="guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                required
              />
            </label>
            <span className="trip-popup__total">
              Total:{' '}
              <output className="trip-popup__total-value">{totalPrice}$</output>
            </span>
            <button className="button" type="submit">
              Book a trip
            </button>
          </form>
        </section>
      </div>
    </Modal>
  );
};

export { BookingPopup };
