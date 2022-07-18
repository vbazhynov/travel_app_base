import { useParams } from "react-router-dom";
import { tripsDb } from "../../database/trips";
import { Image } from "../common/image/image";

import "./style.css";

const Trip = () => {
  const { tripId } = useParams();
  const trip = tripsDb.find((trip) => trip.id === tripId);
  if (trip) {
    const { id, image, title, duration, level, description, price } = trip;
    return (
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
            <button className="trip__button button">Book a trip</button>
          </div>
        </div>
      </main>
    );
  } else return <h1>Trip Not Found</h1>;
};

export { Trip };
