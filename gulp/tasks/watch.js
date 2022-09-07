const gulp =  require('gulp');
const {series, watch} = gulp;

const styles = require("./styles").styles;
const assets = require("./assets").assets;
const babelit = require("./babelit").babelit;
const html = require("./html").html;
const scripts = require("./scripts").scripts;


function watcher() {
	watch('src/scss/**/*.*', series(styles));
	watch(['src/js/init.js', 'src/js/components/*.js'], series(babelit));
	watch('src/js/babled/init.js', series(scripts));
	watch('src/assets/**/*.*', series(assets));
	watch('src/templates/**/*.*', series(html));
}

exports.watcher = watcher;
