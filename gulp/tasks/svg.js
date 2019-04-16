module.exports = function () {
	$.gulp.task('svg', () => {
		return $.gulp.src('./src/assets/img/svg/*.svg')
			.pipe($.gulp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gulp.cheerio({
				run: function ($) {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe($.gulp.replace('&gt;', '>'))
			.pipe($.gulp.svgSprite({
				mode: {
					symbol: {
						sprite: "sprite.svg"
					}
				}
			}))
			.pipe($.gulp.dest('./frontent/dist/assets/img/svg'))
	});
};