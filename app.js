var express = require('express'),
    app = express(),
    logger = require('morgan');
// middleware
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    console.log('my custom middleware!');
    next();
});

app.listen(3000);
console.log("server running");

