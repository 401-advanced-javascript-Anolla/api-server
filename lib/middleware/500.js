'use strict';

module.exports=(err,req,res,next)=>{
  res.status(500);
  res.statusMessage='Server Error message';
  res.json({ Error: err });
};