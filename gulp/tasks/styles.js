module.exports = function () {
	$.gulp.task("styles", (done) => {
		$.gulp.src('src/scss/styles.scss')
			.pipe($.gulpIf($.isDevelopment, $.sourcemaps.init()))
			.pipe($.plumber())
			.pipe($.sass())
			.pipe(
				$.postcss([$.autoprefixer({browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4', 'Safari >= 8', 'iOS >= 7']}), $.mqpacker({sort: true})]))
			.pipe($.gulpIf($.isDevelopment, $.sourcemaps.write()))
			.pipe($.gulp.dest('frontend/dist/css'))
			.pipe($.browserSync.reload({stream: true}));
		done();
	});
};