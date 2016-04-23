<!-- 百度新闻主页面
2015/12/3
@chaimol
 -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<link rel = "Shortcut Icon" href="image/logo.ico">
	<meta charset="utf-8">
	<title>百度新闻</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/swiper.3.2.0.min.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/swiper.3.2.0.jquery.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>
<div id="header">
	<a href="./index.php"><div class="btn btn-logo"></div></a>
	<a href="./login.html" target="_blank"><div class="btn btn-userhome"></div></a>
	<a href="http://m.baidu.com/ssid=0/from=0/bd_page_type=1/uid=0/pu=sz%40224_220%2Cta%40middle___3_537/news?idx=20000&itj=22#subscribe">
	<div class="btn btn-subscribe"></div>
	</a>
	<a href="http://m.baidu.com/ssid=0/from=0/bd_page_type=1/uid=0/pu=sz%40224_220%2Cta%40middle___3_537/news?idx=20000&itj=22#searchbox">
	<div class="btn btn-search"></div>
	</a>
	
	<div class="logo">
		<img src="image/news-logo.png" height="40">
	</div>
</div>
<div id="content">
<hr style="color: #fff;">
	<ul class="nav">
		<li class="nav-title under_line">推荐</li>
		<li class="nav-title">百家</li>
		<li class="nav-title">本地</li>
		<li class="nav-title">图片</li>
		<li class="nav-title">娱乐</li>
		<li class="nav-title">社会</li>
		<li class="nav-title">军事</li>
		<li class="nav-title">科技</li>
		<li class="nav-title nav-width">互联网</li>
		<li class="nav-title">女人</li>
		<li class="nav-title nav-title-more">更多</li>
		<li class="nav-title down-nav">搞笑</li>
		
	</ul>
	<ul class="nav2">
		
		<li class="nav-title">生活</li>
		<li class="nav-title">国际</li>
		<li class="nav-title">国内</li>
		<li class="nav-title">体育</li>
		<li class="nav-title">汽车</li>
		<li class="nav-title">财经</li>
		<li class="nav-title">房产</li>
		<li class="nav-title">时尚</li>
		<li class="nav-title">教育</li>
		<li class="nav-title">游戏</li>
		<li class="nav-title">旅游</li>
		<li class="nav-title">人文</li>
		<li class="nav-title nav-width">创意</li>
		<li class="nav-title nav-width">互联网+</li>
	</ul>
	<div class="down-nav">
	<hr style="clear:both;color: #fff;">
	<span class="top-text"><a href="#">记者榜</a></span>
	<span class="top-text"><a href="#">媒体榜</a></span>
	<span class="top-text"><a href="#">删除及排序</a></span>
	<span class="upslide">收起</span>
	</div>
</div>

<div class="index-view" id="late">

	
<?php
header("Content-Type: text/html; charset=UTF-8");
//连接数据库start
	 $con = mysql_connect("localhost","root","123");
	 if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{

  }		



?>
</div>
</body>
</html>