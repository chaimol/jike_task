//wtaterfall 响应式布局 js文件
$(document).on("load",function(){
    var a = {};
     a.setBox = function(){
        var box = $(".box");
    var boxWidth = box.eq(0).width();
    var boxArr = [];
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight + 60;
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            //console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left

            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });

    };
    
    a.setBox();





    a.setBoxWidth = function() {
        //获取窗口宽度，根据宽度分配页面的瀑流列数，设置box的宽度
        var slideNum;
        var boxWidth = $(window).width();
        if (boxWidth < 768) {
            slideNum = 3;
        } else if (boxWidth < 1024) {
            slideNum = 4;
        } else {
            slideNum = 5;
        }
        boxwidth = Math.floor(boxWidth / slideNum) - 6;
        console.log(boxWidth, boxwidth);
        $(".box").css("width", boxwidth);
        return slideNum;
    };
    var num = a.setBoxWidth();
    console.log("每一行有的元素是" + num + "个");
    a.setBoxScale = function() {
        $(".box").each(function(index) {
            $(this).on("click", function() {
                $(".box").css({
                    transform: "scale(1)",
                    "z-index": "1"
                });
                $(".box").eq(index).css({
                    transform: "scale(2.5)",
                    "z-index": "100"
                });
            });
        });
    };

    a.setBoxScale();

    /*******************************************/

});
