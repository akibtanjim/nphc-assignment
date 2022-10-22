'use strict';

/**
 * Load Dependencies
 */
const express = require('express');
const multer = require('multer');
const path = require('path');

/**
 * Load custom dependencies
 */

const { employeeAdd, uploadCSV } = require('../controllers');
const { csvUpload, validateRequest } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * employee related routes
 */
router.post('/employees', validateRequest('employeeAdd'), employeeAdd);
router.post(
  '/employees/upload',
  [csvUpload, validateRequest('csvUpload', 'file')],
  uploadCSV
);

module.exports = router;
