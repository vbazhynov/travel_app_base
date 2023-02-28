import { DEFAULT_FILTER_VALUE } from '../../../common/constants/filter-defaults';

export type filterValuesType = {
  duration: string;
  level: string;
  search: string;
};
const DEFAULT_FILTER_VALUES: filterValuesType = {
  duration: DEFAULT_FILTER_VALUE,
  level: DEFAULT_FILTER_VALUE,
  search: '',
};

export { DEFAULT_FILTER_VALUES };
