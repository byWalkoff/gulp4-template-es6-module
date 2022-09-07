const gulp =  require('gulp');
const {src, dest} = gulp;
const concat = require('gulp-concat');
const gulpIf = require('gulp-if');
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const debug = require("gulp-debug");
const uglify = require('gulp-uglify');
const browserSync = require("browser-sync");

function scripts(done) {
	src(
		[
			/*here could be 'src/js/libs/jquery.js etc.'*/
			'src/js/babled/init.js'
		])
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(plumber())
		.pipe(concat('core.js'))
		.pipe(debug())
		.pipe(dest('frontend/dist/js'))
		.pipe(uglify())
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(dest('./frontend/dist/js'))
		.on('end', browserSync.reload);
	done();
}

exports.scripts = scripts;
