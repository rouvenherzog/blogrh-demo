var express = require('express');
var rouvenherzog = require('rouvenherzog');

var app = express();
var account = '54f73d8ba26f922cec539c35';

var config = require('./config')(app);
var routes = require('./routes')(app, account);

rouvenherzog.register(app, {
	uploaddir: __dirname + '/static/uploads',
	uploadroot: '/static/uploads',
	piwik: {
		siteUrl: 'http://piwik.rouvenherzog.me',
		siteId: 3,
		authToken: '5a78aad39d2846a3d58845c5514a375d'
	},
	secrets: {
		cookie: 'asdfsafd#wqer§31Dcxv_',
		session: '<wqerjklsd>234</wqerjklsd>f_#1243^!qf'
	},
	account: account
});

app.listen(3000, '127.0.0.1', function() {});