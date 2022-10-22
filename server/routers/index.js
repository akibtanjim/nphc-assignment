'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */
const healthRoutes = require('./health');
const employeeRoutes = require('./employee');

/**
 * Create Router
 */

const routers = express.Router();

// All routes
routers.use('/', healthRoutes);
routers.use('/', employeeRoutes);

module.exports = routers;
