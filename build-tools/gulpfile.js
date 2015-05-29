var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var express = require('express');
var livereload = require('gulp-livereload');
var minimist = require('minimist');
var minifyCss = require('gulp-minify-css');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

var server;
var options = minimist(process.argv)
var environment = options.environment || 'development';
var isPorduction = environment === 'production' ? true : false;

function handlerError(err) {
    console.log(err.toString());
    this.emit('end');
}

function reload() {
    if (server) {
        return browserSync.reload({ stream: true })
    }
    return gutil.noop();
}

gulp.task('html', function () {
    return gulp.src('src/html/**/*.html')
                         .pipe(cachebust.references())
                         .pipe(gulp.dest('dist'))
                         .pipe(livereload());
})

gulp.task('images', function () {
    return gulp.src('src/images/**/*.png')
                         .pipe(cachebust.resources())
                         .pipe(gulp.dest('dist/images'))
                         .pipe(livereload());
})

gulp.task('styles', function () {
    return gulp.src('src/styles/**/*.scss')
                         .pipe(sourcemaps.init())
                         .pipe(sass()).on('error', handlerError)
                         .pipe(isPorduction ? minifyCss() : gutil.noop())
                         .pipe(sourcemaps.write())
                         .pipe(cachebust.resources())
                         .pipe(gulp.dest('dist/styles'))
                         .pipe(livereload());
});

gulp.task('scripts', function () {
    return browserify('./src/scripts/main.js', {
        debug: environment === 'development'
    })
        .bundle().on('error', handlerError)
        .pipe(source('bundle.js'))
      .pipe(cachebust.resources())
        .pipe(isPorduction ? buffer() : gutil.noop())
        .pipe(isPorduction ? uglify() : gutil.noop())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(livereload());
})


gulp.task('server', function () {
    server = express();
    server.use(express.static('dist'));
    server.listen(8002);
});

// gulp.task('build', ['html', 'images', 'styles', 'scripts']);
gulp.task('build', function (done) {
    runSequence('images', 'styles', 'scripts', 'html', done);
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/html/**/*.html', ['html']);
    gulp.watch('src/images/**/*.png', ['images']);
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['build', 'watch', 'server'])

gulp.task('clean', function () {
    gulp.src('dist', { read: false })
        .pipe(clean({force: true}))
});