var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var order = require("gulp-order");

var paths = {
    scripts: 'src/js'
};

var scripts = paths.scripts + '/*.js';
gulp.task('scripts', function() {
    return gulp.src(scripts)
        .pipe(order([
            "utils.js",
            "grid.js",
            "gridElement.js",
            "gridElementControl.js",
            "tank.js",
            "well.js",
            "elementFactory.js",
            "render.js",
            "game.js"
            //"*.js"
        ]))
        //.pipe(uglify())
        .pipe(concat('tanks.min.js'))
        .pipe(gulp.dest('dist'));
});


var mainjs = paths.scripts + '/main.js';
gulp.task('babel', function() {
    return gulp.src(mainjs)
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(scripts, ['scripts']);
});

gulp.task('default', ['scripts']);