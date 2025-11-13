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

/**
 * Describes a single chart
 * tooltip data point
 */
export interface ChartTooltipDataPoint {
  readonly name: string;
  readonly value: string;
  readonly color: string;
  readonly dataKey: string;
}

/**
 * Describes the axis data for
 * the `LineChart` component
 */
export interface ChartAxis {
  readonly name: string;
  readonly key: string;
  readonly formatter?: (value: string) => string;
}

/**
 * Describes the line data for
 * the `LineChart` component
 */
export interface ChartLine {
  readonly name: string;
  readonly key: string;
  readonly colour: string;
}

/**
 * Describes a single data
 * point for a chart
 *
 * - Generic type `K` for the data point keys
 */
export type ChartDataPoint<K extends string = never> = Record<K, number> & {
  readonly date: string;
};
