const gulp =  require('gulp');
const {src, dest} = gulp;
const gulpIf = require('gulp-if');
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const browserSync = require("browser-sync");

function styles(done) {
	src('src/scss/styles.scss')
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(plumber())
		.pipe(sass())
		.pipe(
			postcss([autoprefixer(), mqpacker({sort: true})]))
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(dest('frontend/dist/css'))
		.pipe(browserSync.reload({stream: true}));
	done();
}

exports.styles = styles;
