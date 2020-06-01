'use strict';

const express=require('express');
const notFoundHandler = require('./middleware/404');
const errorHandler=require('./middleware/500');
const logger= require('./middleware/logger');
const timeStamp = require('./middleware/timestamp');
require('dotenv').config();
// const PORT = process.env.PORT || 4000;
const app=express();

app.use(express.json()); //body-parser to add body to the req

app.use(timeStamp);
app.use(logger);

// app.get('/products', (req, res) => {
//   const data = {
//     name: req.query.name,
//     description: req.query.description,
//   };
//   res.status(200).json(data);
// });


let db=[];

app.post('/products', (req, res) => {
  const { category, name, display_name, description } = req.body;
  const record = {category, name, display_name, description};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.get('/products', (req, res) => {
  const count = db.length;
  const results = db;
  res.json({ count, results });
});

app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  const data = {
    name: db[id-1].name,
    description: db[id-1].description,
    id: id,
  };
  res.json(data);
});

app.put('/products/:id', (req, res) => {
  let id = req.params.id;
  let {category, name, display_name, description} = req.body;
  let updatedRecord = { category, name, display_name, description};
  db = db.map((record) =>{
    if(record.id===parseInt(id)){
      return updatedRecord;
    }
    return record;
  });
  res.json(updatedRecord);
});

app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  db.map((record)=>{
    if(record.id === parseInt(id)){
      db.splice(id-1,1);
    }
  });
  res.json({ message :'Product deleted' });
});


let categoriesDb=[];

app.post('/categories', (req, res) => {
  const { name, display_name, description } = req.body;
  const record = { name, display_name, description }; 
  record.id = categoriesDb.length + 1;
  categoriesDb.push(record);
  res.json(record);
});

app.get('/categories', (req, res) => {
  const count = categoriesDb.length;
  const results = categoriesDb;
  res.json({ count, results });
});

app.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  const data = {
    name: categoriesDb[id-1].name,
    description: categoriesDb[id-1].description,
    id: id,
  };
  res.json(data);
});

app.put('/categories/:id', (req, res) => {
  let id = req.params.id;
  let { name, display_name, description } = req.body;
  let updatedRecord = { name, display_name, description };
  categoriesDb = categoriesDb.map((record) =>{
    if(record.id===parseInt(id)){
      return updatedRecord;
    }
    return record;
  });
  res.json(updatedRecord);
});

app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  categoriesDb.map((record)=>{
    if(record.id === parseInt(id)){
      categoriesDb.splice(id-1,1);
    }
  });
  res.json({ message :'Category deleted' });
});


app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
  server:app,
  start: (port)=>{
    const PORT =  port || process.env.PORT || 5000;
    app.listen(PORT,()=>{console.log(`Running on port ${PORT}`);});
  },
};