const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  judul: String,
  nama: String
});

module.exports = mongoose.model('Data', DataSchema);
