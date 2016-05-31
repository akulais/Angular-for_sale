var houses = require('./../controllers/houses.js');


	module.exports = function(app) {
		app.get('/homes', function(req, res) {
			console.log('in main index');
  			houses.index(req, res);
			});

		};