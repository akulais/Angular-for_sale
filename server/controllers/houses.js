var mongoose = require('mongoose');
var House = mongoose.model('House');

	module.exports = (function() {
 		return {
  		index: function(req, res) {
    		House.find({}, function(err, results) {
       			if(err) {
         			console.log(err);
       			} else {
         			res.json(results);
       				}
   				})
  			},
 		}
		})();