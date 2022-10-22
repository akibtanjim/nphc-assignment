/* eslint-disable no-undef */
const request = require('supertest');

const { app } = require('../../../app');

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
});