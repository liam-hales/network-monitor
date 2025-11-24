import { collectionNames } from '../constants';

/**
 * Describes the database
 * collection names
 */
export type CollectionName = typeof collectionNames[number];

/**
 * Describes the base database entity which
 * each database entity should extend
 */
export interface BaseEntity {
  readonly date: string;
  readonly host: Host;
  readonly network: Network;
}

/**
 * Describes the options for
 * the `insert` server action
 *
 * - Generic type `E` for the entity
 */
export interface InsertOptions<E extends BaseEntity> {
  readonly collectionName: CollectionName;
  readonly payload: E;
}

/**
 * Describes the options for
 * the `find` server action
 *
 * - Generic type `E` for the entity
 */
export interface FindOptions<E extends BaseEntity> {
  readonly collectionName: CollectionName;
  readonly query?: LokiQuery<E & LokiObj>;
  readonly sort?: SortOptions<E>;
  readonly skip?: number;
  readonly limit?: number;
}

/**
 * Describes the sort options for
 * the `find` server action
 *
 * - Generic type `E` for the entity
 */
export interface SortOptions<E extends BaseEntity> {
  readonly by: keyof E;
  readonly order?: 'asc' | 'desc';
}

/**
 * Describes the data stored with each performance record
 * in the `network_performance` database collection
 */
export type PerformanceEntity = BaseEntity & PerformanceTestResults;

/**
 * Describes the data stored with each uptime record
 * in the `network_uptime` database collection
 */
export interface UptimeEntity extends BaseEntity {
  readonly status: 'success' | 'failure';
  readonly time: number;
  readonly output: string;
}

/**
 * Describes the host data
 */
export interface Host {
  readonly privateIpAddress: string;
  readonly macAddress: string;
}

/**
 * Describes the network data
 */
export interface Network {
  readonly publicIpAddress: string;
  readonly isp: string;
  readonly latitude: number;
  readonly longitude: number;
}

/**
 * Describes the data received when a
 * network performance test is performed
 */
export interface PerformanceTestResults {
  readonly idle: PerformanceTestValues;
  readonly download: PerformanceTestValues;
  readonly upload: PerformanceTestValues;
}

/**
 * Describes the individual
 * network performance test values
 */
export interface PerformanceTestValues {
  readonly bandwidth: number;
  readonly latency: number;
  readonly jitter: number;
}
