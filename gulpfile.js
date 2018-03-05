var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/main.sass')
    .pipe(sass())
    .on('error', function(err){
        console.error(err.message);
    })
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
    gulp.watch([ './src/sass/**/*.sass'], ['sass']);
});

gulp.task('build', ['sass']);