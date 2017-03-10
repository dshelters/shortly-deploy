// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');

var Links = new db.Collection();

var linkSchema = mongoose.Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: new Date()
});

var Link = mongoose.model('Link', linkSchema);



Links.model = Link;

module.exports = Links;