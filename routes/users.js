var express = require('express');
var router = express.Router();
var DB = require('../database/db');

/**
 * GET users listing
 */
router.get('/', function(req, res, next) {
	var db = new DB;
	
	db.connect().then(
    function() {
      db.find('users')
				.then(
					function(users) {
						res.json(users);
					},
					function(error) {
						console.log(error);
						throw error;
					}
				);
    }
	);
});

/**
 * POST a user
 */
router.post('/', function(req, res, next) {
  var db = new DB;
    
	db.connect().then(
    function() {
      db.addDocument('users', req.body.user)
        .then(
          function() {
            db.close();
            res.json({
              success: true,
              data: {
                user: req.body.user
              }
            });
          },
          function(error) {
            db.close();
            res.json({
              success: false,
              error: error
            });
            throw error;
          }
        );
    }
  );
});

module.exports = router;
