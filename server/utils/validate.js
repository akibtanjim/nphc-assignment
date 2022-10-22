'use strict';

const Validator = require('validatorjs');

/**
 * List of validation rules
 */
const validationRules = {};

/**
 * Get validation rules for a specific type
 * @param {*} type
 * @returns object
 */
const getRules = (type) => {
  switch (type) {
    default:
      return {};
  }
};

/**
 * Validate user reuqest
 * @param {*} req
 * @returns boolean / throw error
 */
const validate = (type, data = {}) => {
  const rules = getRules(type);
  const validation = new Validator(data, rules);
  if (validation.fails()) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: validation.errors.all(),
      message: `Invalid Parameter(s): ${Object.keys(validation.errors.all())
        .map((item) => item)
        .join(',')}`,
    });
  }
  return true;
};

module.exports = {
  getRules,
  validate,
};
