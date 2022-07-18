import { DEFAULT_FILTER_VALUE } from "../../../../../enums/constants/filter-defaults";
import { filterValuesType } from "../../../common/constants";
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
  filterValues: filterValuesType
) => {
  const { search, duration, level } = filterValues;
  const checkDuration = (duration: string, tripDuration: number) => {
    switch (duration) {
      case "0_x_5": {
        if (tripDuration > 0 && tripDuration <= 5) return true;
        break;
      }
      case "5_x_10": {
        if (tripDuration > 5 && tripDuration <= 10) return true;
        break;
      }
      case "10_x": {
        if (tripDuration > 10) return true;
        break;
      }
      default:
        return true;
    }
  };

  const filtered = trips.filter((elem) => {
    const isCountryMatch = elem.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const isDurationMatch =
      checkDuration(duration, elem.duration) ||
      duration === DEFAULT_FILTER_VALUE;
    const isLevelMatch = elem.level === level || level === DEFAULT_FILTER_VALUE;
    return isCountryMatch && isDurationMatch && isLevelMatch;
  });
  console.log(filtered);
  return filtered;
};

export { getFilteredTrips };
