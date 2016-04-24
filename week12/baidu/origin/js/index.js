// index.js  百度首页单例模式开发
define(function(require , exports, module){
	var a = {};
	require('jquery');

	//左边主菜单栏控制
	a.setLeftNav = function(){
		$("#left_menu_ul li").mouseover(function(){
			$(this).addClass("bgColor");
		});
		$("#left_menu_ul li").mouseleave(function(){
			$(this).removeClass("bgColor");
		});
		$("#left_menu_ul li").click(function(){
			$("#left_menu_ul li").removeClass("select1");
			$(this).addClass("select1");
			$("div.Right-content").removeClass("disp-on");
		});
		$("#left_menu_ul li").each(function(index){
			$(this).click(function(){
				$("div.Right-content").eq(index).addClass("disp-on");
			});
		});
	}

	//右菜单栏控制
	a.setRightNav = function(){
		$(".tabnav").each(function(index){
			$(this).click(function(){
				$(".tabnav").removeClass("bgColor2");
				$(this).addClass("bgColor2");
				$(".content0-select").css("display","none");
				$(".content0-select").eq(index).css("display","block");
			});
		});
		$(".content4-top-ul li").each(function(index){
			$(this).click(function(){
				$(".content4-top-ul li").removeClass("bgColor2");
				$(this).addClass("bgColor2");
				$(".content4-bottom").hide();
				$(".content4-bottom").eq(index).show();
			});
		});
		$(".content3-top-ul li").each(function(index){
			$(this).click(function(){
				$(".content3-top-ul li").removeClass("bgColor2");
				$(this).addClass("bgColor2");
				$(".content3-bottom").hide();
				$(".content3-bottom").eq(index).show();
			});
		});
	}

	//设置更多产品部分的动作
	a.setMore = function(){
		$("#mor").mouseover(function(){
			$("#moremenu").show(100);
		});
		$("#moremenu").mouseleave(function(){
			$("#moremenu").hide(200);
		});
	}	
	
	a.setSwiper = function(){
		(new CenterImgPlay()).Start();
        function CenterImgPlay() {
            this.list = $(".imgbox").children(":first").children();
            this.indexs = [];
            this.length = this.list.length;
            //图片显示时间
            this.timer = 3000;
            this.showTitle = $(".title");

            var index = 0, self = this, pre = 0, handid, isPlay = false, isPagerClick = false;

            this.Start = function () {
                this.Init();
                //计时器，用于定时轮播图片
                handid = setInterval(self.Play, this.timer);
            };
            //初始化
            this.Init = function () {
                var o = $(".pager ul li"), _i;

                for (var i = o.length - 1, n = 0; i >= 0; i--, n++) {
                    this.indexs[n] = o.eq(i).click(self.PagerClick);
                }
            };
            this.Play = function () {
                isPlay = true;
                index++;
                if (index == self.length) {
                    index = 0;
                }
                //先淡出，在回调函数中执行下一张淡入
                self.list.eq(pre).fadeOut(300, "linear", function () {
                    var info = self.list.eq(index).fadeIn(500, "linear", function () {
                        isPlay = false;
                        if (isPagerClick) { handid = setInterval(self.Play, self.timer); isPagerClick = false; }
                    }).attr("title");
                    //显示标题
                    self.showTitle.text(info);
                    //图片序号背景更换
                    self.indexs[index].addClass("border_select");
                    self.indexs[pre].addClass("border_select");

                    pre = index;
                });
            };
            //图片序号点击
            this.PagerClick = function () {
                if (isPlay) { return; }
                isPagerClick = true;

                clearInterval(handid);

                var oPager = $(this), i = parseInt(oPager.text()) - 1;

                if (i != pre) {
                    index = i - 1;
                    self.Play();
                }
            }
        }
	}
	module.exports = a;
});