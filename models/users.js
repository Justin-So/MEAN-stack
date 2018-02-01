var mongoose = require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	role:{
		type: String,
		required: true
	},
	username:{
		type: String,
		required: true
	}, 
	password:{
		type: String,
		required: true
	}
	// create_date:{
	// 	type: Date,
	// 	default: Date.now
	// }
});

var User = module.exports = mongoose.model('users', userSchema);

// Get users
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}