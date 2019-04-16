module.exports = function () {
	$.gulp.task('babelit', (done) => {
		return $.browserify({
			entries: 'src/js/init.js'
		})
			.transform( $.babelify, {presets: ['env']})
			.bundle()
			.pipe( $.source('init.js'))
			.pipe($.debug())
			.pipe($.gulp.dest('src/js/babled'));
	});
};
