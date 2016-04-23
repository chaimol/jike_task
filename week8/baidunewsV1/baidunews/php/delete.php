<?php
//删除新闻页面
header("Content-Type: text/html; charset=UTF-8");
//连接数据库start
	 $con = mysql_connect("localhost","root","123");
	 if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	mysql_select_db("phplesson1", $con);
   $newsid=$_REQUEST['list_list'];
   $newstype=$_REQUEST["newstype"];

   $sql_select=mysql_query("SELECT * FROM `lesson1` WHERE newsid='$newsid'");  //先帅选数据库是否有该项
   if($row = mysql_fetch_array($sql_select)){                       
      $sql_delete="DELETE FROM `lesson1` WHERE newsid='$newsid'";             //该项存在，删除该项
    mysql_query("set names 'utf8'");
    mysql_query($sql_delete,$con);
    echo "成功删除条目"."$newsid";
   }else{
     echo "第".$newsid."项不存在。删除失败。";                                //该项不存在，抛出错误
   }

	 
  }
  mysql_close($con);
?>
