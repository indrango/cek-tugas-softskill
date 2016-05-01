"use strict";
// set up packages
const express = require('express');
const app = express();
const config = require('./app/config/config');
const Data = require('./app/models/data');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');

// set up environtments
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());
// app.use(morgan('dev'));

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})

// connect database
mongoose.connect(config.database, (err) => {
  if (err)
    console.log('Connection failed');
})

require('./app/routes/routes')(app);

app.listen(config.port);
console.log('cek-tugas-softskill running at http://localhost:' + config.port);
