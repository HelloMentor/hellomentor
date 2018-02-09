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
	// User.create({
	// 	u_name: 'lolcat',
	// 	role: ,
	// 	f_name: 'Ben',
	// 	l_name: 'Inada',
	// 	email: 'me@beninada.com',
	// 	dob: 
	// }, function(err, user) {
	//   if (err) return console.error(err);
  // 
	// 	console.log(user);
	// });
	
  // var db = new DB;
  // 
	// db.connect().then(
  //   function() {
  //     db.addDocument('users', req.body.user)
  //       .then(
  //         function() {
  //           db.close();
  //           res.json({
  //             success: true,
  //             data: {
  //               user: req.body.user
  //             }
  //           });
  //         },
  //         function(error) {
  //           db.close();
  //           res.json({
  //             success: false,
  //             error: error
  //           });
  //           throw error;
  //         }
  //       );
  //   }
  // );
});

module.exports = router;
