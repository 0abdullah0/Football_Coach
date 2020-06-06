var express = require('express');
var router = express.Router();
var myconnect = require('../database/db2')


router.get('/topHome', function(req, res) {
    console.log('Time:', Date.now()  )
    myconnect.query('SELECT HomeTeam, COUNT(*) AS wins FROM `History` WHERE FTHG > FTAG GROUP BY HomeTeam  ORDER BY COUNT(*) DESC LIMIT 10;;',function(err,rows,filds){
      
       if(!err){

        
         if (rows.length > 0) {
          
           return res.send({  data:rows});
       } else {
           return res.send({ error: true, });
               }
       
      }
     
     })
    
   });
//show history of home team
   router.get('/show-history-home', function(req, res) {
    team = req.body.team;
   console.log(team);
    myconnect.query("SELECT SEASON, `Date`, LEFT(MatchDate,11) AS `Date`, HomeTeam, AwayTeam, CONCAT(FTHG, '-', FTAG) AS Result, CONCAT(HTHG, '-', HTAG) AS HalfTime FROM `History` WHERE HomeTeam = "+   "'" + team +  "'" + "ORDER BY `DATE` DESC;",function(err,rows,filds){
      
       if(!err){
        
         if (rows.length > 0) {
          
           return res.send({  res: rows});
       } else {
           return res.send({ error: true, dataL:"No history with this two teams" });
               }
       
      }
     
     })
    
   });
   //show history of away team

   router.get('/show-history-away', function(req, res) {
    team = req.body.team;

    myconnect.query("SELECT SEASON, `Date`, LEFT(MatchDate,11) AS `Date`, HomeTeam, AwayTeam, CONCAT(FTHG, '-', FTAG) AS Result, CONCAT(HTHG, '-', HTAG) AS HalfTime FROM `History` WHERE Awayteam =  "+   "'" + team +  "'" + "ORDER BY `DATE` DESC;",function(err,rows,filds){
      
       if(!err){
        
         if (rows.length > 0) {
          
           return res.send({  res: rows});
       } else {
           return res.send({ error: true, dataL:"No history with this two teams" });
               }
       
      }
     
     })
    
   });
   //select all team
   router.get('/show-history-away', function(req, res) {
   // myconnect.query(

   })

module.exports = router;