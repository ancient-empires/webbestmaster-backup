/*jslint white: true, nomen: true */
// gulp - run 'default' task
// gulp <task> <othertask>.
(function () {

	var gulp = require('gulp'),
	//rename = require('gulp-rename'),
		uglify = require("gulp-uglify"),
	//clean = require('gulp-clean'),
	cssBase64 = require('gulp-css-base64'),
	//tinypng = require('gulp-tinypng'),
		concatCss = require('gulp-concat-css'),
		cssmin = require('gulp-cssmin'),
		rjs = require('gulp-requirejs'),
		isUglify = false;

	gulp.task('default', function () {
		isUglify = true;
		gulp.start('requirejs', 'copy-require', 'copy-html', 'css');
	});

	gulp.task('watch', function () {

		gulp.watch('js/**/*', function () {
			return gulp.start('requirejs');
		});

		gulp.watch('css/**/*', function () {
			return gulp.start('css');
		});

		gulp.watch('index.html', function () {
			return gulp.start('copy-html');
		});

	});

	gulp.task('css', function () {

		var stream = gulp.src('css/main.css')
			.pipe(concatCss('main.css'));

		if (isUglify) {
			stream = stream.pipe(cssmin()).pipe(cssBase64());
		}

		return stream.pipe(gulp.dest('dist/css'));

	});

	gulp.task('requirejs', function () {

		var stream = rjs({
			name: 'main',
			baseUrl: 'js',
			out: 'js/main.js',
			paths: {
				// libs
				'shim': 'lib/shim',
				'Firebase': 'lib/firebase',
				'sha1': 'lib/sha1',
				'fastclick': 'lib/fastclick',
				'jquery': 'lib/jquery-2.1.3',
				'underscore': 'lib/underscore',
				'backbone': 'lib/backbone',
				'doT': 'lib/dot',
				// util
				'templateMaster': 'util/template-master',
				// service
				'log': 'service/log',
				'info': 'service/info',
				'mediator': 'service/mediator',
				'router': 'service/router',
				'device': 'service/device',
				'db': 'service/db',
				// core
				'initCore': 'app/core/init-core',
				'BaseView': 'app/core/base-view',
				'PopupView': 'app/core/popup-view',

				// other
				'user': 'app/user'

			},

			shim: {
				Firebase: {
					'exports': 'Firebase'
				}
			}

		});

		if (isUglify) {
			stream = stream.pipe(uglify())
		}

		stream.pipe(gulp.dest('./dist/')); // pipe it to the output DIR

	});

	gulp.task('copy-require', function () {

		return gulp.src('js/lib/require.js')
			.pipe(uglify())
			.pipe(gulp.dest('./dist/js/lib/'));

	});

	gulp.task('copy-html', function () {

		return gulp.src('index.html')
			//.pipe(uglify())
			.pipe(gulp.dest('./dist/'));

	});

	/*
	 gulp.task('default', function () { // ae
	 gulp.run('uglify-js', 'clean');
	 });

	 gulp.task('requirejsBuild', function () {
	 return rjs({
	 name: 'main',
	 baseUrl: 'www/js/',
	 out: 'www/js/main.js',
	 //shim: {
	 //
	 //}
	 //
	 //baseUrl: 'js/',

	 paths: {
	 'jquery': 'lib/jquery-2.1.3',
	 'underscore': 'lib/underscore',
	 'bb': 'lib/backbone'
	 }


	 })
	 .pipe(gulp.dest('./dist/')); // pipe it to the output DIR
	 });


	 gulp.task('default+css', function () { // book
	 gulp.run('uglify-js', 'css-base64', 'clean');
	 });

	 gulp.task('uglify-js', function () {

	 return gulp.src('www/js/!*.js')
	 .pipe(uglify())
	 .pipe(rename('all.min.js'))
	 .pipe(gulp.dest('./www/js'));

	 });

	 gulp.task('css-base64', function () {

	 return gulp.src('www/css/main.css')
	 .pipe(cssBase64())
	 .pipe(gulp.dest('./www/css'));

	 });

	 gulp.task('clean', function () {

	 return gulp.src('www/js/all.js')
	 .pipe(clean({force: true}));

	 });

	 gulp.task('tiny-png', function () {
	 gulp.src('tinypng/!**!/!*.png')
	 .pipe(tinypng('uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an')) // web.best.master
	 //.pipe(tinypng('RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu')) // ae.fan.game 234 * 2 = 468
	 .pipe(gulp.dest('dist'));
	 });
	 */

}());