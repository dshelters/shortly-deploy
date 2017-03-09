// NOTE: this file is not needed when using MongoDB
var inTents = 'INTEE!!!?3123!';
console.log('boomsauce');

var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;