'use strict';

const { server } = require('../lib/server'); //this will take only the server method
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Categories API Moddule', () => {
  it('can post()', () => {
    const obj = { name: 'creams', display_name: 'creams', description: 'face cream' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        const record = data.body; // _id
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  
  it('can get()', () => {
    const obj = { name: 'creams', display_name: 'creams', description: 'face cream' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/categories').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body[1][key]).toEqual(obj[key]);
          });
        });
      });
  });
});
