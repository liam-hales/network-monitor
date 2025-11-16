import { collectionNames } from './database';

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
  readonly query: LokiQuery<E & LokiObj>;
}

/**
 * Describes the data stored with each performance record
 * in the `performance` database collection
 */
export type PerformanceEntity = BaseEntity & PerformanceTestResults;

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
