
<?php
//查询新闻页面条目
//从数据库输出时，要求数据库内容编码为utf-8 general-ci ,php页面编码为utf8,输出请求也需要设置utf8.
header("Content-Type: application/json; charset=UTF-8");
//连接数据库start
	 $con = mysql_connect("localhost","root","123");
	 if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	mysql_select_db("phplesson1", $con);
    mysql_query("set names utf8"); //**设置输出字符集编码为utf8***
     $newstype=$_REQUEST["newstype"];
	$sql_select=mysql_query("SELECT * FROM `lesson1` where newstype='$newstype'");
  $arr=array();
	while($row = mysql_fetch_array($sql_select))
  {
  array_push($arr,array("newsid"=>$row['newsid'],"newstitle"=>$row['newstitle'],"newstime"=>$row['newstime'],"newscontent"=>$row['newscontent'],"newstype"=>$row['newstype']));
  }  
  echo json_encode($arr);
  mysql_close($con);

};
  
?>
