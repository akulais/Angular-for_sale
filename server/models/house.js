var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new mongoose.Schema({
    counter: Number
	});

mongoose.model('House', HouseSchema);
