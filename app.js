var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//include models
User = require('./models/users');
Sessions = require('./models/sessions');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/copcapstone');
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Use /api/ endpoints');
});

//Handles a GET request to /api/users endpoint.
app.get('/api/users', function(req, res){
	User.getUsers(function(err, users){
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

//Handles a GET request to /api/sessions endpoint.
app.get('/api/sessions', function(req, res){
	Sessions.getUsers(function(err, sessions){
		if(err) {
			throw err;
		}
		res.json(sessions);
	})
})

//Listen on port 3000
app.listen(3000);
console.log('running on port 3000');