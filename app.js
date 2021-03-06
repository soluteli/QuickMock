/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes/index')
  , bodyParser = require('body-parser')
  , partials = require('express-partials')
  , path = require('path')
  , app = express();


// Configuration
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
// app.use(express.Router(routes)); //自动解析url

routes(app);

module.exports = app;
// console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
