require('babel-core/register')
var gulp = require('gulp');
var babel = require('gulp-babel');
var tape = require('gulp-tape');
var tapColorize = require('tap-colorize');

gulp.task('build', function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(tape({
      reporter: tapColorize()
    }));
});
