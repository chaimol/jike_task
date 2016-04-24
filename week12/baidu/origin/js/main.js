define(function(require, exports, module) {

	// 通过 require 引入依赖的模块
	var index = require.async("./index", function(index_callback) {

		index_callback.setLeftNav();
		index_callback.setRightNav();
		index_callback.setMore();
		index_callback.setSwiper();
	});


});