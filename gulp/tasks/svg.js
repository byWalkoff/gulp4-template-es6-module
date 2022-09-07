import gulp from 'gulp';
const {task, src, dest} = gulp;
import gulpIf from 'gulp-if';
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import browserSync from "browser-sync";
export default function () {
	gulp.task('svg', () => {
		return src('./src/assets/img/svg/*.svg')
			.pipe(gulp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe(gulp.cheerio({
				run: function ($) {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe(gulp.replace('&gt;', '>'))
			.pipe(gulp.svgSprite({
				mode: {
					symbol: {
						sprite: "sprite.svg"
					}
				}
			}))
			.pipe(dest('./frontent/dist/assets/img/svg'))
	});
};