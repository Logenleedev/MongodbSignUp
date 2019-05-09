
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var path = require("path");
var app=express();
var route = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));

var User = require('../Model/model');





route.post("/feedback",(req,res,next)=>{
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.redirect('./finishsubmit.html');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

route.get("/",(req,res,next)=> {
    res.sendfile(path.join(__dirname+'/src'+'/index.html'));
})

module.exports = route;