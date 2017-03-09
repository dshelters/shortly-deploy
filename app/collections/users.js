// NOTE: this file is not needed when using MongoDB
var inTents = 'INTENSE!!!?123123!';
console.log('boom');

var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;