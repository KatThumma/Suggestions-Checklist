// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');

var routes = require('./controllers/suggestions_controller.js');
app.use('/',routes);

var port = process.env.port || 3000;
app.listen(port);