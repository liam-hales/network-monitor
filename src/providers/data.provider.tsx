'use client';

import { FunctionComponent, ReactElement, ReactNode, useState } from 'react';
import { DataContext } from '../context';
import { BaseProps, DataFilters } from '../types';
import dayjs from 'dayjs';

/**
 * The `DataProvider` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * Used to provide the global
 * data state and actions
 *
 * @param props The component props
 * @returns The `DataProvider` component
 * @example
 *
 * return (
 *   <DataProvider>
 *     { ... }
 *   </DataProvider>
 * );
 */
const DataProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const [filters, setFilters] = useState<DataFilters>(() => {
    return {
      fromDate: dayjs
        .utc()
        .subtract(7, 'days')
        .toDate(),
      toDate: dayjs
        .utc()
        .toDate(),
    };
  });

  return (
    <DataContext.Provider value={
      {
        filters: filters,
        setFilters: setFilters,
      }
    }
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
