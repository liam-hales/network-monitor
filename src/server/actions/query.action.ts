'use server';

import { dbClient, dbReady } from '../database';
import { BaseEntity, QueryOptions } from '../types';

/**
 * Used to query the database
 * for entity records
 *
 * @param options The query options
 * @returns The found entity records
 */
const query = async <E extends BaseEntity>(options: QueryOptions): Promise<E[]> => {
  const { collectionName, filters } = options;

  // Make sure the database is ready before
  // attempting to insert a record
  await dbReady;

  // Get the database collection and query for the
  // records using the from and to date filters
  return dbClient
    .getCollection<E>(collectionName)
    .find({
      date: {
        ...(filters?.fromDate != null) && {
          $gte: filters.fromDate,
        },
        ...(filters?.toDate != null) && {
          $lte: filters.fromDate,
        },
      },
    });
};

export default query;
