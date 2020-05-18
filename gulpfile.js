var gulp = require('gulp');
var concat = require('gulp-concat');

//Css Task
gulp.task('css', function() {

    return gulp.src('project/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist'))

});



//Js Task
gulp.task('scripts', function() {

    return gulp.src('project/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))

})