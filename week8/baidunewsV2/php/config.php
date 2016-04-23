<?php
/*@chaimol 
2015/12/4
公共接口用于 连接数据库 */
header("Content-Type: text/html; charset=UTF-8");
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

   
   $sql_select=mysql_query("SELECT * FROM `lesson1` WHERE newsid='$newsid'");    		//先筛选数据库是否有该项
}
?>