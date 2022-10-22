'use strict';

//  Load Dependencies

const multer = require('multer');
const path = require('path');

const { errorResponseHandler } = require('../helpers');
const { csvMaxUploadSize } = require('../variables');

const upload = multer({
  dest: 'public/uploads',
  mimetype: 'text/csv',
  limits: { fileSize: csvMaxUploadSize },
  fileFilter: (req, file, callback) => {
    if (!file) {
      return callback(new Error('CSV file is required!'), false);
    }
    const fileSize = parseInt(req.headers['content-length']);
    var ext = path.extname(file.originalname);
    if (ext !== '.csv') {
      return callback(new Error('Only .csv file is allowed'), false);
    }
    if (fileSize > csvMaxUploadSize) {
      return callback(new Error('File size must be < 2mb'));
    }
    callback(null, true);
  },
}).single('file');

/**
 * csv upoload route middileware
 * @param {*} req
 * @param {*} res
 * @return throw error
 */

const csvUpload = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return errorResponseHandler(
        {
          status: 400,
          data: {},
          errors: {
            file: [err.message || 'Unable to upload file!'],
          },
          message: err.message || 'Unable to upload file!',
        },
        req,
        res
      );
    }
    await next();
  });
};

module.exports = csvUpload;
