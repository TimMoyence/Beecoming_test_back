import cookieParser from 'cookie-parser';
import cors from 'cors';
import Debug from 'debug';
import express from 'express';
import router from './routers/index.router.js';

const debug = Debug('capital:index:app');

const app = express();

app.use('/static', express.static('uploads'));

app.use(cookieParser());
// middleaware pour récupérer un body au format JSON
app.use(express.json());
// On peut donner la possibilité d'utiliser les 2 format dans la même app
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);
// Routes
app.use(router);

export default app;
