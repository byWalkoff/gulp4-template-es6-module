const gulp =  require('gulp');
const {dest} = gulp;
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const debug = require("gulp-debug");

function babelit() {
	return browserify({
		entries: 'src/js/init.js'
	})
		.transform( babelify, {presets: ['env']})
		.bundle()
		.pipe( source('init.js'))
		.pipe(debug())
		.pipe(dest('src/js/babled'));
}

exports.babelit = babelit;