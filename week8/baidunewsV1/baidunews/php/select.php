
<?php
//查询新闻页面条目
//从数据库输出时，要求数据库内容编码为utf-8 general-ci ,php页面编码为utf8,输出请求也需要设置utf8.
header("Content-Type: text/html; charset=UTF-8");
//连接数据库start
	 $con = mysql_connect("localhost","root","123");
	 if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	mysql_select_db("phplesson1", $con);
    $newsid=$_REQUEST["list_list"];
    $newstype=$_REQUEST["newstype"];
    mysql_query("set names utf8"); //**设置输出字符集编码为utf8***
	$sql_select=mysql_query("SELECT * FROM `lesson1` WHERE newsid='$newsid'");
	if($row = mysql_fetch_array($sql_select))
  {
  echo "<h2>您查询的编号为".$newsid."的内容如下</h2>";
  echo "<li>条目编号:".$row['newsid']."</li>";
  echo "<li>标题：".$row['newstitle']."</li>";
  echo "<li>时间：".$row['newstime']."</li>";
  echo "<li>内容：".$row['newscontent']."</li>";
  echo "<li>类型编号：".$row['newstype']."</li>";
  }else{
    echo "您查询的编号内容为空";
  }

	}
	mysql_close($con);
?>
