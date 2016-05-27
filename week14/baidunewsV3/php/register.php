<?php
	session_start();
	$_SESSION['views'] = 1;
	if(isset($_SESSION['views'])){
 	   $_SESSION['views'] = $_SESSION['views']+ 1;
	}else{
		$_SESSION['views'] = 1;
	}

	//注册数据控制
	header("Content-Type: text/html; charset=UTF-8");
	$username = $_POST["username"];
	$password = $_POST["password"];
	//过滤器部分（启用正则过滤器）
	if(!preg_match('/^[\x80-\xff-_a-zA-Z0-9]{3,15}$/',$username)){
		echo $status = "用户名不合法";
		die("username illegal");
	}
	if(!preg_match('/^[-_a-zA-Z0-9]{3,15}$/',$password)){
		echo $status = "密码不合法";
		die("password illegal");
	}
	$password = md5($password);//md5加密用户密码
	$conn = new mysqli("localhost", "root", "","phplesson1");
	// 检测连接
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	mysqli_set_charset($conn, "utf8");//设置输出字符为utf8
	$sql = "SELECT * FROM `userinfo` WHERE username='$username'";
	$sql_select = $conn->query($sql);
 	if ($sql_select->num_rows > 0) {
    $exist = true;//该用户存在
 	echo $status = 0;//用户存在，不能注册
	} else {
    $exist = false;//该用户不存在
 	$stmt = $conn->prepare("INSERT INTO `userinfo`(`username`,`userpassword`) VALUES(?, ?)");
  $stmt->bind_param("ss", $username, $password);//预处理
  $stmt->execute();
  $stmt->close();
  echo $status = 1;//添加用户成功
	}
	$conn->close();
?>
