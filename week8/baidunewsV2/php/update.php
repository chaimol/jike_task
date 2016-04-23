<?php
//更改新闻条目内容
  
  require_once "config.php";            //连接config.php,连接到数据库
  
  $sql_update="UPDATE `lesson1` SET `newsid`='$newsid',`newstitle`='$newstitle',`newstime`='$newstime',`newscontent`='$newscontent',`newstype`='$newstype' WHERE newsid='$newsid'";
  	mysql_query("set names 'utf8'");
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
  mysql_close($con);
?>
