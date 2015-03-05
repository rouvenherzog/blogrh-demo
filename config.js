var express = require('express');

module.exports = function(app) {
	app.set('views', __dirname + '/templates');
	app.set('view engine', 'jade');

	app.use('/static', express.static( __dirname + '/static'));
}