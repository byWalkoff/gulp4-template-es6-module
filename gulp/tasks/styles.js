module.exports = function () {
	$.gulp.task("styles", (done) => {
		$.gulp.src('src/scss/styles.scss')
			.pipe($.gulpIf($.isDevelopment, $.sourcemaps.init()))
			.pipe($.plumber())
			.pipe($.sass())
			.pipe(
				$.postcss([$.autoprefixer(), $.mqpacker({sort: true})]))
			.pipe($.gulpIf($.isDevelopment, $.sourcemaps.write()))
			.pipe($.gulp.dest('frontend/dist/css'))
			.pipe($.browserSync.reload({stream: true}));
		done();
	});
};
