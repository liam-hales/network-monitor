import { collectionNames } from '../constants';
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

      // Loop through the collection names and create
      // the collection if it does not exist
      for (const name of collectionNames) {
        const exists = collections.some((item) => item.name === name);

        if (exists === false) {
          console.log(`Database: Creating "${name}" collection...`);
          dbClient.addCollection(name);
        }
      }

      // Once the database has loaded its data and the collections have been
      // created, call the resolve function to mark the database as ready
      _dbReadyResolve();
      console.log('Database: Ready');
    },
  },
);
