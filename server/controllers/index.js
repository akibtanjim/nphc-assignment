'use strict';

/**
 * Load Dependencies
 */
const { health } = require('./health');
const { add: employeeAdd, uploadCSV } = require('./employee');

/**
 * Expose to use in other files
 */
module.exports = {
  health,
  employeeAdd,
  uploadCSV,
};
