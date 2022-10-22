/* eslint-disable no-undef */

'use strict';
const { parseCSVDataToJSON } = require('../../../utils');

describe('utils/csv', () => {
  describe('parseCSVDataToJSON', () => {
    it('Should return an array containing list of parsed data', () => {
      const result = parseCSVDataToJSON({
        path: `${__dirname}/../../../csv-data/test.csv`,
      });
      expect(typeof result).toBe('object');
    });
    it('Should throw error for empty csv', () => {
      try {
        const result = parseCSVDataToJSON({
          path: `${__dirname}/../../../csv-data/empty.csv`,
        });
      } catch (error) {
        expect(error.status).toBe(400);
        expect(error.message).toBe('Empty CSV Uploaded');
      }
    });
  });
});
