import { DEFAULT_FILTER_VALUE } from "../../../enums/constants/filter-defaults";

import { FilterKey } from "../../../enums/filter/filter-key.enum";
const DEFAULT_FILTER_VALUES = {
  [FilterKey.DURATION]: DEFAULT_FILTER_VALUE,
  [FilterKey.LEVEL]: DEFAULT_FILTER_VALUE,
  [FilterKey.SEARCH]: DEFAULT_FILTER_VALUE,
};

export { DEFAULT_FILTER_VALUES };
