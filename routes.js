var express = require('express');
var router = express.Router();
var Entry = require('rouvenherzog').Entry;
var Media = require('rouvenherzog').Media;
var account;

router.get('/', function( request, response ) {
	response.render('index')
});

router
	.get('/blog', function( request, response, next ) {
		Entry
			.query(account, {
				published: true,
				populate: ['modified_by', 'created_by', 'media']
			})
			.then(function(result) {
				response.render('blog', {
					entries: result || []
				});
			}, function( error ) {
				next(error);
			});
	})
	.get('/blog/:id', function( request, response, next ) {
		Entry
			.query(account, {
				published: true,
				_id: request.params.id,
				populate: ['modified_by', 'created_by', 'media']
			})
			.then(function( result ) {
				if( !result ) {
					request.status = 404;
					return next( new Error('Entry not found') );
				}

				response.render('blog-detail', {
					entry: result
				});
			}, function( error ) {
				return next(error);
			});
	});

router.get('/gallery', function( request, response, next ) {
	Media
		.query(account, {
			populate: ['tags']
		})
		.then(function( result ) {
			var tag_media = {};
			var tags = {};

			for( var i in result ) {
				var media = result[i];
				if( media.tags.length ) {
					var length = media.tags.length;
					for( var j = 0; j < length; j++ ) {
						var tag = media.tags[j];
						var id = String(tag._id);
						if( !tags[id] ) {
							tags[id] = tag;
							tags[id].id = id;
							tag_media[id] = [];
						}

						tag_media[id].push(media);
					}
				} else {
					if( !tags[null] ) {
						tags[null] = {
							name: 'No Tag',
							id: null
						};
						tag_media[null] = [];
					}

					tag_media[null].push( media );
				}
			}

			response.render('gallery', {
				media: result || [],
				tags: tags,
				tag_media: tag_media
			});
		}, function( error ) {
			return next(error);
		});
});

module.exports = function(app, acc) {
	account = acc;
	app.use('/', router);
};