'use strict';

require('@code-fellows/supergoose');
const categoriesModel = require('../lib/models/categories/categories-model');
const obj = { name: 'creams', display_name: 'creams', description: 'face cream' };

describe('categories Model', () => {
  it('create', () => {
    return categoriesModel.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });

  it('get', () => {
    return categoriesModel.read().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
});