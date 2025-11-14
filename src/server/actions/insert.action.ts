'use server';

import { dbClient, dbReady } from '../database';
import { BaseEntity, InsertOptions } from '../types';

/**
 * Used to insert a record
 * into the database
 *
 * - Generic type `E` for the entity
 *
 * @param options The insert options
 */
const insert = async <E extends BaseEntity>(options: InsertOptions<E>): Promise<void> => {
  const { collectionName, payload } = options;

  // Make sure the database is ready before
  // attempting to insert a record
  await dbReady;

  // Get the database collection and insert
  // the record into the database
  dbClient
    .getCollection<E>(collectionName)
    .insert(payload);
};

export default insert;
