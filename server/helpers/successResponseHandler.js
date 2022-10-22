'use strict';

/**
 * Common Success Response Handler
 * @param {*} res
 * @param {*} data
 * @param {*} message
 * @returns response
 */
exports.successResponseHandler = (res, data, message, statusCode = 200) =>
  res.status(statusCode).json({
    status: 'success',
    data,
    message,
  });
