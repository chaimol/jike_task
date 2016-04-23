<?php
//更改新闻条目内容
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
  $sql_update="UPDATE `lesson1` SET `newsid`='$newsid',`newstitle`='$newstitle',`newstime`='$newstime',`newscontent`='$newscontent',`newstype`='$newstype' WHERE newsid='$newsid'";
  	mysql_query("set names 'utf8'");
    $sql_select=mysql_query("SELECT * FROM `lesson1` WHERE newsid='$newsid'");  //先帅选数据库是否有该项
   if($row = mysql_fetch_array($sql_select)){               
  	mysql_query($sql_update,$con);
     echo "更新后的内容为";
    echo "序号：$newsid";
    echo "标题：$newstitle";
    echo "时间：$newstime";
   echo "内容：$newscontent";
   echo "新闻类型编号：$newstype";
 }else{
  echo "第".$newsid."项不存在，无法更新。请先添加该项";
 }
  }
  mysql_close($con);
?>
