'use strict';

const { ValidationError, Op } = require('sequelize');
const { sequelize } = require('../models');
const util = require('util');
const {
  parseCSVDataToJSON,
  getLimitOffset,
  getPaginatedData,
} = require('../utils');

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

const getErrorInfo = (error) => {
  let errObj = {};
  if (error && error instanceof ValidationError) {
    error.errors.map((er) => {
      errObj[er.path] = er.message;
    });
  } else if (error && error.name === 'AggregateError') {
    let errs = {};
    JSON.stringify(error?.errors || [], (key, value) => {
      errs = JSON.parse(JSON.stringify(value));
    });
    errs.map((er) => {
      return er?.errors?.errors?.map((e) => {
        errObj[e.path] = e.message;
      });
    });
  }
  return errObj;
};

/**
 * Bulk upsert in db
 * @param {*} data
 * @returns array / throws error
 */

const employeeBulkInsert = async (data) => {
  const transaction = await sequelize.transaction();
  try {
    const response = await employeeModel.bulkCreate(data, {
      transaction,
      updateOnDuplicate: ['userName', 'fullName', 'salary'],
      returning: true,
      validate: true,
    });
    await transaction.commit();
    return response;
  } catch (error) {
    await transaction.rollback();
    const errObj = getErrorInfo(error);
    throw Object.keys(errObj).length === 0
      ? error
      : Object.assign({}, new Error(), {
          status: 400,
          data: {},
          errors: [errObj],
          message: `Invalid Parameter(s): ${Object.keys(errObj)
            .map((item) => item)
            .join(',')}`,
        });
  }
};

/**
 * Bulk employee create from csv file
 * @param {*} file
 * @returns array
 */
const bulkCreateEmployee = async (file = {}) => {
  const csvData = parseCSVDataToJSON(file);
  return employeeBulkInsert(csvData);
};

/**
 * Prepare Order By Fields
 * @param {*} sort
 * @returns array
 */
const getOrderByOptions = (sort = 'default') => {
  switch (sort) {
    case 'id_asc':
      return [['id', 'ASC']];
    case 'id_desc':
      return [['id', 'DESC']];
    case 'userName_asc':
      return [['userName', 'ASC']];
    case 'userName_desc':
      return [['userName', 'DESC']];
    case 'fullName_asc':
      return [['fullName', 'ASC']];
    case 'fullName_desc':
      return [['fullName', 'DESC']];
    case 'salary_asc':
      return [['salary', 'ASC']];
    case 'salary_desc':
      return [['salary', 'DESC']];
    default:
      return [['createdAt', 'DESC']];
  }
};

/**
 * Get Employee list with pagination
 * @param {*} page
 * @param {*} size
 * @param {*} sort
 * @returns array
 */
const getPaginatedEmployees = async ({
  page = 1,
  size = 10,
  sort = 'default',
  minSalary = 0,
  maxSalary = 99999999.99,
}) => {
  const { limit, offset } = getLimitOffset(page, size);
  const order = getOrderByOptions(sort);
  return employeeModel
    .findAndCountAll({
      limit,
      offset,
      order,
      where: {
        salary: {
          [Op.between]: [minSalary, maxSalary],
        },
      },
    })
    .then((data) => getPaginatedData(data, page, limit));
};

module.exports = {
  createEmployee,
  bulkCreateEmployee,
  getPaginatedEmployees,
};
