const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');

const path = {
    html: {
        src: './src/*.html',
        dist: './dist'
    },
    css: {
        src: './src/sass/*.scss',
        dist: './dist/css'
    },
    js: {
        src: './src/js/*.js',
        dist: './dist/js'
    },
    images: {
        src: './src/img//**/*',
        dist: './dist/img'
    }
}
gulp.task('server', function() {
    browserSync({server: {baseDir: path.html.dist}});
    gulp.watch(path.html.src).on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch(path.html.src).on('change', gulp.parallel('html'));
    gulp.watch(path.js.src).on('change', gulp.parallel('js'));
    gulp.watch(path.css.src).on('change', gulp.parallel('styles'));
    gulp.watch(path.images.src).on('all', gulp.parallel('images'));
});

gulp.task('js', () => {
    return gulp.src(path.js.src)
        .pipe(concat('build.js'))
        .pipe(gulp.dest(path.js.dist));
});

gulp.task('styles', () => {
    return gulp.src(path.css.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.css.dist));
});

gulp.task('html', () => {
    return gulp.src(path.html.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(path.html.dist));
});

gulp.task('images',  () => {
    return gulp.src(path.images.src)
        .pipe(gulp.dest(path.images.dist))
});

gulp.task('default', gulp.parallel('watch', 'server', 'js', 'styles', 'html', 'images'));