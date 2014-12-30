var connect = require('connect');

var host = "188.226.240.232";
var port = 3000;
var express = require("express");

var app = express();

app.use(express.static('/home/deploy/grumpy-yuriy/public'));

app.get('/', function(req, res) {

    res.render('/home/deploy/grumpy-yuriy/public/index.html');
});

app.listen(port, host);