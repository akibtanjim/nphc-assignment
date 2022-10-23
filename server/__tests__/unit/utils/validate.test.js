/* eslint-disable no-undef */

'use strict';

const { getRules, validate } = require('../../../utils');

describe('utils/validation', () => {
  describe('validate', () => {
    it('Should validate add employee request', () => {
      const data = {
        id: 'emp002',
        userName: 'akibtanjim2',
        fullName: 'কর্মচারী',
        salary: 10.5,
      };
      const result = validate('employeeAdd', data);
      expect(result).toBeTruthy();
    });
    it('Should in-validate add employee request for wrong formatted user name', () => {
      try {
        const data = {
          id: 'emp002',
          userName: 'akibtanjim2@',
          fullName: 'কর্মচারী',
          salary: 10.5,
        };
        validate('employeeAdd', data);
      } catch (error) {
        expect(error).toHaveProperty('errors');
        expect(error.message).toBe('Invalid Parameter(s): userName');
      }
    });
    it('Should validate employee list request', () => {
      const data = {
        page: 1,
        limit: 10,
        sort: 'default',
      };
      const result = validate('employeeList', data);
      expect(result).toBeTruthy();
    });
    it('Should in-validate list employee request for wrong formatted page', () => {
      try {
        const data = {
          page: 'khk',
          limit: 10,
          sort: 'default',
        };
        validate('employeeList', data);
      } catch (error) {
        expect(error).toHaveProperty('errors');
        expect(error.message).toBe('Invalid Parameter(s): page');
      }
    });
    it('Should validate employee edit request', () => {
      const data = {
        userName: `akibtanjim2${new Date().getTime()}`,
        fullName: 'কর্মচারী',
        salary: 10.5,
      };
      const result = validate('employeeEdit', data);
      expect(result).toBeTruthy();
    });
    it('Should in-validate edit employee request for wrong formatted userName', () => {
      try {
        const data = {
          userName: `akibtanjim@}`,
          fullName: 'কর্মচারী',
          salary: 10.5,
        };
        validate('employeeList', data);
      } catch (error) {
        expect(error).toHaveProperty('errors');
        expect(error.message).toBe('Invalid Parameter(s): userName');
      }
    });
  });
  describe('getType', () => {
    it('Should get validation rules for add employee request', () => {
      const result = getRules('employeeAdd');
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('userName');
      expect(result).toHaveProperty('fullName');
      expect(result).toHaveProperty('salary');
    });
    it('Should get validation rules for employee list request', () => {
      const result = getRules('employeeList');
      expect(result).toHaveProperty('limit');
      expect(result).toHaveProperty('page');
      expect(result).toHaveProperty('sort');
    });
    it('Should get validation rules for employee edit request', () => {
      const result = getRules('employeeEdit');
      expect(result).toHaveProperty('userName');
      expect(result).toHaveProperty('fullName');
      expect(result).toHaveProperty('salary');
    });
  });
});
