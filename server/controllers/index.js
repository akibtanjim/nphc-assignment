'use strict';

/**
 * Load Dependencies
 */
const { health } = require('./health');
const {
  add: employeeAdd,
  uploadCSV,
  list: employeeList,
  edit: employeeEdit,
  delete: employeeDelete,
} = require('./employee');

/**
 * Expose to use in other files
 */
module.exports = {
  health,
  employeeAdd,
  uploadCSV,
  employeeList,
  employeeEdit,
  employeeDelete,
};
