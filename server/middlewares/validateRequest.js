'use strict';

//  Load Dependencies

const { errorResponseHandler } = require('../helpers');
const { validate } = require('../utils');

/**
 * Validate user request
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*} next() / throws error
 */

const checkFileExistance = (file = undefined) => {
  if (!file) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: {
        file: ['CSV file is required'],
      },
      message: 'CSV file is required',
    });
  }
  return true;
};

const validateRequest =
  (type, valdationSource = 'body') =>
  async (req, res, next) => {
    try {
      switch (valdationSource) {
        case 'query':
          validate(type, req.query);
          break;
        case 'body':
          validate(type, req.body);
          break;
        case 'headers':
          validate(type, req.headers);
          break;
        case 'file':
          checkFileExistance(req?.file);
          break;
        default:
          validate(type, {});
      }
      await next();
    } catch (error) {
      errorResponseHandler(error, req, res);
    }
  };

module.exports = validateRequest;
