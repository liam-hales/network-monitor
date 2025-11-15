import { DataFilters } from '../types';

/**
 * Describes the data state which consists of
 * all data stored in the `DataProvider`
 */
export interface DataState {
  readonly filters: DataFilters;
}

/**
 * Describes the different actions that
 * the `DataProvider` can perform
 */
export interface DataActions {

  /**
   * Used to set the
   * data filters
   *
   * @param filters The filters to set
   */
  readonly setFilters: (filters: DataFilters) => void;
}
