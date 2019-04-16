module.exports = function () {
	$.gulp.task('assets', () => {
		return $.gulp.src('src/assets/**/*.*')
			.pipe($.gulp.dest('./frontend/dist/assets/'))
			.pipe($.browserSync.reload({stream: true}));
	});
};