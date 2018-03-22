var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function() {
  return gulp
    .src("src/*.js")
    .pipe(
      babel({
        presets: [["es2015"]],
        plugins: ["add-module-exports"]
      })
    )
    .pipe(gulp.dest("fn"));
});
