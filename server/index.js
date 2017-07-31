/* eslint consistent-return:0 */
const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const bodyParser = require('body-parser');
const resolve = path.resolve;
require('dotenv').load({ path: '.env' });

const logger = require('./logger');
const setup = require('./middlewares/frontendMiddleware');
const swaggerDocument = require('./api/docs/swagger.json');

const userRouter = require('./api/user');
const cmntRouter = require('./api/cmnt');
const meetRouter = require('./api/meet');

const app = express();


const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.use('/user', userRouter);
app.use('/cmnts', cmntRouter);
app.use('/meets', meetRouter);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
