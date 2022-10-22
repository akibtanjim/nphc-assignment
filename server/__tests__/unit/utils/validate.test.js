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
  });
  describe('getType', () => {
    it('Should get validation rules for add employee request', () => {
      const result = getRules('employeeAdd');
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('userName');
      expect(result).toHaveProperty('fullName');
      expect(result).toHaveProperty('salary');
    });
  });
});
