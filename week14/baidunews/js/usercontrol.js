//后台用户信息控制
$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
    });
    var username,password;
    $("#admin").change( function() {
       username = $("#admin").val();
    });
   $("#inputPassword").change(function(){
       password = $("#inputPassword").val();
   });
    

    //判断用户输入是否合法，合法为true，不合法为fals.
    function judgeInfo() {
        var y = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/; //正则表达式 A-Z a-z - _  中文字符
        var x = /^[A-Za-z0-9_-]+$/; //正则表达式 a-z A-Z 0-9 — _ 
        var nameJudge = y.test(username);
        var passwordJudge = x.test(password);
        console.log("用户名合法否"+nameJudge);
        console.log("密码合法否"+passwordJudge);
        if (nameJudge && passwordJudge) {
            return true;
        } else {
            return false;
        }
    }

    function stopNext() {
        if (!judgeInfo()) {
            $("#lastline").empty();
            $("#lastline").append('<p><ul>您输入的用户名或密码不合要求，请按要求输入。<li>用户名要求是<code>A-Z a-z _ - 中文字符</code></li><li>密码要求是<code>A-Z a-z 0-9 _ -</code></li><li>用户名和密码的长度都必须是3-15位之间。</li></p>');
            return false;
        }else{
          return true;
        }
    }

    $("#submit1").click(function(e) {
        e.preventDefault();
        if (!stopNext()) {
            return; //如果用户输入不合法，直接阻止发送ajax请求。
        }
        $.ajax({
            url: "php/login.php",
            data: {
                username: username,
                password: password
            },
            cache: false,
            dataType: "text",
            type: "post",
            success: function(data) {
                if (data == 1) {
                    $("#lastline").empty();
                    $("#lastline").append("<b>登录成功，3秒后自动跳转</b><p>若没有自动跳转，请点击<a href='./sql.php'>跳转</a></p>");
                    setTimeout('window.location.href="./sql.php"', 3000);
                } else if (data == 0) {
                    $("#lastline").empty();
                    $("#lastline").append("<b>用户密码错误</b>");
                } else if (data == -1) {
                    $("#lastline").empty();
                    $("#lastline").append("<b>用户不存在</b>");
                } else {
                    $("#lastline").empty();
                    $("#lastline").append("<b>"+data+"</b>");
                }
            },
            error: function(error) {
                console.log("数据发送错误,前台出错");
            }
        });
    });

    $("#submit2").click(function(e) {
        e.preventDefault();
        if (!stopNext()) {
            return; //如果用户输入不合法，直接阻止发送ajax请求。
        }
        $.ajax({
            url: "php/register.php",
            data: {
                username: username,
                password: password
            },
            cache: false,
            dataType: "text",
            type: "post",
            success: function(data) {
                if (data == 1) {
                    $("#lastline").empty();
                    $("#lastline").append("<b>注册成功，请登录。</b>");
                } else if (data == 0) {
                    $("#lastline").empty();
                    $("#lastline").append("<b>用户存在，请更改用户名或直接登录。</b>");
                } else {
                    $("#lastline").empty();
                    $("#lastline").append("<b>"+data+"</b>");
                }
            },
            error: function(error) {
                console.log("数据发送错误,前台出错");
            }
        });
    });



});
