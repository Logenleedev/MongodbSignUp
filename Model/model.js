var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var path = require("path");
var app=express();

app.use(bodyParser.urlencoded({ extended: false }));





mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/users");

var nameSchema = new mongoose.Schema({
    email: String,
    name: String
   });
module.exports= mongoose.model("User", nameSchema);

