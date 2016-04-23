<?php
	//百度新闻PHP 后台管理登录页面控制
	//2015-11-27 @chaimol
	header("Content-Type: text/html; charset=UTF-8");
	$username = $_POST["admin"];
	$password = $_POST["inputPassword"];
	if($username=="admin"&&$password=="123"){
	header("Location:../sql.html"); 
	}else{
	echo "登录失败，3秒后自动跳回登录界面";
	header("Location:../login.html"); 
	 }
?>
