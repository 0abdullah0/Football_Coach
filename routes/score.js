var express = require('express');
var router = express.Router();
var myconnect = require('../database/db2')

router.get('/', function(req, res, next) {
 
    score = req.body.score;
    score.toString()
    homeScore=score.slice(0,2);
    AwayScore=score.slice(2,4);
    console.log("home = >" +homeScore);
    console.log("away = >" +AwayScore);
    res.send({ home :homeScore , away : AwayScore});
  });



module.exports = router;