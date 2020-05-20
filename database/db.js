const express = require('express');
var router = express.Router();
const { Sequelize } = require('sequelize');

sequelize = new Sequelize("id10721597_footballcoach","id10721597_coachabdo","|ExmOBL8X5uq65hi", {
    'host' : "localhost",
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



