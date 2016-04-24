var gulp = require('gulp');
var less = require('gulp-less');		//转换less为css
var autoprefixer = require('gulp-autoprefixer');//后处理工具
var uglify = require('gulp-uglifycss');	//压缩css	
var minify = require('gulp-minify-html');//压缩html
var livereload = require('gulp-livereload');
gulp.task('less',function(){
	gulp.src('src/*.less')
    	.pipe(less())
    	.pipe(autoprefixer())
    	.pipe(uglify())
    	.pipe(gulp.dest('../build/'))
    	.pipe(livereload());
});

gulp.task('html',function(){
	gulp.src('./index.html')
		.pipe(minify())
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch',function(){
	 livereload.listen(); //要在这里调用listen()方法
	 gulp.watch('src/index.less',['less']);
});


gulp.task('default',['less','watch','html'], function() {
	console.log("success less");
	 gulp.watch('src/index.less',['less']);
});