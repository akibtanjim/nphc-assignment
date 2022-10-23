/* eslint-disable no-undef */

// Load Cutom Dependencies
const { Op } = require('sequelize');
const { employee, sequelize } = require('../../../models');
const employeeModel = require('../../../models').employee;

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
  it('Should create employees in bulk', async () => {
    const transaction = await sequelize.transaction();
    try {
      const result = await employee.bulkCreate(
        [
          {
            id: 'e0001',
            userName: 'hpotter',
            fullName: 'Harry Potter',
            salary: '1234.00',
          },
          {
            id: 'e0002',
            userName: 'rwesley',
            fullName: 'Ron Weasley',
            salary: '19234.50',
          },
          {
            id: 'e0003',
            userName: 'ssnape',
            fullName: 'Severus Snape',
            salary: '4000.0',
          },
          {
            id: 'e0004',
            userName: 'rhagrid',
            fullName: 'Rubeus Hagrid',
            salary: '3999.999',
          },
          {
            id: 'e0005',
            userName: 'voldemort',
            fullName: 'Lord Voldemort',
            salary: '523.4',
          },
        ],
        {
          transaction,
          updateOnDuplicate: ['userName', 'fullName', 'salary'],
          returning: true,
          validate: true,
        }
      );
      await transaction.commit();
      return Promise.all([
        expect(Array.isArray(result)).toBe(true),
        expect(result.length || 0).toBe(5),
      ]);
    } catch (error) {
      await transaction.rollback();
    }
  });
  it('Should fetch employee list with pagination', async () => {
    const result = await employeeModel.findAndCountAll({
      limit: 10,
      offset: 0,
      order: [['createdAt', 'DESC']],
      where: {
        salary: {
          [Op.between]: [0, 99999999.99],
        },
      },
    });
    return Promise.all([
      expect(typeof result).toBe('object'),
      expect(result).toHaveProperty('count'),
      expect(result).toHaveProperty('rows'),
    ]);
  });
});
