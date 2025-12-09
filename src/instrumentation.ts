/**
 * Used to initialise the database and start
 * the network monitoring cron jobs
 */
export const register = async (): Promise<void> => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {

    // Import the database code to
    // initialise the database client
    await import('./server/database');

    // Import the cron job functions
    // and start each one
    const { performanceCron, uptimeCron } = await import('./server/cron');

    performanceCron.start();
    uptimeCron.start();
  }
};
