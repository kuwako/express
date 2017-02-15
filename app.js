var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// routing
app.get('/', post.index);
app.put('/posts/:id([0-9]+)', post.update);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.edit);
/*
app.delete('/posts/:id/', post.destroy);
*/
app.listen(3000);
console.log("server running");

