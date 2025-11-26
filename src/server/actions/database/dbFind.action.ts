'use server';

import { dbClient, dbReady } from '../../database';
import { BaseEntity, FindOptions } from '../../types';

/**
 * Used to find database records in
 * a specified database collection
 *
 * - Generic type `E` for the entity
 *
 * @param options The find options
 * @returns The found entity records
 */
const dbFind = async <E extends BaseEntity>(options: FindOptions<E>): Promise<E[]> => {
  const { collectionName, query, sort, skip = 0, limit = 20, reverse = false } = options;

  // Make sure the database is ready before
  // attempting to insert a record
  await dbReady;

  // Get the database collection and apply the
  // query and pagination options
  const builder = dbClient
    .getCollection<E>(collectionName)
    .chain()
    .find(query);

  // If the `sort` option has been set
  // then apply it to the database query
  if (sort != null) {
    const { by, order = 'asc' } = sort;

    builder.simplesort(by, {
      desc: (order === 'desc'),
    });
  }

  // Execute the database query
  // and get the data
  const data = builder
    .offset(skip)
    .limit(limit)
    .data();

  // If the `reverse` option has been set
  // then reverse the data array
  return (reverse === true)
    ? data.reverse()
    : data;
};

export default dbFind;
