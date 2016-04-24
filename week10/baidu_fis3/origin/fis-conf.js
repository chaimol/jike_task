//项目的配置文件

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js'),  // fis-optimizer-uglify-js 插件进行压缩，已内置
  useHash:true,
  release:'/static/$0'
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css'),   // fis-optimizer-clean-css 插件进行压缩，已内置
  useSprite:true,	//对css的png图片进行合并
  useHash:true,
  release:'/static/$0'
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor'),// fis-optimizer-png-compressor 插件进行压缩，已内置
  useHash:true,
  release:'/static/$0'
});



fis.media('debug').match('*.{js,css,png}', {
	//通过使用fis3 release debug -d ../output 命令，可以把文件渲染到output目录下，使用debug模式。即关闭下面的几项
  useHash: false,   //关闭md5,默认md5为七位
  useSprite: false,  //关闭雪碧图合并
  optimizer: null     //文件不压缩
})