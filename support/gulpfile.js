// ------------------------------------------------------------------------------------------------
// libs

	// gulp
	var gulp 		= require('gulp'),
		log 		= require('gulp-util').log,
		livereload	= require('gulp-livereload'),
		elixir		= require('laravel-elixir'),
		path		= require('path'),
		elixirLr	= require('laravel-elixir-livereload');


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


// ------------------------------------------------------------------------------------------------
// functions

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

		return gulp
			.src(source)
			.pipe(gulp.dest(target));
	}


// ------------------------------------------------------------------------------------------------
// sketchpad

	var sketchpad =
	[
		vendor  + 'resources/views/**/*',
		vendor  + 'src/controllers/demo/**/*.php',
		project + 'public/vendor/sketchpad/**/*.+(css|js)',
		project + 'sketchpad/**/*.php',
		project + 'app/**/*.php'
	];

	/**
	 * Watch sketchpad files
	 */
	function livereloadAll()
	{
		/*
		var err = new Error();
		var dirs	= err.stack.match(/\(.+?:/g);
		console.log(dirs);
		for(var name in err.stack)
		{
			//console.log(name, err.stack[name]);
		}
		*/

		var root = path.normalize(__dirname + '/..');
		livereload({start: true});
		gulp.watch(sketchpad).on('change', function(event){
			event.file = event.path.replace(root, '');
			livereload.changed(event.file)
		});
	}

	function elixirLivereload()
	{
		elixir(function(mix) {
			mix.livereload(sketchpad);
		});
	}


// ------------------------------------------------------------------------------------------------
// tasks

	// sub tasks
	gulp.task('watch-assets', watchAssets);

	// main watch task
	gulp.task('default', function(){
		updateAssets();
		watchAssets();
		livereloadAll();
	});
