'use strict';

const { Model } = require('sequelize');

/**
 *  Employee Model
 */

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {}
  Employee.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
          notEmpty: true,
          isAlphanumeric: {
            msg: 'id must be alphanumeric',
          },
        },
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        unique: true,
        validate: {
          notEmpty: true,
          isAlphanumeric: {
            msg: 'Username must be alphanumeric',
          },
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
        },
      },
      salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        validate: {
          notEmpty: true,
          isDecimal: true,
        },
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'employee',
    }
  );
  return Employee;
};
