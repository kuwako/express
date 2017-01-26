var express = require('express'),
    app = express(),
    logger = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index', {title: "TITLE"});
});

app.listen(3000);
console.log("server running");

