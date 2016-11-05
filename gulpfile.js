require('dotenv').load();

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    runseq = require('run-sequence'),
    webpack = require('webpack-stream'),
    WebpackDevServer = require("webpack-dev-server");

gulp.task('webpack', function () {
  var config = process.env.NODE_ENV === 'production' ? require('./webpack.config.js') : require('./webpack.config.dev.js');

  return gulp.src('src/client/index.js')
             .pipe(webpack(config))
             .pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['webpack']);
