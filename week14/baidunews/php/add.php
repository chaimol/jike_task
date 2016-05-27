<?php
//增加新闻页面


   require_once "config.php";            //连接config.php,连接到数据库
  if($exist){
      echo "第".$newsid."项已经存在，无法添加。请使用更改选项";
   }else{
  $stmt = $con->prepare("INSERT INTO `lesson1`(`newsid`,`newstitle`, `newstime`, `newscontent`,`newstype`) VALUES(?, ?, ?,?,?)");
  $stmt->bind_param("isssi", $newsid, $newstitle, $newstime,$newscontent,$newstype);//预处理
  $stmt->execute();
  $stmt->close();
  echo "成功添加";
  echo "第"."$newsid"."条新闻";
 }
  $con->close();
?>