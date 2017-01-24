var express = require('express'),
    app = express();

app.get('/users/:name', function(req, res) {
    res.send('hello, ' + req.params.name);
});

app.get('/items/:id([0-9]+)', function(req, res) {
    res.send('item no.' + req.params.id);
});

app.listen(3000);
console.log("server running");

