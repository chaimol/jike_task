//新闻管理模块的js控制
$(document).ready(function() {

    function selchange() {
        //获取下拉liebaio
        var select = document.getElementById("title-list");
        return select.selectedIndex; //下拉列表的选项值赋给newstype

    }

    function checkradio() {
        //获取单选按钮选项
        var Objs = document.getElementsByName("lesson");
        for (var i = 0; i < Objs.length; i++) {
            if (Objs[i].checked) {
                return Objs[i].value; //单选按钮选择项的值赋给chk
                break;
            }
        }
    };
    $("#reset").click(function() {
        $("#late2").empty();
    })
    $("#submit").click(function(e) {
        e.preventDefault();
        chk = Number(checkradio()); //操作转化为数字类型
        if (isNaN(chk)) {
            alert("请选择要操作的类型"); //判断是否选择操作类型，如果否，弹出窗口,终止后续内容。
            return false;
        }
        newstype = Number(selchange());
        list_list = Number($("#inputList").val());

        function judgeInteger() {
            var y = /^[1-9]\d*$/; //判断输入的条目编号是否为正整数
            return y.test(list_list);

        }
        if(chk==1||chk==2||chk==3){                                 //当选择的按钮是前三项时，判断条目编号是否输入
            if (!judgeInteger()) {
            alert("您输入的条目编号不是正整数或者未输入内容"); //判断输入的条目编号
            return false;
        }
        }
        


        $.ajax({
            url: "/control/newsid",
            data: {
                newsid: list_list,
                newstitle: $("#inputTitle").val(),
                newstime: $("#inputTime").val(),
                newscontent: $("#inputContent").val(),
                newstype: newstype,
                lesson: chk,
            },
            dataType: 'json',
            type: "get",
            success: function(result) {
               if (chk==5||chk==4||chk==3||chk==2||chk==1){
                 var tbody = "";
                var trs = "";

                //遍历返回的数组，拼合html
                $.each(result, function(n, value) {

                    $type = Number(value.newstype);
                    if ($type == 0) {
                        $type = "推荐";
                    } else if ($type == 1) {
                        $type = "百家";
                    } else if ($type == 2) {
                        $type = "本地";
                    } else if ($type == 3) {
                        $type = "图片";
                    } else if ($type == 4) {
                        $type = "娱乐";
                    } else if ($type == 5) {
                        $type = "社会";
                    } else if ($type == 6) {
                        $type = "军事";
                    } else if ($type == 7) {
                        $type = "科技";
                    } else if ($type == 8) {
                        $type = "互联网";
                    } else if ($type == 9) {
                        $type = "女人";
                    } else if ($type == 10) {
                        $type = "搞笑";
                    } else if ($type == 11) {
                        $type = "生活";
                    } else if ($type == 12) {
                        $type = "国际";
                    } else if ($type == 13) {
                        $type = "国内";
                    } else if ($type == 14) {
                        $type = "体育";
                    } else if ($type == 15) {
                        $type = "汽车";
                    } else if ($type == 16) {
                        $type = "财经";
                    } else if ($type == 17) {
                        $type = "房产";
                    } else if ($type == 18) {
                        $type = "时尚";
                    } else if ($type == 19) {
                        $type = "教育";
                    } else if ($type == 20) {
                        $type = "游戏";
                    } else if ($type == 21) {
                        $type = "旅游";
                    } else if ($type == 22) {
                        $type = "人文";
                    } else if ($type == 23) {
                        $type = "创意";
                    } else if ($type == 24) {
                        $type = "互联网+";
                    } else {
                        $type = $type;
                    }
                    value.newstype = $type;

                    trs += "<tr>" + "<td>" + value.newsid + "</td><td>" + value.newstype + "</td><td> " + value.newstitle + "</td><td>" + value.newstime + "</td></tr>";
                    tbody = "<table><tr><td>新闻编号</td> <td>新闻类型</td> <td>新闻标题</td> <td>新闻时间</td> </tr>" + trs + "</table>";
                });
                $("#late2").empty(); //清除前一个页面内容        
                $("#late2").append(tbody); //添加该数组的拼合后内容到页面
              }else{
                console.log("ajax接受的数据选项有误"+result);
                $("#late2").empty();
                $("#late2").append(result);
              }
            },
            error: function() {
               $("#late2").empty();
            }
        });

    });
});
