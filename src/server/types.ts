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
  readonly metadata: {
    readonly hostDevice: HostDevice;
    readonly publicNetwork: PublicNetwork;
  };
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
 * the `dbFindOne` server action
 *
 * - Generic type `E` for the entity
 */
export interface FindOneOptions<E extends BaseEntity> {
  readonly collectionName: CollectionName;
  readonly query?: LokiQuery<E & LokiObj>;
  readonly sort?: SortOptions<E>;
}

/**
 * Describes the options for
 * the `dbFind` server action
 *
 * - Generic type `E` for the entity
 */
export interface FindOptions<E extends BaseEntity> extends FindOneOptions<E> {
  readonly skip?: number;
  readonly limit?: number;
  readonly reverse?: boolean;
}

/**
 * Describes the sort options for
 * the `dbFind` server action
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
  readonly forHost: string;
  readonly status: 'success' | 'failure';
  readonly latency: number;
  readonly output: string;
}

/**
 * Describes the host
 * device data
 */
export interface HostDevice {
  readonly ipAddress: string;
  readonly macAddress: string;
}

/**
 * Describes the public
 * network data
 */
export interface PublicNetwork {
  readonly ipAddress: string;
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
  readonly throughput: number;
  readonly latency: number;
  readonly jitter: number;
}
