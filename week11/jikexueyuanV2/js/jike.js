//2016.3.31 极客学院首页js文件
//author:chaimol

$(document).ready(function() {
    //左侧主菜单栏start
    $(".lesson-classfiy-nav ul").mouseover(function() {

        $(".lesson-classfiy-nav ul").css("height", "408px");
    });
    $(".lesson-classfiy-nav ul").mouseleave(function() {
        $(".lesson-classfiy-nav ul").css("height", "305px");
        $(".lesson-list-show").hide();
    });
    $(".left-nav li").each(function(index) {
        $(this).mouseover(function() {
            $(".lesson-list-show").hide();
            $(".lesson-list-show").eq(index).show();
        });
    });
    //左侧主菜单栏end
    //用户名部分start
   $(".user_name").mouseover(function(){
   		$(".user_list").show();
   });
    $(".user_list li").mouseover(function() {
        $(".user_list").show();
    });
    $(".user_list li").mouseleave(function() {
        $(".user_list").hide();
    });
    $(".user_list li").each(function(index) {
        $(".user_list li").eq(index).mouseover(function() {
            $(this).css("background-color", "#f3f3f3");
        });
        $(".user_list li").eq(index).mouseleave(function() {
            $(this).css("background-color", "#fff");
        });
    });

    //用户名部分end
    //第二部分菜单选项条start
    $(".hot-lesson ul li").each(function(index) {
        $(this).mouseover(function() {
            $(".hot-lesson ul li").removeClass("on");
            $(".hot-lesson ul li").eq(index).addClass("on");
            $(".one-classfiy-lesson").hide();
            $(".one-classfiy-lesson").eq(index).show();
        });
    });
    //每个图片框特效start
    $(".one-classfiy-lesson ul li").each(function(index) {
        $(this).mouseover(function() {
            $(".zhongji").eq(index).show();
            $(".learn-number").eq(index).show();
            $(".lesson-shoucang").eq(index).show();
            $(".lesson-infor p").eq(index).addClass("p-select");
            $(".lesson-infor").eq(index).addClass("lesson-infor-select");
            $(".lessonplay").eq(index).css("opacity", "1");
        });
        $(this).mouseleave(function() {
            $(".zhongji").eq(index).hide();
            $(".learn-number").eq(index).hide();
            $(".lesson-shoucang").eq(index).hide();
            $(".lesson-infor p").eq(index).removeClass("p-select");
            $(".lesson-infor").eq(index).removeClass("lesson-infor-select");
            $(".lessonplay").eq(index).css("opacity", "0");
        });
    });
    //每个图片框特效end
    //第二部分菜单选项条end

    //小问号图标后方框控制start
    $(".way").each(function(index) {
        $(".way").eq(index).mouseover(function() {
            $(".way-infor").eq(index).show();
        });

        $(".way").eq(index).mouseleave(function() {
            $(".way-infor").eq(index).hide();
        });
        //小问号图标后方框控制End
        //知识体系图翻转start
        $("ul.card-transform li").each(function(index) {
            $("ul.card-transform li").eq(index).mouseover(function() {
                $(".front").eq(index).css("transform", "rotateY(-180deg)");
                $(".back").eq(index).css("transform", "rotateY(0deg)");
            });
            $("ul.card-transform li").eq(index).mouseleave(function() {
                $(".back").eq(index).css("transform", "rotateY(-180deg)");
                $(".front").eq(index).css("transform", "rotateY(0deg)");
            });
        });
        //知识体系图翻转end
        //精品系列课程start
        $(".lesson-card").each(function(index) {
            $(".lesson-card").eq(index).mouseover(function() {
                $(this).css("border-color", "#35b559");
                $(".images").eq(index).hide();
                $(".lesson-card h2").eq(index).hide();
                $(".descripe").eq(index).show();
            });
            $(".lesson-card").eq(index).mouseleave(function() {
                $(this).css("border-color", "#e4e4e4");
                $(".images").eq(index).show();
                $(".lesson-card h2").eq(index).show();
                $(".descripe").eq(index).hide();
            });
        });
        // 精品系列课程end
        $(".strategy").mouseover(function() {
            $("#banner-right3").show();
            $("#banner-left3").show();
        });
        $(".strategy").mouseleave(function() {
            $("#banner-right3").hide();
            $("#banner-left3").hide();
        });
        $(".swiper-car-box").mouseover(function() {
            $("#banner-left2").show();
            $("#banner-right2").show();
        });
        $(".swiper-car-box").mouseleave(function() {
            $("#banner-left2").hide();
            $("#banner-right2").hide();
        });
        $(".media-info").mouseover(function() {
            $("#banner-right4").show();
            $("#banner-left4").show();
        });
        $(".media-info").mouseleave(function() {
            $("#banner-right4").hide();
            $("#banner-left4").hide();
        });
        //jQuery焦点图轮播start
        $(".bx-wrapper").mouseover(function() {
            $("a.options").show();
        });
        $("a.options").mouseover(function() {
            $("a.options").show();
        });
        $(".bx-wrapper").mouseleave(function() {
            $("a.options").hide();
        });
        var slid = $('ul.slide_box li'),
            controls = $('ul.bx-controls li');
        slid.addClass('none');
        slid.eq(0).removeClass('none');

        var slideindex = 0;

        function switchi() {
            if (slideindex == slid.length - 1) {
                slideindex = 0;
            } else {
                slideindex = slideindex + 1;
            }
            slid.addClass('none');
            slid.eq(slideindex).removeClass('none');
            controls.removeClass('actives');
            controls.eq(slideindex).addClass('actives');
        }

        var timer = setInterval(switchi, 3000);

        function options(indexs) {
            slid.addClass('none');
            slid.eq(indexs).removeClass('none');
            controls.removeClass('actives');
            controls.eq(indexs).addClass('actives');
        }

        $('a.options').click(function() {
            var drec = $(this).data('drec');
            if (drec == 'pre') {
                if (slideindex == 0) {
                    slideindex = slid.length - 1;
                } else {
                    slideindex = slideindex - 1;
                }
            } else {
                if (slideindex == slid.length - 1) {
                    slideindex = 0;
                } else {
                    slideindex = slideindex + 1;
                }
            }
            clearInterval(timer);
            options(slideindex);
            timer = setInterval(switchi, 3000);
        });

        $('ul.bx-controls li').click(function() {
            slideindex = $(this).index();
            clearInterval(timer);
            options(slideindex);
        }, function() {
            timer = setInterval(switchi, 3000);
        });

        //jQuery焦点图轮播end
    });
    //搜索框start
    $(".search-text").focusin(function() {
        $(".hot-words").hide();
        $(".search-btn").css("background-color", "#35b559");
    });
    $(".search-text").focusout(function() {
        $(".hot-words").show();
        $(".search-btn").css("background-color", "#fff");
    });
    //搜索框end

    $("a.qq-icon").mouseover(function() {
        $(".weixinpop").css("display", "block");
    });

    $("a.qq-icon").mouseleave(function() {
        $(".weixinpop").css("display", "none");
    });
    //slide 1 start
    var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 6,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

        })
        //slide 1 end
        //slide 2 start
    var mySwiper = new Swiper('.swiper-container', {
        wrapperClass: "my-wrapper2",
        slideClass: "red-slide",
        slideActiveClass: 'my-slide-active2',
        slideVisibleClass: 'my-slide-visible2',

        direction: 'horizontal',
        loop: true,
        slidesPerView: 7,
        nextButton: '#banner-right2',
        prevButton: '#banner-left2',
    });
    //slide 2 end
    //slie 3 start
    var mySwiper = new Swiper('.swiper-container', {
        wrapperClass: "my-wrapper3",
        slideClass: "blue-slide",
        slideActiveClass: 'my-slide-active3',
        slideVisibleClass: 'my-slide-visible3',
        slidesPerView: 'auto',
        loopedSlides: 1,
        direction: 'horizontal',
        loop: true,
        slidesPerView: 6,
        nextButton: '#banner-right4',
        prevButton: '#banner-left4',
    });
    //slide 3 end
    //图书翻转15度 start
    $(".fengmian").each(function(index) {
        $(".fengmian").eq(index).mouseover(function() {
            $(this).addClass("transformY");

        });
        $(".fengmian").eq(index).mouseleave(function() {
            $(this).removeClass("transformY");

        });
    });
    //图书翻转15度 end
    //回到顶部按钮start
    $(".top").on("click", function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() == 0) {
            $(".top").hide(100);
        } else {
            $(".top").show(100);
        }
    });
    //回到顶部按钮end

});
