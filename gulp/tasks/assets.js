const gulp =  require('gulp');
const {dest, src} = gulp;
const browserSync = require("browser-sync");

function assets() {
	return src('src/assets/**/*.*')
		.pipe(dest('./frontend/dist/assets/'))
		.pipe(browserSync.reload({stream: true}));
}

exports.assets = assets;