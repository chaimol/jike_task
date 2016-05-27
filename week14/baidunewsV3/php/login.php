
<?php
	//百度新闻PHP 后台管理登录页面控制
	//2015-11-27 @chaimol
	header("Content-Type: text/html; charset=UTF-8");
	$username = $_POST["username"];
	$password = md5($_POST["password"]);
	$conn = new mysqli("localhost", "root", "","phplesson1");
	// 检测连接
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	mysqli_set_charset($conn, "utf8");//设置输出字符为utf8
	$sql = "SELECT userpassword FROM `userinfo` WHERE username='$username'";
	$sql_select = $conn->query($sql);
 	if ($sql_select->num_rows > 0) {
   // 输出每行数据
   while($row = $sql_select->fetch_assoc()) {
       if($password == $row["userpassword"]){
       		 //"用户登录成功";
       		session_start();
       		$_SESSION["admin"] = true;
       		 echo $status = 1 ;
       		// header("Location:../sql.php");
       }else{
       		// "密码错误";
       		echo $status = 0;
       		//header("Location:../login.php");

       }
      	
   	}
    $exist = true;//该项目存在
	} else {
    $exist = false;//该项目不存在
    // "用户不存在，请先注册。3秒后自动跳回登录界面";
    echo $status = -1;
    //header("Location:../login.php");
	}
	$conn->close();
?>
