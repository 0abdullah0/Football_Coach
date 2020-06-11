const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Sequelize  = require('sequelize');

var userTable=require("../../database/userTable");

app=express();
app.use(bodyParser);

router.get('/info',async function(req, res){
     console.log("info");
    var auth = req.headers['Authorization'];
    var tkn=auth.split(' ')[1];
    console.log(tkn);
    var users=new userTable();
    const usr= await users.getUsertkn(tkn);

    if(usr=="Not Authorsized"){
        res.json({"token":"Forbidden"});
   } 
   else{
       res.json(
           {
           "firstname":usr["firstname"],
           "lastname":usr["lastname"],
           "email":usr["email"],
           "photo":usr["photo"],
           "score":usr["score"],
           }
    );
   }
})

module.exports= router;
