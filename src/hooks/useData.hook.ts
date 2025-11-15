import { useContext } from 'react';
import { DataContext } from '../context';
import { DataState, DataActions } from '../context/types';

/**
 * Used to access the global data state and
 * actions provided by the `DataProvider`
 *
 * @returns The data context value
 */
const useData = (): DataState & DataActions => {

  // Check if the context value exists, if not then this
  // hook is being used outside of it's provider
  const context = useContext(DataContext);
  if (context == null) {
    throw new Error('The "useData" hook must be used within "DataProvider"');
  }

  return context;
};

export default useData;
