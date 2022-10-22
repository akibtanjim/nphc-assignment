/**
 * Load Dependencies
 */
const { parseCSVDataToJSON } = require('./csv');
const { validate, getRules } = require('./validate');

/**
 * Expose to use in other files
 */
module.exports = {
  validate,
  getRules,
  parseCSVDataToJSON,
};
