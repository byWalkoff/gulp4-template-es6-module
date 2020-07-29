module.exports = function () {
	$.gulp.task('html', (done) => {
		$.gulp.src('src/templates/**/*.html')
			.pipe($.nunjucks.compile())
			.pipe($.prettify({
				indent_size: 2,
				wrap_attributes: 'auto', // 'force'
				preserve_newlines: false,
				// unformatted: [],
				end_with_newline: true
			}))
			.pipe($.gulp.dest('./frontend/'))
			.on('end', $.browserSync.reload);
		done();
	});
};
