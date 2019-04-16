module.exports = function () {
	$.gulp.task('webserver', () => {
		$.browserSync.init(config);
	});
	
	let config = {
		server: {
			baseDir: "./frontend/"
		},
		tunnel: false,
		host: 'localhost',
		port: 9000,
		logPrefix: "bw"
	};
};