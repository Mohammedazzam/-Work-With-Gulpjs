var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');


//Css Task
gulp.task('css', function() {

    return gulp.src('project/*.css')
        .pipe(prefix())
        // .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist'))

});



//Js Task
gulp.task('scripts', function() {

    return gulp.src('project/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))

})