import { Image } from '../../../common/image/image';
import { Link } from 'react-router-dom';

export type TripCardType = {
  id: string;
  image: string;
  duration: number;
  title: string;
  price: number;
  level: string;
};

const TripCard = ({
  id,
  image,
  duration,
  title,
  price,
  level,
}: TripCardType) => {
  return (
    <li className="trip-card">
      <Image src={image} alt="trip" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{duration}</strong> days
            </span>
            <span className="trip-info__level">{level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{`${price} $`}</strong>
        </div>
      </div>
      <Link to={`/trip/${id}`} className="button">
        {' '}
        Discover a trip
      </Link>
    </li>
  );
};

export { TripCard };
