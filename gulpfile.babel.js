import path from 'path';

import browserSync from 'browser-sync';
import connectFallback from 'connect-history-api-fallback';
import gulp from 'gulp';


gulp.task('watch', () => {
  browserSync.init({
    index: 'src/index.html',
    middleware: [connectFallback()],
    notify: false,
    open: false,
    port: 5050,
    server: './src',
  });
});


gulp.task('default', ['watch']);
