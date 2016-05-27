<?php
/*@chaimol 
2015/12/4
公共接口用于 连接数据库 */
$lifeTime = 7 * 24 * 3600;//用户登录状态保存时间为7天
setcookie(session_name(), session_id(), time() + $lifeTime, "/"); 
session_start();
header("Content-Type: text/html; charset=UTF-8");
  
// 创建连接
$con = new mysqli("localhost", "root", "","phplesson1");
// 检测连接
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}   

//检测token，防范csrf攻击。
if (!isset($_REQUEST['token']) || $_REQUEST['token'] == $_SESSION['token']) {
    //echo 'request success';
} else {
    echo 'csrf forbidden';
    die("Connection failed:csrf forbidden " . $con->connect_error);
}

    $newsid=$_REQUEST["list_list"];
    $newstitle=addslashes(htmlspecialchars($_REQUEST["list_title"]));//addslashes把“ ‘ ''转义
    $newstime=addslashes(htmlspecialchars($_REQUEST["list_time"]));
    $newscontent=addslashes(htmlspecialchars($_REQUEST["list_content"]));//启用过滤函数，过滤掉html的实体符号，防止xss注入。
    $newstype=$_REQUEST["newstype"];
    mysqli_set_charset($con, "utf8");//设置输出字符为utf8
$sql = "SELECT * FROM `lesson1` WHERE newsid='$newsid'";
$sql_select = $con->query($sql);
 if ($sql_select->num_rows > 0) {
   // 输出每行数据
   //  while($row = $sql_select->fetch_assoc()) {
   //      echo "<br> id: ". $row["newsid"]."新闻标题是".$row["newstitle"];
   // }
    $exist = true;//该项目存在
} else {
    $exist = false;//该项目不存在
}
?>