'use strict';

const { server } = require('../lib/server'); //this will take only the server method
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('500 error Module', () => {
  it('should respond with 500 on error', () => {
    return mockRequest.get('catch error').then(results =>{
      expect(results.status).toBe(500);
    }).catch(err => console.error(err));
  });
});