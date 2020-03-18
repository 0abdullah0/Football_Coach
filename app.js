var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) { // catch 404 and forward to error handler
  next(createError(404));
});
app.use(function(err, req, res, next) { // error handler
  res.json({ error: err })

});

//CALLING API

var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);
  });

module.exports = app;