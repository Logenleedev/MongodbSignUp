var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var path = require("path");
var app=express();
var controller = require("./Controls/controller");

let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('src'))
app.use(express.static('Semantic-UI-master'));

app.use('/',controller);


app.listen(port, () => console.log('Example app listening on port 3000!'))
