import { getFilteredTrips } from "./components/filter/helpers/getfilteredtrips";
import "./style.css";
import { tripsDb } from "../../database/trips";
import { TripCard } from "./components/trip/trip-card";
import { useState } from "react";
import { Filter } from "./components/filter/filter";
import { DEFAULT_FILTER_VALUES } from "./common/constants";
import { filterValuesType } from "./common/constants";

const Main = () => {
  const [filterValues, setFilterValues] = useState<filterValuesType>(
    DEFAULT_FILTER_VALUES
  );

  const handlerFilterChange = (values: filterValuesType) => {
    setFilterValues(values);
  };

  const filteredTrips = getFilteredTrips(tripsDb, filterValues);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter values={filterValues} onChange={handlerFilterChange} />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {filteredTrips.map((trip) => (
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
      </section>
    </main>
  );
};

export { Main };
