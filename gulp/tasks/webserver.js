const browserSync = require("browser-sync");

function webserver() {
	let config = {
		server: {
			baseDir: "./frontend/"
		},
		tunnel: false,
		host: 'localhost',
		port: 9000,
		logPrefix: "bw"
	};
	browserSync.init(config);
}

exports.webserver = webserver;