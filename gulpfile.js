var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');


//Html Task
gulp.task('html', function() {
    return gulp.src('project/index.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
})


//Css Task
gulp.task('css', function() {

    return gulp.src('project/css/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(prefix())
        // .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))

});



//Js Task
gulp.task('scripts', function() {

    return gulp.src('project/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))

})

//Watch Task

gulp.task('watch', function() {
    require('./server.js');
    gulp.watch('project/index.pug', ['html']);
    gulp.watch('project/css/main.scss', ['css'])
})