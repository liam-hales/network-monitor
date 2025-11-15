import { createContext } from 'react';
import { DataState, DataActions } from './types';

/**
 * Used to represent the data context which can be provided with a
 * value using `.Provider` and consumed using the `useContext` hook.
 *
 * _**WARNING:** This context does not store or hold any state_
 */
const DataContext = createContext<(DataState & DataActions) | undefined>(undefined);

export default DataContext;
