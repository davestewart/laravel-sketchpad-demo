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
	// package public folder

		function updateVendor()
		{
			var source = assets.core;
			var target = project + 'public/vendor/sketchpad/';

			//gutil.log(serverInstance);

			return gulp
				.src(source)
				.pipe(gulp.dest(target));
		}

		function watchVendor()
		{
			var source = assets.core;

			gulp.watch(source, ['update-vendor']);
		}


	// ------------------------------------------------------------------------------------------------
	// package views

		function livereloadVendor()
		{
			var source = vendor + 'resources/views/**/*';

			gulp.src(source)
				.pipe(serverInstance);
		}


	// ------------------------------------------------------------------------------------------------
	// project controllers

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
// sketchpad watching

    gulp.task('update-vendor', updateVendor);
    gulp.task('watch-vendor', watchVendor);
    gulp.task('lr-vendor', livereloadVendor);
    gulp.task('lr-project', livereloadProject);

	gulp.task('default', function(){
		updateVendor();
		watchVendor();
		livereloadProject();
	});
