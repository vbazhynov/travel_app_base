import { getFilteredTrips } from './components/filter/helpers/getfilteredtrips';
import './style.css';
import { TripCard } from './components/trip/trip-card';
import { useEffect, useState } from 'react';
import { Filter } from './components/filter/filter';
import { DEFAULT_FILTER_VALUES } from './common/constants';
import { filterValuesType } from './common/constants';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { profileActionCreator, tripsActionCreator } from '../../store/actions';
import { AppRoute, StorageKey } from '../../common/enums/enums';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const hasToken = Boolean(localStorage.getItem(StorageKey.TOKEN));

  useEffect(() => {
    if (hasToken) {
      dispatch(profileActionCreator.loadCurrentUser());
    } else {
      navigate(AppRoute.SIGN_IN);
    }
  }, [navigate, hasToken, dispatch]);

  useEffect(() => {
    dispatch(tripsActionCreator.loadTrips());
  }, [dispatch]);

  const status = useAppSelector(state => state.trips.status);
  const trips = useAppSelector(state => state.trips.list);
  const tripsArr = [...trips];
  const [filterValues, setFilterValues] = useState<filterValuesType>(
    DEFAULT_FILTER_VALUES,
  );

  const handlerFilterChange = (values: filterValuesType) => {
    setFilterValues(values);
  };

  const filteredTrips = getFilteredTrips(tripsArr, filterValues);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter values={filterValues} onChange={handlerFilterChange} />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        {status === 'pending' && <div className="loader"></div>}
        {status === 'succeeded' && (
          <ul className="trip-list">
            {filteredTrips.map(trip => (
              <TripCard
                id={trip.id}
                level={trip.level}
                duration={trip.duration}
                image={trip.image}
                title={trip.title}
                price={trip.price}
                key={trip.id}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export { Main };
