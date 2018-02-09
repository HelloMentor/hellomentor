var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../database/models/user');
var db = require('../database/db');

/**
 * GET users listing
 */
router.get('/', function(req, res, next) {
	User.find({}, function(err, users) {
	  if (err) throw err;
		res.json(users);
	});
});

/**
 * POST a user
 */
router.post('/', function(req, res, next) {
  var requestUser = req.body.user;

	User.create({
		u_name: requestUser.u_name,
		role: requestUser.role,
		f_name: requestUser.f_name,
		l_name: requestUser.l_name,
		email: requestUser.email,
		dob: requestUser.dob
	}, function(err, user) {
	  if (err) return console.error(err);
    res.json(user)
	});
});

module.exports = router;
