var express = require('express');
var router = express.Router();
// this is my database
var db = require('monk')('localhost/mydb')
// create a collection or get if it exists
  , users = db.get('users');
//defines database fields that are required for this collection
users.index("email", {unique: true});

// admin home route
router.get('/', function(req, res) {
  res.render('admin-index', {title: "Admin Pages"});
});

//registration route
router.get('/register', function(req, res) {
  res.render('admin-register', {title: "Admin Registration Pages"});
});


router.post('/register', function(req,res) {
	// insert a new document (user) into collection
	users.insert({email: req.body.email}, function(err, doc){
		if (err) {
			throw err
		}
		else {
			users.find().on("success", function(doc){
				// found doc(s) is available on sucess
				res.send(doc);
				db.close();
			});
		}
	});
});

module.exports = router;