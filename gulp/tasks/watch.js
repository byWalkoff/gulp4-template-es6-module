module.exports = function () {
	$.gulp.task('watch', () => {
		$.gulp.watch('src/scss/**/*.*', $.gulp.series('styles'));
		$.gulp.watch(['src/js/init.js', 'src/js/components/*.js'], $.gulp.series('babelit'));
		$.gulp.watch('src/js/babled/init.js', $.gulp.series('scripts'));
		$.gulp.watch('src/assets/**/*.*', $.gulp.series('assets'));
		$.gulp.watch('src/templates/**/*.*', $.gulp.series('html'));
	});
};