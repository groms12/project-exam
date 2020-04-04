const {src, dest, watch} = require('gulp');
// const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const rename =  require('gulp-rename');
// const cssmin =  require('gulp-cssmin');
const sass = require('gulp-sass');
const autoprefixer =  require('gulp-autoprefixer' );
const cleanCSS = require('gulp-cleancss');
const minify=  require('gulp-minify');
const  htmlmin  =  require ('gulp-htmlmin');

function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade:  false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

function buildCSS(done){
    src('css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe((dest('dist/css')));
    done();
}

function buildJS(done) {
    src(['js/**.js', '!js/**.min.js'])
        .pipe(minify({ext:{
            min:'.js'
        }
    }))
    .pipe(dest('dist/js/'));
    src('js/**.min.js').pipe(dest('dist/js/'));
    done();
}

function html(done){
    src('**.html').pipe(htmlmin({collapseWhitespace: true})).pipe(dest('dist/'));
    done();
}

function fonts(done){
    src('fonts/**/**').pipe(dest('dist/fonts/'));
    done();
}

function php(done) {
    src(['**.php']).pipe(dest('dist/'));
    src('phpMailer/**/**').pipe(dest('dist/phpMailer/'));
    done();
}

exports.serve = bs;
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.html = html;
exports.fonts = fonts;
exports.php = php;
