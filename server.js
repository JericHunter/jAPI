require('dotenv').config();

const express = require('express');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());
app.use(cookieParser());

require('./data/db');

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);


// TODO: Add each controller here, after all middleware is initialized.

const port = 8000;
require('./app/routes')(app, {});app.listen(port, () => {  console.log('We are live on ' + port);});

module.exports = app;
