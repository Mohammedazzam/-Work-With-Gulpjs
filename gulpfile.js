var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify");

//Html Task
gulp.task('html', function() {
    return gulp.src('project/index.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
        .pipe(notify("Html Tasks Is Done"))
        .pipe(livereload());

})


//Css Task
gulp.task('css', function() {

    return gulp.src('project/css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(prefix())
        // .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());


});



//Js Task
gulp.task('js', function() {

    return gulp.src('project/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());


})

//Watch Task

gulp.task('watch', function() {
    require('./server.js');
    livereload.listen();
    gulp.watch('project/index.pug', ['html']);
    gulp.watch('project/css/main.scss', ['css'])
})