<?php 
	session_start();
  session_destroy();//销毁整个session文件  
  echo "注销成功！将<a href='./login.php'>跳转</a>回登录界面。";
  //sleep(1);
  header("Location:../login.php");
?>