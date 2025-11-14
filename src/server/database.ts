import DatabaseClient from 'lokijs';

/**
 * Used to store a reference to the `Promise.resolve` function from
 * `dbReady` so it can be called once the DB has been loaded
 */
let _dbReadyResolve: (value?: unknown) => void;

/**
 * Used to `await` and make sure the database has finished
 * loading its data from disk and is ready to use
 */
export const dbReady = new Promise((resolve) => {
  _dbReadyResolve = resolve;
});

/**
 * The database client used to interact
 * with the database and its data
 */
export const dbClient = new DatabaseClient(
  'network-monitor.db',
  {
    autoload: true,
    autosave: true,
    // Called once the database has finished
    // loading data from disk
    autoloadCallback: () => {
      const collections = dbClient.listCollections();

      // See if the collections
      // exists in the database
      const performanceExists = collections.some((item) => item.name === 'performance');
      const uptimeExists = collections.some((item) => item.name === 'uptime');

      // Create the database collections
      // if they do not already exist

      if (performanceExists === false) {
        console.log('Database: Creating "performance" collection...');
        dbClient.addCollection('performance');
      }

      if (uptimeExists === false) {
        console.log('Database: Creating "uptime" collection...');
        dbClient.addCollection('uptime');
      }

      // Once the database has loaded its data and the collections have been
      // created, call the resolve function to mark the database as ready
      _dbReadyResolve();
      console.log('Database: Ready');
    },
  },
);
