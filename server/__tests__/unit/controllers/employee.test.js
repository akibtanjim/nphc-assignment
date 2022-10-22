/* eslint-disable no-undef */

const { employeeAdd } = require('../../../controllers');

describe('controllers/employee', () => {
  describe('add', () => {
    it('Should return with success', async () => {
      const mock = {
        mockRequest: () => {
          const req = {};
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              id: 'emp002',
              userName: 'akibtanjim2',
              fullName: 'কর্মচারী',
              salary: 10.5,
              updatedAt: '2022-10-22T08:00:17.642Z',
              createdAt: '2022-10-22T08:00:17.642Z',
            },
            message: 'Successfully Added Employee!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await employeeAdd(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
