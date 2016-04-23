<?php
//删除新闻页面
	 require_once "config.php";           //连接config.php,连接到数据库
   if($row = mysql_fetch_array($sql_select)){                       
      $sql_delete="DELETE FROM `lesson1` WHERE newsid='$newsid'";             //该项存在，删除该项
    mysql_query("set names 'utf8'");
    mysql_query($sql_delete,$con);
    echo "成功删除条目"."$newsid";
   }else{
     echo "第".$newsid."项不存在。删除失败。";                                //该项不存在，抛出错误
   }

	 
  mysql_close($con);
?>
