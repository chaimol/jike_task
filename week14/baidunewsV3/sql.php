<!-- 百度新闻后台管理界面
2015-11-26 @chaimol -->
<?php
header("Content-Type: text/html; charset=UTF-8");
// 防止全局变量造成安全隐患   
$admin = false;  
session_start();
//生产随机的md5token值
function gen_token(){
  $token = md5(uniqid(rand(),true));
  return $token;
}
//判断是设定token，未设定则新生成一个。
function gen_stoken(){
  $pToken = "";
  if($_SESSION[STOKEN_NAME] == $pToken){
    //没有值，赋新值
    $_SESSION[STOKEN_NAME] == gen_token();
  }
}

//输出token到html上
function gen_input(){
    gen_stoken();
    echo "<input type='hidden' name='token' value='$_SESSION[STOKEN_NAME]'>";
}



// 判断是否登陆   
if (isset($_SESSION["admin"]) && $_SESSION["admin"] === true)   
{   
echo "您已经成功登陆";   
}   
else   
{   
// 验证失败，将 $_SESSION["admin"] 置为 false  
$_SESSION["admin"] = false;   
die("您无权访问");   
}  

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>百度新闻后台管理</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/baidu.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
.login-logo {
	text-align: center;
	margin-top: 20px;
}
.form-group .btn{
	margin-top: 20px;
}
.control-lable{
  margin-bottom: 20px;
}
.glyphicon {
	margin-right: 15px;
}
</style>
</head>
<body>
<div class="container">
<a href="./php/logout.php" title="注销后，将自动跳转回登录界面">注销登录</a>
  <form class="form-horizontal" action="php/select.php" method="get" id="user_form">
    <div class="form-group">
      <div class="col-sm-6 col-sm-offset-4 login-logo  img-responsive"> <a href="index.php"><img src="image/logo.png" alt="logo"></a> </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-4 col-sm-6">
        <label class="col-sm-3"><input type="radio" name="lesson" value="1" required="required">增加条目</label>
        <label class="col-sm-3"><input type="radio" name="lesson" value="2" required="required">删除条目</label>
        <label class="col-sm-3"><input type="radio" name="lesson" value="3" required="required">更改条目</label>
        <label class="col-sm-3"><input type="radio" name="lesson" value="4" required="required">查询条目</label>
      </div>
    </div>
    <div class="form-group">
      <label for="inputEmail" class="col-sm-2 col-sm-offset-2 control-label">新闻类别</label>
      <div class="col-sm-6">
        <select name="title-select" id="title-list"  class="col-sm-12 dropdown">
          <option label="推荐" value="0">推荐</option>
          <option label="百家" value="1">百家</option>
          <option label="本地" value="2">本地</option>
          <option label="图片" value="3">图片</option>
          <option label="娱乐" value="4">娱乐</option>
          <option label="社会" value="5">社会</option>
          <option label="军事" value="6">军事</option>
          <option label="科技" value="7">科技</option>
          <option label="互联网" value="8">互联网</option>
          <option label="女人" value="9">女人</option>
          <option label="搞笑" value="11">搞笑</option>
          <option label="生活" value="12">生活</option>
          <option label="国际" value="13">国际</option>
          <option label="国内" value="14">国内</option>
          <option label="体育" value="15">体育</option>
          <option label="汽车" value="16">汽车</option>
          <option label="财经" value="17">财经</option>
          <option label="房产" value="18">房产</option>
          <option label="时尚" value="19">时尚</option>
          <option label="教育" value="20">教育</option>
          <option label="游戏" value="21">游戏</option>
          <option label="旅游" value="22">旅游</option>
          <option label="人文" value="23">人文</option>
          <option label="创意" value="24">创意</option>
          <option label="互联网+" value="25">互联网+</option>
          </select> 
  </div>
    </div>
    <div class="form-group" id="list2">
      <label for="list-list" class="col-sm-2 col-sm-offset-2 control-label">更改条目</label>
      <div class="col-sm-6">
        <input type="number" class="form-control" id="inputList" required="required" autocomplete="off" min="1" name="list-list">
      </div>
    </div>
    <div class="form-group">
      <label for="list-title" class="col-sm-2 col-sm-offset-2 control-label">新闻标题</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="inputTitle" placeholder="30字以内" autocomplete="off" maxlength="30" name="list-title">
      </div>
    </div>
     <div class="form-group">
      <label for="list-time" class="col-sm-2 col-sm-offset-2 control-label">新闻时间</label>
      <div class="col-sm-6">
        <input type="date" class="form-control" id="inputTime"  name="list-time" min="1949-10-1" max="2016-5-14">
      </div>
    </div>
     <div class="form-group">
      <label for="list-content" class="col-sm-2 col-sm-offset-2 control-label">新闻内容</label>
      <div class="col-sm-6">
        <textarea class="form-control" id="inputContent" name="list-content"></textarea> 
      </div>
    </div>

    <div class="form-group ">
      <div class="col-sm-offset-4 col-sm-2">
        <? gen_input(); ?>
        <button type="submit" class="btn btn-info btn-lg btn-block" id="submit" value="submit">提交</button>
      </div>
      <div class="col-sm-offset-1 col-sm-2">
        <button type="reset" class="btn btn-info btn-lg btn-block" id="reset" value="reset">重置</button>
      </div>
    </div>
  </form>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-8" id="late2">
      
    </div>
  </div>
</div>
</body>
</html>