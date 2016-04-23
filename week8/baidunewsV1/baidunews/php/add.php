<?php
//增加新闻页面
header("Content-Type: text/html; charset=UTF-8");
//连接数据库start
	 $con = mysql_connect("localhost","root","123");
	 if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	mysql_select_db("phplesson1", $con);
   $newsid=$_REQUEST["list_list"];
   $newstitle=$_REQUEST["list_title"];
	 $newstime=$_REQUEST["list_time"];
	 $newscontent=$_REQUEST["list_content"];
   $newstype=$_REQUEST["newstype"];

   $sql_select=mysql_query("SELECT * FROM `lesson1` WHERE newsid='$newsid'");
   if($row = mysql_fetch_array($sql_select)){
      echo "第".$newsid."项已经存在，无法添加。请使用更改选项";
   }else{
       $sql_insert="INSERT INTO `lesson1`(`newsid`,`newstitle`, `newstime`, `newscontent`,`newstype`) VALUES ('$newsid','$newstitle','$newstime','$newscontent','$newstype')";
    mysql_query("set names 'utf8'");
   mysql_query($sql_insert,$con);
   echo "成功添加";
   echo "第"."$newsid"."条新闻";
   }
	
  }
  mysql_close($con);
?>
