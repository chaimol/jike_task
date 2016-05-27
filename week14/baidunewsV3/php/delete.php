<?php
//删除新闻页面
	 require_once "config.php";           //连接config.php,连接到数据库
   if($exist){                       
      mysqli_query($con,"DELETE FROM `lesson1` WHERE newsid='$newsid'");             //该项存在，删除该项
      mysqli_close($con);
    echo "<li>成功删除条目"."$newsid"."</li>";
   }else{
     echo "<li>第".$newsid."项不存在。删除失败。</li>";                                //该项不存在，抛出错误
   }

?>
