const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('js:build', cb => {
  return gulp
    .src(['./public/js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('js:build:portal', ['js:build']);
