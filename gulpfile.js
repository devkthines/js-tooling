const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

// Task to bundle React components
gulp.task('bundle', () => {
  return gulp.src('src/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(babel({
      presets: ['@babel/env', '@babel/react']
    }))
    .pipe(minify())
    .pipe(gulp.dest('public/js'));
});

// Task to optimize assets
gulp.task('optimize-assets', () => {
  return gulp.src('src/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets'));
});

// Default task
gulp.task('default', gulp.series('bundle', 'optimize-assets'));
