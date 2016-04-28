var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  judul: String,
  nama: String
});

module.exports = mongoose.model('Data', DataSchema);
