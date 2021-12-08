'use strict';

//dependencies
var gulp = required('gulp');
var sass = required('gulp-sass');
var minifyCSS = required('gulp-clean-css');
var uglify = required('gulp-uglify');
var rename = required('gulp-rename');
var changed = required('gulp-changed');


/////////////////////////
// - SCSS/CSS
////////////////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss');
var SCSS_DEST = './src/Assets/.css';

// Compile SCSS

gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({ suffix:'.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));

});

//detect changes in scss
gulp.task('watch_scss',function(){
gulp.watch(SCSS_SRC, ['compile_scss']);

});

// Run tasks
gulp.task('default', ['watch_scss']);
