import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import docsRoutes from '../routes/docs.route';
import logger from './logger';

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

export default app;
