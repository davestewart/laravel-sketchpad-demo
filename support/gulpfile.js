// ------------------------------------------------------------------------------------------------
// libs

	// gulp
	var gulp 	= require('gulp'),

		// 3rd party
		elixir	= require('laravel-elixir'),
		server 	= require('gulp-server-livereload'),
		reload	= require('laravel-elixir-livereload');


// ------------------------------------------------------------------------------------------------
// tasks

	// variables
	var src = '../vendor/davestewart/doodle/';

	// live reload: https://www.npmjs.com/package/laravel-elixir-livereload
	/*
	elixir(function(mix) {
		mix.livereload([src + 'resources/views', src + 'public']);
	});
	*/

	// copy doodle resources to public
	elixir(function(mix) {
		mix.copy(src + 'public', '../public/vendor/doodle/');
	});


// ------------------------------------------------------------------------------------------------
// doodle watching

    function doodle()
    {
        gulp.src('app/Http/Controllers/Doodles/**/*.php')
            .pipe(server({
                livereload: true,
                directoryListing: true,
                open: true
            }));
    }

    gulp.task('doodle', doodle);