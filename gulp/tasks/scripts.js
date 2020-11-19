module.exports = function () {
	$.gulp.task('scripts', (done) => {
		$.gulp.src(
			[
				/*here could be 'src/js/libs/jquery.js etc.'*/
				'src/js/babled/init.js'
			])
			.pipe($.gulpIf($.isDevelopment, $.sourcemaps.init()))
			.pipe($.plumber())
			.pipe($.concat('core.js'))
			.pipe($.debug())
			.pipe($.gulp.dest('frontend/dist/js'))
			.pipe($.uglify())
			.pipe($.gulpIf($.isDevelopment, $.sourcemaps.write()))
			.pipe($.gulp.dest('./frontend/dist/js'))
			.on('end', $.browserSync.reload);
		done();
	});
};
