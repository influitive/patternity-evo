const gulp = require('gulp');
const postcss = require('gulp-postcss');
const config = require('./postcss.config.js');

gulp.task('default', function() {
  return gulp.src('src/**/*.css')
    .pipe(postcss(config))
    .pipe(gulp.dest('lib/'));
});
