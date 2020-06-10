'use strict';

const { server } = require('../lib/server'); //this will take only the server method
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Sever Module', () => {

  it('respond with 200 to a post request to /products', () => {
    return mockRequest.post('/products').send({ name: 'test' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual('test');
      });
  });

  it('should respond with 200 on /products ', () => {
    return mockRequest.get('/products').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('should respond with 200 on /products/:id ', () => {
    return mockRequest.get('/products/1').then((results) => {
      expect(results.status).toBe(200);
    });
  });


  it('respond with 200 when editing using /products/:id', () => {
    return mockRequest.put('/products/1').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('respond with 200 when deleteing using /products/:id', () => {
    return mockRequest.delete('/products/1').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('respond with 200 to a post request to /categories', () => {
    return mockRequest.post('/categories').send({ name: 'test' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual('test');
      });
  });

  it('should respond with 200 on /categories ', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('should respond with 200 on /categories/:id ', () => {
    return mockRequest.get('/categories/1').then((results) => {
      expect(results.status).toBe(200);
    });
  });


  it('respond with 200 when editing using /categories/:id', () => {
    return mockRequest.put('/categories/1').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  it('respond with 200 when deleteing using /categories/:id', () => {
    return mockRequest.delete('/categories/1').then((results) => {
      expect(results.status).toBe(200);
    });
  });
});

