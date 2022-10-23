/**
 * Load Dependencies
 */

const {
  createEmployee,
  bulkCreateEmployee,
  getPaginatedEmployees,
  updateEmployee,
} = require('./employee');

/**
 * Expose to use in other files
 */
module.exports = {
  createEmployee,
  bulkCreateEmployee,
  getPaginatedEmployees,
  updateEmployee,
};
