/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: __George Kurkjian____ Student ID: __137555207______ Date: __Jan_17-2022__
 *
 *  Online (Heroku) URL: ____https://pure-beyond-14431.herokuapp.com/____________
 *
 *  GitHub Repository URL: ___https://github.com/gkurkjian/WEB322-Assignments/tree/main_______
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
