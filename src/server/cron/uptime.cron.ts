import { CronJob } from 'cron';
import { dbFindOne, dbInsert, getHostDevice, getNetwork } from '../actions';
import { UptimeEntity } from '../types';
import { uptimeHosts } from '../../constants';
import date from '../../date';
import ping from 'ping';

/**
 * Used to monitor network uptime via a cron
 * job using the `cron` package under the hood
 *
 * - Runs every 30th minute
 * - Performs an uptime check by pinging a list of pre-defined hosts
 * - Inserts uptime records into the `network_uptime` database collection
 */
const uptimeCron = new CronJob('*/30 * * * *', async (): Promise<void> => {

  // Fetch the host device and public network
  // data to add to the record data
  const hostDevice = await getHostDevice();
  const publicNetwork = await getNetwork();

  const currentDate = date
    .utc()
    .toISOString();

  // Loop through the uptime hosts
  // and ping each one
  for (const uptimeHost of uptimeHosts) {
    const { alive, time, output } = await ping.promise.probe(uptimeHost, {
      timeout: 5,
    });

    const status = (alive === true) ? 'success' : 'failure';
    const latency = (alive === true) ? time : 0;

    // Find the previous uptime record
    // from the database for the same host
    const previous = await dbFindOne<UptimeEntity>({
      collectionName: 'network_uptime',
      query: {
        forHost: uptimeHost,
      },
      sort: {
        by: 'date',
        order: 'desc',
      },
    });

    // If the previous record status matches the new status
    // then there is no need to insert a record, so return
    if (previous?.status === status) {
      return;
    }

    await dbInsert<UptimeEntity>({
      collectionName: 'network_uptime',
      payload: {
        forHost: uptimeHost,
        status: status,
        latency: latency,
        output: output,
        date: currentDate,
        metadata: {
          hostDevice: hostDevice,
          publicNetwork: publicNetwork,
        },
      },
    });
  }
});

export default uptimeCron;
