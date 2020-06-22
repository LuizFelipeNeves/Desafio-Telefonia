/* eslint-disable import/prefer-default-export */
import app from './configs/express';
import routes from './routes';

// mount api v1 routes
app.use('/v1', routes);

export { app };
