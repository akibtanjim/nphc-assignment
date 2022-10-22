'use strict';

const { ValidationError } = require('sequelize');
const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { createEmployee } = require('../services');
const { bulkCreateEmployee } = require('../services/employee');

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
      'Successfully Added Employees!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
