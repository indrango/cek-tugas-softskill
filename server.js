// set up packages
var express = require('express');
var app = express();
var config = require('./app/config/config');
var Data = require('./app/models/data');

var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var path = require('path');

// set up environtments
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());
// app.use(morgan('dev'));

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})

mongoose.connect(config.database, function(err) {
  if (err)
    console.log('Connection failed');
})

require('./app/routes/routes')(app);

app.listen(config.port);
console.log('cek-tugas-softskill running at http://localhost:' + config.port);
