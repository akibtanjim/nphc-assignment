'use strict';

const Validator = require('validatorjs');

/**
 * List of validation rules
 */
const validationRules = {
  employeeAdd: {
    id: 'required|string|alpha_num',
    userName: 'required|string|alpha_num',
    fullName: 'required|string',
    salary: 'required|numeric',
  },
  employeeList: {
    page: 'required_if:page,|integer',
    limit: 'required_if:limit,|integer',
    sort: 'required_if:limit,|string|in:id_asc,id_desc,userName_asc,userName_desc,fullName_asc,fullName_desc,salary_asc,salary_desc,default',
  },
  employeeEdit: {
    userName:
      'required_if:userName,|string|alpha_num|required_without_all:fullName,salary',
    fullName:
      'required_if:fullName,|string|required_without_all:userName,salary',
    salary:
      'required_if:salary,|numeric|required_without_all:userName,fullName',
  },
};

/**
 * Get validation rules for a specific type
 * @param {*} type
 * @returns object
 */
const getRules = (type) => {
  switch (type) {
    case 'employeeAdd':
      return validationRules.employeeAdd;
    case 'employeeList':
      return validationRules.employeeList;
    case 'employeeEdit':
      return validationRules.employeeEdit;
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
