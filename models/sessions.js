var mongoose = require('mongoose');

//Sessions Schema
var sessionsSchema = mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	users: Array,
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Sessions = module.exports = mongoose.model('sessions', sessionsSchema);

// Get users
module.exports.getUsers = function(callback, limit){
	Sessions.find(callback).limit(limit);
}