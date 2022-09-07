const del = require('del');

function clean(done) {
	del('frontend/dist/assets/img/**/*.*');
	done();
}

exports.clean = clean;