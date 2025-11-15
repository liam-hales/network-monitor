'use server';

import { dbClient, dbReady } from '../database';
import { BaseEntity, FindOptions } from '../types';

/**
 * Used to find database records
 * in a given database collection
 *
 * @param options The find options
 * @returns The found entity records
 */
const find = async <E extends BaseEntity>(options: FindOptions<E>): Promise<E[]> => {
  const { collectionName, query } = options;

  // Make sure the database is ready before
  // attempting to insert a record
  await dbReady;

  // Get the database collection and query for the
  // records using the from and to date filters
  return dbClient
    .getCollection<E>(collectionName)
    .chain()
    .find(query)
    .simplesort('date', {
      desc: true,
    })
    .data();
};

export default find;
