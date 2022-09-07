const gulp =  require('gulp');
const {series, parallel} = gulp;

const babelit = require("./gulp/tasks/babelit").babelit;
const clean = require("./gulp/tasks/clean").clean;
const assets = require("./gulp/tasks/assets").assets;
const html = require("./gulp/tasks/html").html;
const scripts = require("./gulp/tasks/scripts").scripts;
const styles = require("./gulp/tasks/styles").styles;
const watcher = require("./gulp/tasks/watch").watcher;
const webserver = require("./gulp/tasks/webserver").webserver;

exports.babelit = babelit;
exports.clean = clean;
exports.assets = assets;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.watcher = watcher;
exports.webserver = webserver;

// Default task
//******************************************

exports.default = series(babelit, clean, assets, scripts, styles, html);

// Development task
//******************************************
exports.dev = series(parallel(watcher, webserver));