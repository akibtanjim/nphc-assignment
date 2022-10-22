/* eslint-disable no-undef */

// Load Cutom Dependencies
const { Op } = require('sequelize');
const { employee } = require('../../../models');

let employeeDetails = {};
describe('models/employee', () => {
  it('Should create new employee', async () => {
    const result = await employee.create({
      id: `emp${new Date().getTime()}`,
      userName: `empName${new Date().getTime()}`,
      fullName: 'কর্মচারী',
      salary: Math.random() * 2.5,
    });
    employeeDetails = {
      ...result,
    };
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
