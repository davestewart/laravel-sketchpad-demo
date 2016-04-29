// ------------------------------------------------------------------------------------------------
// libs

	// gulp
	var gulp 	= require('gulp'),
		gutil 	= require('gulp-util'),
		server 	= require('gulp-server-livereload');


// ------------------------------------------------------------------------------------------------
// variables

	var vendor	= '../vendor/davestewart/sketchpad/';
	var project = '../';
	var assets  =
	{
		all	  : vendor  + 'publish/assets/**/*',
		core  : vendor  + 'publish/assets/*',
		css	  : vendor  + 'publish/assets/*.css',
		js	  : vendor  + 'publish/assets/*.js'
	};

	var serverInstance = server({
		livereload: {
			enable: true,
			filter: function (filename, cb) {
				var state = ! /\.(sa|le)ss$|node_modules/.test(filename);
				cb(state);
			}
		},
		directoryListing: false,
		open: false,
		port:8001
	});


// ------------------------------------------------------------------------------------------------
// functions

	// ------------------------------------------------------------------------------------------------
	// watches

		/**
		 * Watches vendor assets
		 */
		function watchAssets()
		{
			gulp.watch(assets.js, function(){ updateAssets(assets.js) });
			gulp.watch(assets.css, function(){ updateAssets(assets.css) });
		}

		/**
		 * Copies vendor assets to project
		 *
		 * @param source
		 * @returns {*}
		 */
		function updateAssets(source)
		{
			source = source || assets.core;
			var target = project + 'public/vendor/sketchpad/';

			//gutil.log(serverInstance);

			return gulp
				.src(source)
				.pipe(gulp.dest(target));
		}


	// ------------------------------------------------------------------------------------------------
	// live reload

		/**
		 * Triggers a live reload when the vendor view files change
		 */
		function livereloadViews()
		{
			var source = vendor + 'resources/views/**/*';

			gulp.src(source)
				.pipe(serverInstance);
		}

		/**
		 * Triggers a live reload when changes are detected in:
		 *
		 *  - vendor views (when edited)
		 *  - project assets (after being copied)
		 *  - project controllers (when edited)
		 */
		function livereloadProject()
		{
			var source =
			[
				vendor  + 'resources/views/**/*',
				project + 'public/vendor/sketchpad/**/*.+(css|js)',
				project + 'app/Http/Controllers/Sketchpad/**/*.php'
			];

			gulp.src(source)
				.pipe(serverInstance);
		}


// ------------------------------------------------------------------------------------------------
// tasks

	// sub tasks
    gulp.task('watch-assets', watchAssets);
    gulp.task('lr-views', livereloadViews);
    gulp.task('lr-project', livereloadProject);

	// main watch task
	gulp.task('default', function(){
		updateAssets();
		watchAssets();
		livereloadProject();
	});
