'use strict';

module.exports=(err,req,res)=>{
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ Error: err });
};