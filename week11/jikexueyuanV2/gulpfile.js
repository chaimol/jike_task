var gulp = require('gulp');
var uglify = require('gulp-uglify'); //压缩js	
var concat = require('gulp-concat'); //合并js,css
var less = require('gulp-less'); //转换less为css
var uglifycss = require('gulp-uglifycss'); //压缩css
require('jshint');
var g_jshint = require('gulp-jshint'); //检查js
var autoprefixer = require('gulp-autoprefixer'); //自动生成css代码的各浏览器适配文件
var minify_html = require('gulp-minify-html'); //压缩html
var rename = require('gulp-rename'); //重命名
var pngcrush = require('imagemin-pngcrush');
var imagemin = require('gulp-imagemin'); //压缩图片
var livereload = require('gulp-livereload'); //重新加载 
var notify = require('gulp-notify'); //提示信息
var rev = require('gulp-rev'); //添加md5戳
var revCollector = require('gulp-rev-collector'); //转换json对应md5表，到html中
var connect = require('gulp-connect'); //开启本地的gulp的server
gulp.task('html', function() {
    gulp.src('*.html')
        // .pipe(minify_html({
        //               empty:true,
        //               spare:true
        //           }))
        //.pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./build/'));
    //.pipe(notify({message:'html task ok'}));
});

gulp.task('css', function() {
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
    gulp.src(['css/neat.min.css', 'css/animate.css', 'css/swiper.3.2.0.min.css', 'css/index.css'])
        .pipe(concat('all.css'))
        .pipe(uglifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(rev())
        .pipe(gulp.dest('build/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/rev/css'))
        .pipe(notify({
            message: 'css task ok'
        }));
});

gulp.task('js', function() {
    gulp.src(['js/jquery.min.js', 'js/swiper.3.2.0.jquery.min.js', 'js/jike.js'])
        .pipe(concat('all.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./build/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/rev/js'))
        .pipe(notify({
            message: 'js task ok'
        }));
});

gulp.task('watch', function() {
    livereload.listen(); //要在这里调用listen()方法
    gulp.watch('src/*.less', ['css', 'rev']);
    gulp.watch('*.html', ['html', 'rev']);
    gulp.watch('js/*.js', ['js', 'rev']);
    gulp.watch('image/*', ['image', 'rev']);
});

gulp.task('image', function() {
    gulp.src('image/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        }))
        .pipe(rev())
        .pipe(gulp.dest('./build/image'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/rev/image'))
        .pipe(notify({
            message: 'image task ok'
        }));
});

gulp.task('rev', ['image', 'js', 'css', 'html'], function() {
    gulp.src(['build/rev/**/*.json', 'build/*.html'])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                'image': '/image',
                'css': '/css',
                'js': '/js'
            }
        }))
        .pipe(minify_html({
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest('./build'))
        .pipe(notify({
            message: 'rev task ok'
        }))
        .pipe(connect.reload());

});

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

gulp.task('default', ['rev', 'connect','watch'], function() {

});
