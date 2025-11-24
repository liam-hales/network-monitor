'use server';

import { dbReady } from '../../database';
import { BaseEntity, FindOneOptions } from '../../types';
import { dbFind } from '../';

/**
 * Used to find a single database record
 * in a specified database collection
 *
 * - Generic type `E` for the entity
 *
 * @param options The find one options
 * @returns The found entity record
 */
const dbFindOne = async <E extends BaseEntity>(options: FindOneOptions<E>): Promise<E | undefined> => {

  // Make sure the database is ready before
  // attempting to insert a record
  await dbReady;

  // Find the entity using the `dbFind` server action and apply
  // the `limit` option so only one record is returned
  const entities = await dbFind<E>({
    ...options,
    limit: 1,
  });

  return entities.at(0);
};

export default dbFindOne;
