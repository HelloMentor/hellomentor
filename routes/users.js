var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../database/models/user');
var db = require('../database/db');
var passport = require('passport');
var auth = require('./auth');

/**
 * GET logged in user
 */
router.get('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user) {
    if (!user) { return res.sendStatus(401); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

/**
 * POST a user
 */
router.post('/', function(req, res, next) {
  var requestUser = req.body.user;
	var user = new User();

	user.role = requestUser.role;
	user.f_name = requestUser.f_name;
	user.l_name = requestUser.l_name;
	user.email = requestUser.email;
	user.setPassword(requestUser.password);

	user.save().then(function() {
    return res.json({ user: user.toAuthJSON() });
	}).catch(next);
});

/**
 * PUT a user
 */
router.put('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user) {
    if (!user) { return res.sendStatus(401); }

    // only update fields that were actually passed...
    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }
    if (typeof req.body.user.f_name !== 'undefined') {
      user.f_name = req.body.user.f_name;
    }
    if (typeof req.body.user.l_name !== 'undefined') {
      user.l_name = req.body.user.l_name;
    }
    if (typeof req.body.user.role !== 'undefined') {
      user.role = req.body.user.role;
    }
    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }

    return user.save().then(function(){
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
});

/**
 * POST login a user
 */
router.post('/login', function(req, res, next) {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: 'cannot be blank' } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({errors: { password: 'cannot be blank' } });
  }

  passport.authenticate('local', { session: false }, function(err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

module.exports = router;
