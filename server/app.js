'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('@chaudhryjunaid/express-bunyan-logger');
const rateLimit = require('express-rate-limit');
/**
 * Load custom dependencies
 */
const variables = require('./variables');
const loggerOptions = require('./config/loggerOptions');
const routes = require('./routers');
const { notFound } = require('./middlewares');

const app = express();
global.__basedir = __dirname;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

if (process.env.NODE_ENV !== 'test') {
  app.use(logger(loggerOptions));
}

/**
 * API rate limit
 */
const limiter = rateLimit({
  windowMs: variables.apiRateLimitInterval * 60 * 1000,
  max: variables.apiMaxRequestLimit,
  standardHeaders: false,
  legacyHeaders: true,
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// All routes
app.use('/api/v1', routes);

app.use(notFound);

/**
 * Start the server
 */
const server =
  process.env.NODE_ENV !== 'test' ? app.listen(variables.appPort) : undefined;

/**
 * Expose the app
 */
module.exports = { app, server };
