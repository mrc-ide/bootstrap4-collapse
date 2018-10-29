'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./collapse.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    return gulp.src(['./node_modules/bootstrap/js/dist/util.js','./node_modules/bootstrap/js/dist/collapse.js'])
        .pipe(concat('collapse.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['sass', 'js'], function () {
});