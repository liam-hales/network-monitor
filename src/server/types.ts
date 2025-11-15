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
  readonly collectionName: string;
  readonly payload: E;
}

/**
 * Describes the options for
 * the `find` server action
 *
 * - Generic type `E` for the entity
 */
export interface FindOptions<E extends BaseEntity> {
  readonly collectionName: string;
  readonly query: LokiQuery<E & LokiObj>;
}
