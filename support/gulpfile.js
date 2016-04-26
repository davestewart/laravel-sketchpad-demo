var elixir = require('laravel-elixir'),
    gulp = require('gulp');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});



//require('laravel-elixir-livereload');

//elixir(function(mix) {
//    mix.livereload('app/**/*.php');
//});var server = require('gulp-server-livereload');




var server = require('gulp-server-livereload');

gulp.task('doodle', function() {
    gulp.src('app/Http/Controllers/Doodles/**/*.php')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});