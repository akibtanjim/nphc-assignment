'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { employeeAdd } = require('../controllers');
const validateRequest = require('../middlewares/validateRequest');

/**
 * Create Router
 */

const router = express.Router();

/**
 * employee related routes
 */
router.post('/employees', validateRequest('employeeAdd'), employeeAdd);

module.exports = router;
