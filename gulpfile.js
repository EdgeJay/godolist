require('dotenv').load();

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    runseq = require('run-sequence'),
    webpack = require('webpack-stream'),
    webpacker = require('webpack'),
    WebpackDevServer = require("webpack-dev-server");

gulp.task('webpack', function () {
  var config = process.env.GO_ENV === 'production' ? require('./webpack.config.js') : require('./webpack.config.dev.js');

  return gulp.src('src/client/index.js')
             .pipe(webpack(config))
             .pipe(gulp.dest('public/js/'));
});

gulp.task('webpack-dev-server', function () {
  var config = process.env.GO_ENV === 'production' ? require('./webpack.config.js') : require('./webpack.config.dev.js'),
      compiler = webpacker(config);

  new WebpackDevServer(compiler, null).listen(process.env.WEBPACK_DEV_SERVER_PORT, 'localhost', function(err) {

    if (err) {
      throw new gutil.PluginError('[webpack-dev-server]', err);
    }

    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:" + process.env.WEBPACK_DEV_SERVER_PORT + "/webpack-dev-server/js/main.js");

    // keep the server alive or continue?
    // callback();
  });
});

gulp.task('watch', function () {
  gulp.watch(['src/client/**/*.js'], ['webpack']);
});

gulp.task('dev', ['webpack-dev-server']);

gulp.task('default', ['webpack']);
