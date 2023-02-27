import { DEFAULT_FILTER_VALUE } from '../../../../../common/constants/filter-defaults';
import { filterValuesType } from '../../../common/constants';
type TripCardType = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
};

const getFilteredTrips = (
  trips: TripCardType[],
  filterValues: filterValuesType,
) => {
  const { search, duration, level } = filterValues;
  const checkDuration = (duration: string, tripDuration: number) => {
    switch (duration) {
      case '0_x_5': {
        return tripDuration > 0 && tripDuration <= 5;
      }
      case '5_x_10': {
        return tripDuration > 5 && tripDuration <= 10;
      }
      case '10_x': {
        return tripDuration > 10;
      }
      default:
        return true;
    }
  };

  const filtered = trips.filter(elem => {
    const isCountryMatch = elem.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const isDurationMatch =
      checkDuration(duration, elem.duration) ||
      duration === DEFAULT_FILTER_VALUE;
    const isLevelMatch = elem.level === level || level === DEFAULT_FILTER_VALUE;
    return isCountryMatch && isDurationMatch && isLevelMatch;
  });
  return filtered;
};

export { getFilteredTrips };
