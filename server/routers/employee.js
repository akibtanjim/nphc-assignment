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

const {
  employeeAdd,
  uploadCSV,
  employeeList,
  employeeEdit,
  employeeDelete,
} = require('../controllers');
const { csvUpload, validateRequest } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * employee related routes
 */
router.get(
  '/employees',
  validateRequest('employeeList', 'query'),
  employeeList
);
router.post('/employees', validateRequest('employeeAdd'), employeeAdd);
router.post(
  '/employees/upload',
  [csvUpload, validateRequest('', 'file')],
  uploadCSV
);
router.put('/employees/:id', validateRequest('employeeEdit'), employeeEdit);
router.delete('/employees/:id', employeeDelete);

module.exports = router;
