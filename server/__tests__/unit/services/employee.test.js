/* eslint-disable no-undef */

'use strict';

// Load Custom Dependencies
const { createEmployee, bulkCreateEmployee } = require('../../../services');

describe('services/employee', () => {
  describe('createEmployee', () => {
    it('Should successfully create new employee', async () => {
      const result = await createEmployee({
        id: `emp${new Date().getTime()}`,
        userName: `empName${new Date().getTime()}`,
        fullName: 'কর্মচারী',
        salary: Math.random() * 2.5,
      });
      return Promise.all([
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('userName'),
        expect(result).toHaveProperty('fullName'),
        expect(result).toHaveProperty('salary'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
      ]);
    });
  });
  describe('bulkCreateEmployee', () => {
    it('Should successfully bulk create or update employee(s)', async () => {
      const result = await bulkCreateEmployee({
        path: `${__dirname}/../../../csv-data/test.csv`,
      });
      return Promise.all([
        expect(Array.isArray(result)).toBe(true),
        expect(result.length || 0).toBe(5),
      ]);
    });
  });
});
