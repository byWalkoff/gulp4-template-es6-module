const gulp =  require('gulp');
const {dest, src} = gulp;
const nunjucks = require('gulp-nunjucks');
const prettify = require('gulp-prettify');
const browserSync = require("browser-sync");


function html(done) {
		src('src/templates/**/*.html')
			.pipe(nunjucks.compile())
			.pipe(prettify({
				indent_size: 2,
				wrap_attributes: 'auto', // 'force'
				preserve_newlines: false,
				// unformatted: [],
				end_with_newline: true
			}))
			.pipe(dest('./frontend/'))
			.on('end', browserSync.reload);
		done();
}

exports.html = html;