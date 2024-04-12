import Debug from 'debug';
import pg from 'pg';

const debug = Debug('capital:database');

const { Pool } = pg;

const client = new Pool();

client.connect().then(() => {
  debug('database client connected');
});

export default {
  originalClient: client,
  async query(...params) {
    return this.originalClient.query(...params);
  },
};
