import "./style.css";
import { tripsDb } from "../../database/trips";
import { TripCard } from "./components/trip/trip-card";
import React from "react";
import { useState } from "react";
import { Filter } from "./components/filter/filter";
import { DEFAULT_FILTER_VALUES } from "./common/constants";

const Main = () => {
  const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);

  const handlerFilterChange = (values: {
    duration?: string;
    level?: string;
    search?: string;
  }) => {
    setFilterValues(values);
    console.log(values);
  };

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter values={filterValues} onChange={handlerFilterChange} />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {tripsDb.map((trip) => (
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
