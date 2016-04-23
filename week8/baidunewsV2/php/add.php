<?php
//增加新闻页面


   require_once "config.php";            //连接config.php,连接到数据库
   if($row = mysql_fetch_array($sql_select)){
      echo "第".$newsid."项已经存在，无法添加。请使用更改选项";
   }else{
       $sql_insert="INSERT INTO `lesson1`(`newsid`,`newstitle`, `newstime`, `newscontent`,`newstype`) VALUES ('$newsid','$newstitle','$newstime','$newscontent','$newstype')";
    mysql_query("set names 'utf8'");
   mysql_query($sql_insert,$con);
   echo "成功添加";
   echo "第"."$newsid"."条新闻";
   }
	

  mysql_close($con);
?>
