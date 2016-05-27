<!-- 百度新闻后台管理登录界面  
2015-11-27  @chaimol
用户名为  admin 
密码是    123 -->
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>登录百度后台管理</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
.login-logo {
	text-align: center;
	margin-top: 20px;
}
.form-group {
	margin-top: 20px;
  text-align: center;
}
.glyphicon {
	margin-right: 15px;
}
</style>
</head>
<body>
<div class="container">
  <form class="form-horizontal" method="post" action="">
  <div class="form-group">
      <label class="col-sm-offset-2 control-label col-sm-8" style="text-align: center;">管理后台登录（账号admin密码123)</label>
  </div>
    <div class="form-group">
      <label for="admin" class="col-sm-2 col-sm-offset-2 control-label">用户名</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="admin" name="admin" placeholder="admin" autocomplete="off" required="required">
        </div>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="col-sm-2 col-sm-offset-2 control-label" required="required">Password</label>
      <div class="col-sm-6">
        <input type="password" class="form-control" id="inputPassword" name="inputPassword" placeholder="123">
      </div>
    </div>
    <div class="form-group ">
      <div class="col-sm-offset-4 col-sm-3">
        <button type="submit" class="btn btn-info btn-lg btn-block" value="submit" id="submit1">登录</button>
      </div>
      <div class="col-sm-offset-0 col-sm-3">
          <button type="submit " class="btn btn-info btn-lg btn-block" id="submit2">注册</button>
      </div>
    </div>
  </form>
    <div class="col-sm-offset-4 col-sm-3">
        <div id="lastline"></div>
    </div>
</div>

<script type="text/javascript" src="./js/usercontrol.js"></script>

</body>
</html>