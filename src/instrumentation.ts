/**
 * Used to initialise the database and start
 * the network monitoring cron jobs
 */
export const register = async (): Promise<void> => {

  // Import the database code to initialise the database client, only do this when the
  // runtime is `nodejs` to make sure this runs on the server and not the client
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./server/database');
  }
};
