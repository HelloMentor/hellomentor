var express = require('express');
var router = express.Router();
var DB = require('../db');

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

router.get('/countUsers', (req, res) => {
  var db = new DB;
  
  db.connect()
    .then(
      function() {
        // Successfully connected to the database
        // Make the database call and pass the returned promise to the next stage
        return db.countDocuments('users');
      },
      function(err) {
        // DB connection failed, add context to the error and throw it (it will be
        // converted to a rejected promise
        throw("Failed to connect to the db: " + err);
      })
    // The following `.then` clause uses the promise returned by the previous one.
    .then(
      function(count) {
        // Successfully counted the documents
        console.log(count + " users");
        db.close();
      },
      function(err) {
        // Could have got here by either `db.connect` or `db.countDocuments`
        // failing
        console.log("Failed to count the users: " + err);
        db.close();
      })
})

module.exports = router;
