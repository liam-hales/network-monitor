import { RefObject } from 'react';

/**
 * The props that all component
 * props should `extends`
 *
 * - Generic type `T` for the `internalRef`
 *
 * The `internalRef` prop is used with the `withRef`
 * helper to forward component references
 *
 * @see [React - Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
 */
export interface BaseProps<T extends HTMLElement = HTMLElement> {
  readonly internalRef?: RefObject<T | null>;
  readonly className?: string;
}

/**
 * Describes the data for when a
 * network speed test is performed
 */
export interface NetworkSpeedTestResults {
  readonly idle: NetworkSpeedTestValues;
  readonly download: NetworkSpeedTestValues;
  readonly upload: NetworkSpeedTestValues;
}

/**
 * Describes the individual network
 * speed test values
 */
export interface NetworkSpeedTestValues {
  readonly bandwidth: number;
  readonly latency: number;
  readonly jitter: number;
}
