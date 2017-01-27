var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/new', function(req, res) {
    res.render('new');
});

app.post('/create', function(req, res) {
    res.send(req.body.name);
});

app.listen(3000);
console.log("server running");

