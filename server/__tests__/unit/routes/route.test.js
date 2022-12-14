/* eslint-disable no-undef */
const request = require('supertest');

const { app } = require('../../../app');
let employee = {};
describe('routes', () => {
  describe('/api/v1/health', () => {
    it('Should GET /api/v1/health with success ', async () => {
      await request(app)
        .get(`/api/v1/health`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('status'),
            expect(response.body.data).toHaveProperty('instance'),
            expect(response.body.data).toHaveProperty('name'),
            expect(response.body.data).toHaveProperty('author'),
            expect(response.body.data).toHaveProperty('version'),
          ])
        );
    });
  });
  describe('/api/v1/employees', () => {
    it('Should POST /api/v1/employees with success ', async () => {
      employee = {
        id: `emp${new Date().getTime()}`,
        userName: `empName${new Date().getTime()}`,
        fullName: 'কর্মচারী',
        salary: Math.random() * 2.5,
      };
      await request(app)
        .post(`/api/v1/employees`)
        .send(employee)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(201),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('id'),
            expect(response.body.data).toHaveProperty('userName'),
            expect(response.body.data).toHaveProperty('fullName'),
            expect(response.body.data).toHaveProperty('salary'),
            expect(response.body.data).toHaveProperty('createdAt'),
            expect(response.body.data).toHaveProperty('updatedAt'),
          ])
        );
    });
  });
  describe('/api/v1/employees/upload', () => {
    it('Should POST /api/v1/employees/upload with success ', async () => {
      await request(app)
        .post(`/api/v1/employees/upload`)
        .attach('file', `${__dirname}/../../../csv-data/test.csv`)
        .then((response) => {
          return Promise.all([
            expect(response.statusCode).toBe(201),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ]);
        });
    });
  });
  describe('/api/v1/employees', () => {
    it('Should GET /api/v1/employees', async () => {
      await request(app)
        .get(`/api/v1/employees`)
        .then((response) => {
          return Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('totalItems'),
            expect(response.body.data).toHaveProperty('items'),
            expect(response.body.data).toHaveProperty('totalPages'),
            expect(response.body.data).toHaveProperty('currentPage'),
            expect(response.body.data.currentPage).toBe(1),
          ]);
        });
    });
    it('Should GET /api/v1/employees?page=2', async () => {
      await request(app)
        .get(`/api/v1/employees?page=2`)
        .then((response) => {
          return Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('totalItems'),
            expect(response.body.data).toHaveProperty('items'),
            expect(response.body.data).toHaveProperty('totalPages'),
            expect(response.body.data).toHaveProperty('currentPage'),
            expect(response.body.data.currentPage).toBe(2),
          ]);
        });
    });
  });
  describe('/api/v1/employees', () => {
    it(`Should PUT /api/v1/employees/${employee.id}`, async () => {
      await request(app)
        .put(`/api/v1/employees/${employee.id}`)
        .send({
          salary: Number((Math.random() * (10000 - 1) + 1) * 2.5).toFixed(2),
        })
        .then((response) =>
          Promise.all([expect(response.statusCode).toBe(204)])
        );
    });
  });
  describe('/api/v1/employees', () => {
    it(`Should DELETE /api/v1/employees/${employee.id}`, async () => {
      await request(app)
        .delete(`/api/v1/employees/${employee.id}`)
        .then((response) =>
          Promise.all([expect(response.statusCode).toBe(204)])
        );
    });
  });
});
