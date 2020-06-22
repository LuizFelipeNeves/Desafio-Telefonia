/* eslint-disable import/prefer-default-export */
import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from './configs/logger';
import routes from './routes';
import docsRoutes from './routes/docs.route';

/**
 * Express instance
 * @public
 */
const app = express();

// request logging. dev: console | production: file
app.use(morgan('combined', { stream: logger.stream }));

// parse body params and attache them to req.body
app.use(json());
app.use(urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

/**
 * @swagger
 * path:
 *  /status:
 *    get:
 *      summary: Get status of application
 *      tags: [Status]
 *      responses:
 *        "200":
 *          description: Ok
 */
app.get('/status', (req, res) => res.send('OK'));

app.use('/docs', docsRoutes);

// mount api v1 routes
app.use('/v1', routes);

export { app };
