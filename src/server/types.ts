/**
 * Describes the base database entity which
 * each database entity should extend
 */
export interface BaseEntity {
  readonly date: string;
}

/**
 * Describes the options when inserting
 * a record into the database
 */
export interface InsertOptions<E extends BaseEntity> {
  readonly collectionName: string;
  readonly payload: E;
}

/**
 * Describes the options when querying
 * the database for entity records
 */
export interface QueryOptions {
  readonly collectionName: string;
  readonly filters?: QueryFilters;
}

/**
 * Describes the query filters
 */
export interface QueryFilters {
  readonly fromDate?: Date;
  readonly toDate?: Date;
}
