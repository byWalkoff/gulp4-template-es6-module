module.exports = function () {
	$.gulp.task('cleanImg', (done) => {
		$.del('frontend/dist/assets/img/**/*.*');
		done();
	});
};