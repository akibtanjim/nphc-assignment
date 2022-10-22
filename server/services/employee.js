'use strict';

// Load Custom Dependencies
const employeeModel = require('../models').employee;

/**
 * Create Employee
 * @param {*} data
 * @returns object (Employee)
 */
const createEmployee = async (data) => {
  return employeeModel.create(data).then((response) => response);
};

module.exports = {
  createEmployee,
};
