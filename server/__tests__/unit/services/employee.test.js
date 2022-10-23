/* eslint-disable no-undef */

'use strict';

// Load Custom Dependencies
const {
  createEmployee,
  bulkCreateEmployee,
  getPaginatedEmployees,
  updateEmployee,
  deleteEmployee,
} = require('../../../services');
let employee = {};
describe('services/employee', () => {
  describe('createEmployee', () => {
    it('Should successfully create new employee', async () => {
      const result = await createEmployee({
        id: `emp${new Date().getTime()}`,
        userName: `empName${new Date().getTime()}`,
        fullName: 'কর্মচারী',
        salary: Math.random() * 2.5,
      });
      employee = result;
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
  describe('getPaginatedEmployees', () => {
    it('Should successfully employee list with pagination', async () => {
      const result = await getPaginatedEmployees({
        limit: 10,
        page: 1,
      });
      return Promise.all([
        expect(typeof result).toBe('object'),
        expect(result).toHaveProperty('totalItems'),
        expect(result).toHaveProperty('items'),
        expect(result).toHaveProperty('totalPages'),
        expect(result).toHaveProperty('currentPage'),
      ]);
    });
  });
  describe('updateEmployee', () => {
    it('Should successfully update employee', async () => {
      const result = await updateEmployee(employee.id, {
        ...employee,
        salary: Number((Math.random() * (10000 - 1) + 1) * 2.5).toFixed(2),
        id: undefined,
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
  describe('deleteEmployee', () => {
    it('Should successfully delete employee', async () => {
      const result = await deleteEmployee(employee.id);
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
});
