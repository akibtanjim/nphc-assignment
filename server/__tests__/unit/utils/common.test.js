/* eslint-disable no-undef */
const { getLimitOffset, getPaginatedData } = require('../../../utils');

describe('utils/common', () => {
  describe('getLimitOffset with out page', () => {
    it('Should return limit as 10 and offset as 0', async () => {
      const { limit, offset } = getLimitOffset();
      expect(limit).toBe(10);
      expect(offset).toBe(0);
    });
  });

  describe('getLimitOffset with page', () => {
    it('Should return limit as 10 and offset as 10', async () => {
      const { limit, offset } = getLimitOffset(2);
      expect(limit).toBe(10);
      expect(offset).toBe(10);
    });
  });
  describe('getLimitOffset with page & size', () => {
    it('Should return limit as 20 and offset as 0', async () => {
      const { limit, offset } = getLimitOffset(1, 20);
      expect(limit).toBe(20);
      expect(offset).toBe(0);
    });
  });

  describe('getPaginatedData', () => {
    it('Should return data with pagination info', async () => {
      const data = {
        count: 191,
        rows: [
          {
            id: 'e16665118891161724501',
            userName: 'empName16665118891169405032',
            fullName: 'পাখি',
            salary: '3644.07',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e1666511889116268106',
            userName: 'empName1666511889116901669',
            fullName: 'បក្សី',
            salary: '2710.10',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891161535094',
            userName: 'empName16665118891168994169',
            fullName: 'পাখি',
            salary: '2480.49',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891162476926',
            userName: 'empName16665118891168668290',
            fullName: 'পাখি',
            salary: '2177.39',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891166279830',
            userName: 'empName16665118891168398745',
            fullName: 'បក្សី',
            salary: '1867.61',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891168933934',
            userName: 'empName16665118891168118002',
            fullName: 'បក្សី',
            salary: '1473.00',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891166458454',
            userName: 'empName16665118891168058246',
            fullName: 'បក្សី',
            salary: '2181.35',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891169707511',
            userName: 'empName16665118891167793424',
            fullName: 'পাখি',
            salary: '3484.47',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e16665118891163218463',
            userName: 'empName16665118891167404454',
            fullName: 'পাখি',
            salary: '3544.98',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
          {
            id: 'e1666511889116216286',
            userName: 'empName16665118891166738118',
            fullName: 'পাখি',
            salary: '3246.83',
            createdAt: '2022-10-23T07:59:37.000Z',
            updatedAt: '2022-10-23T07:59:37.000Z',
          },
        ],
      };
      const { totalItems, items, totalPages, currentPage } = getPaginatedData(
        data,
        1,
        10
      );
      expect(totalItems).toBe(191);
      expect(items.length).toBe(10);
      expect(totalPages).toBe(20);
      expect(currentPage).toBe(1);
    });
  });
});
