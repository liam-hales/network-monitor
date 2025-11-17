import { CronJob } from 'cron';
import { performanceTest, dbInsert } from '../actions';
import { PerformanceEntity } from '../types';
import date from '../../date';

/**
 * Used to monitor network performance via a cron
 * job using the `cron` package under the hood
 *
 * - Runs every 30th minute
 * - Performs a network performance test
 * - Inserts a record into the `performance` database collection
 */
const performanceCron = new CronJob('*/30 * * * *', async (): Promise<void> => {

  // Run the performance test and await the entire generator
  // Once done, extract the last part to obtain the final results
  const streamValue = performanceTest();
  const results = (await Array.fromAsync(streamValue)).at(-1);

  // There should always be results
  // but if not, then return
  if (results == null) {
    return;
  }

  const currentDate = date
    .utc()
    .toISOString();

  // Insert a performance record into the
  // database with the date and results
  await dbInsert<PerformanceEntity>({
    collectionName: 'network_performance',
    payload: {
      ...results,
      date: currentDate,
    },
  });
});

export default performanceCron;
