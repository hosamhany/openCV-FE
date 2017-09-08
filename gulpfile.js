var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    root: ['app','.', '/node_modules'],
    port: 8888
  });
});
