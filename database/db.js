const express = require('express');
var router = express.Router();
const { Sequelize } = require('sequelize');

sequelize = new Sequelize("sql2328272","sql2328272","vW9%gA5%", {
    'host' : "sql2.freesqldatabase.com",
    'dialect' : "mysql",
    'port' : "3306",
    'logging' : false
  })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;



