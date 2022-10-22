'use strict';
const fs = require('fs');

const parseCSVDataToJSON = ({ path = undefined }) => {
  try {
    if (!path) {
      throw Object.assign({}, new Error(), {
        status: 400,
        data: {},
        errors: {},
        message: `Invalid file path`,
      });
    }
    const csv = fs.readFileSync(path);
    const csvData = csv.toString().split('\r') || [];
    if (csvData && csvData.length && csvData[0] === '') {
      throw Object.assign({}, new Error(), {
        status: 400,
        data: {},
        errors: {},
        message: `Empty CSV Uploaded`,
      });
    }
    const data = [];
    const headers = ['id', 'userName', 'fullName', 'salary'];
    for (let i = 0; i < csvData.length - 1; i++) {
      let item = {};
      if (csvData[i] && csvData[i].indexOf('#') === -1) {
        const values = csvData[i].replace('\n', '').split(',');
        for (const j in headers) {
          if (values[j].includes(', ')) {
            item[headers[j]] = values[j].split(', ').map((item) => item.trim());
          } else item[headers[j]] = values[j];
        }
        data.push(item);
      }
    }
    if (process.env.NODE_ENV !== 'test') {
      fs.unlinkSync(`${__basedir}/${path}`);
    }
    return data;
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') {
      fs.unlinkSync(`${__basedir}/${path}`);
    }
    const message =
      err?.message &&
      (err?.message === 'Empty CSV Uploaded' ||
        err?.message === 'Invalid file path')
        ? err.message
        : `Unable Upload The Requested File. Please Try Again!`;
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: {},
      message,
    });
  }
};

module.exports = {
  parseCSVDataToJSON,
};
