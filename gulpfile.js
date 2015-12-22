var gulp = require('gulp'),
babel = require('gulp-babel'),
tape = require('gulp-tape'),
tapColorize = require('tap-colorize')

gulp.task('build', function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('test', function() {
  require('babel-core/register')
  return gulp.src('test/*.js')
    .pipe(tape({
      reporter: tapColorize()
    }));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('src/*.js', ['build', 'test'])
});
