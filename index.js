import Debug from 'debug';
import { createServer } from 'node:http';
import './app/helpers/env.load.js';
import app from './app/index.app.js';

const debug = Debug('capital:app');

const server = createServer(app);

// Production mode or dev mode
if (process.env.NODE_ENV === 'development') {
  server.listen(3000, () => debug(`API launched on http://localhost:${3000}`));
} else if (process.env.NODE_ENV === 'production') {
  server.listen(8080, () => debug(`API launched on http://localhost:${8080}`));
}
