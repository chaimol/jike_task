
<?php
//查询新闻页面条目
session_start();
header("Content-Type: text/html; charset=UTF-8");
//从数据库输出时，要求数据库内容编码为utf-8 general-ci ,php页面编码为utf8,输出请求也需要设置utf8.
//连接数据库start
// 创建连接
$con = new mysqli("localhost", "root", "","phplesson1");
// 检测连接
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
} 
    $newstype=$_REQUEST["newstype"];
    mysqli_set_charset($con, "utf8");//设置输出字符为utf8
	$SQL="SELECT * FROM `lesson1` where newstype='$newstype'";
  $sql_result = $con->query($SQL);
  $arr=array();
	while($row = $sql_result->fetch_assoc())
  {
  array_push($arr,array("newsid"=>$row['newsid'],"newstitle"=>$row['newstitle'],"newstime"=>$row['newstime'],"newscontent"=>$row['newscontent'],"newstype"=>$row['newstype']));
  }  
  echo json_encode($arr);
  $con->close();
?>
