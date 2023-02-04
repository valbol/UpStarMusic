const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiedSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
});

module.exports = AlbumSchema;
