// ------------------------------------------------------------------------------------------------
// libs

	// gulp
	var gulp 	= require('gulp'),
		server 	= require('gulp-server-livereload');


// ------------------------------------------------------------------------------------------------
// variables

	var lib = '../vendor/davestewart/doodle/';

	var serverInstance = server({
		livereload: true,
		directoryListing: false,
		open: false,
		port:8001
	});


// ------------------------------------------------------------------------------------------------
// functions

	// ------------------------------------------------------------------------------------------------
	// package public folder

		function updatePackage()
		{
			var source = lib + 'public/**/*';
			var target = '../public/vendor/doodle/';

			return gulp
				.src(source)
				.pipe(gulp.dest(target));
		}

		function watchPackage()
		{
			var source = lib + 'public/**/*';

			gulp.watch(source, ['update-package']);
		}


	// ------------------------------------------------------------------------------------------------
	// package views

		function livereloadPackage()
		{
			var source = lib + 'resources/views/**/*';

			gulp.src(source)
				.pipe(serverInstance);
		}


	// ------------------------------------------------------------------------------------------------
	// project controllers

		function livereloadProject()
		{
			var source =
			[
				lib + 'resources/views/**/*',
				'../app/Http/Controllers/Doodles/**/*.php'
			];

			gulp.src(source)
				.pipe(serverInstance);
		}


// ------------------------------------------------------------------------------------------------
// doodle watching

    gulp.task('update-package', updatePackage);
    gulp.task('watch-package', watchPackage);
    gulp.task('lr-package', livereloadPackage);
    gulp.task('lr-project', livereloadProject);

	gulp.task('default', function(){
		updatePackage();
		watchPackage();
		livereloadProject();
	});
