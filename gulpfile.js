'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();
var bower = require('bower');

gulp.task('default', function(){
  bs.init({
    server:{
      baseDir: "./app"
    }
  });

  bs.watch("**/*.html").on("change", bs.reload);
  bs.watch("**/*.js").on("change", bs.reload);

  bower.commands
  .install(undefined, {save:true}, {})
  .on('end', function (installed) {
      console.log(installed);
  });
});