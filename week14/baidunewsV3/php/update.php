<?php
//更改新闻条目内容
  
  require_once "config.php";            //连接config.php,连接到数据库
  
  $sql_update="UPDATE `lesson1` SET `newsid`='$newsid',`newstitle`='$newstitle',`newstime`='$newstime',`newscontent`='$newscontent',`newstype`='$newstype' WHERE newsid='$newsid'";
   if($exist){  
   mysqli_query($con,$sql_update);          
     echo "<li>更新后的内容为</li>";
    echo "<li>序号：$newsid</li>";
    echo "<li>标题：$newstitle</li>";
    echo "<li>时间：$newstime</li>";
   echo "<li>内容：$newscontent</li>";
   echo "<li>新闻类型编号：$newstype</li>";
 }else{
  echo "第".$newsid."项不存在，无法更新。请先添加该项";
 }
  mysqli_close($con);
?>
