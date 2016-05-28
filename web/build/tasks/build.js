var paths = require('../paths');

var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var tsb = require("gulp-tsb");
var tsconfig = require("../../tsconfig.json");
var compiler = tsb.create(tsconfig.compilerOptions);
var run = require("run-sequence");

gulp.task("build", (callback) => {
    return run(
        "clean",
        ["build-system", "build-html"],
        callback
    );
});


gulp.task("build-system", () => {
    return gulp.src(tsconfig.filesGlob)
        .pipe(compiler())
        .pipe(gulp.dest(paths.output));
})

gulp.task("build-html", () => {
    return gulp.src(paths.html)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.output));
});