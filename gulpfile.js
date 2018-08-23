var gulp = require('gulp'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
gulp.src('src/stylesheets/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css'));
});
 

gulp.task('watch', function () {
  gulp.watch( 'src//**/*.scss',   ['sass']   );
});


gulp.task(`webserver`, function(done) {
  connect.server({
    livereload: true
  });
  done();
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch', 'webserver']);


