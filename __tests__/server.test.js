'use strict';

const { server } = require('../lib/server'); //this will take only the server method
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Sever Module', () => {

  it('should respond with 200 on /products ', () => {
    return mockRequest.get('/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('respond with 200 to a post request to /products', () => {
    return mockRequest.post('/products').send({ name: 'test' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual('test');
      });
  });
});

