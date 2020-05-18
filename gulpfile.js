var gulp = require('gulp');

//Your First Task

gulp.task('moh', function() {
    // return gulp.src('project/index.html')
    // return gulp.src('project/*.html')
    // return gulp.src('project/*.*')
    return gulp.src(['project/index.html', 'project/main.css'])

    // .pipe(gulp.dest('/dist'))
    .pipe(gulp.dest('/dist/copy'))

})