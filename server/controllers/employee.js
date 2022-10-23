'use strict';

const { errorResponseHandler, successResponseHandler } = require('../helpers');
const {
  createEmployee,
  bulkCreateEmployee,
  getPaginatedEmployees,
} = require('../services');

/**
 * Add Employee
 * @param {*} req
 * @param {*} res
 * @returns object
 */

exports.add = async (req, res) => {
  try {
    const { id, userName, fullName, salary } = req.body;
    const response = await createEmployee({ id, userName, fullName, salary });
    return successResponseHandler(
      res,
      response,
      'Successfully Added Employee!',
      201
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * Employee Add From CSV
 * @param {*} req
 * @param {*} res
 * @returns object
 */

exports.uploadCSV = async (req, res) => {
  try {
    const response = await bulkCreateEmployee(req.file);
    return successResponseHandler(
      res,
      response,
      'Successfully Added Employees!',
      201
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * Employee List With Pagination
 * @param {*} req
 * @param {*} res
 * @returns object
 */

exports.list = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = 'default',
      minSalary = 0,
      maxSalary = 99999999.99,
    } = req.query;
    const response = await getPaginatedEmployees({
      page,
      size: limit,
      sort,
      minSalary,
      maxSalary,
    });
    return successResponseHandler(
      res,
      response,
      'Successfully Fetched Employees!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
