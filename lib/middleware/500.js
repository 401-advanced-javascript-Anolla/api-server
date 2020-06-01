'use strict';

module.exports=(req,res)=>{
  res.status(500);
  res.json({ Error: 'Server Error message' });
};