README.md

@chaimol

2016.3.29

##插件安装
'bash

browserify gulp-browserify  模块化

！important  在使用watch时路径必须是绝对路径
 npm install --save-dev
    gulp
    gulp-less//将less转换为css
    gulp-autoprefixer//自动生成css代码的各浏览器适配文件
    gulp-uglifycss//压缩css
    gulp-uglify//压缩js
    gulp-concat//合并css，js
    gulp-minify-html//压缩html
    gulp-rename//重命名
    gulp-jshint//检查js代码
    jshint //gulp-jshint的依赖项
    gulp-imagemin//压缩图片
    gulp-livereload//重新加载 
	gulp-notify//提示信息
    gulp-rev//md5戳
    gulp-rev-collector //配合gulp-rev使用，将页面文件依赖转为md5处理后的地址
    gulp-connect//开启本地gulp的服务器，默认8080端口
##产品输出(输出目录为./build，测试时需要联网，因大部分图片链接自极客学院的服务器)
'bash
gulp

##产品功能
实现自动监控所有文件（less文件除外）的变化后，自动刷新。
实现html.css.image.js的全压缩，重命名，合并
注意：html的引入地址，在原始页面时，需更改下css和js的链入地址，产品中则不需要更改。
