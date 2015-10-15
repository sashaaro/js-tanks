var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var paths = {
    scripts: 'src/js'
};

var mainjs = paths.scripts + '/main.js';

gulp.task('scripts', function() {
    return gulp.src(mainjs)
        .pipe(babel())
        .pipe(gulp.dest('dist'));


    return gulp.src(paths.scripts + '/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);