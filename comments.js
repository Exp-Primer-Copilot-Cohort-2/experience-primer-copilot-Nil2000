// Create web server
// 1. Load HTTP module
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var comments = [];
// 2. Create the HTTP server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
// 3. Create a function which handles requests and send response
app.get('/comments', function (req, res) {
    res.json(comments);
});
app.post('/comments', function (req, res) {
    comments.push(req.body);
    res.json(req.body);
});
app.get('/comments/:id', function (req, res) {
    var id = req.params.id;
    var comment = comments.find(function (comment) { return comment.id == id; });
    res.json(comment);
});
app.put('/comments/:id', function (req, res) {
    var id = req.params.id;
    var comment = comments.find(function (comment) { return comment.id == id; });
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    res.json(comment);
});
app.delete('/comments/:id', function (req, res) {
    var id = req.params.id;
    var comment = comments.find(function (comment) { return comment.id == id; });
    comments = comments.filter(function (comment) { return comment.id != id; });
    res.json(comment);
});
//# sourceMappingURL=comments.js.map