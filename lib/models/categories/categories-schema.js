'use strict';

const mongoose = require('mongoose');

const category = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String},
  description: { type: String},
});

module.exports = mongoose.model('category', category);