'use strict';

const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { createEmployee } = require('../services');

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
