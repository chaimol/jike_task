
<?php
//查询新闻页面条目
//从数据库输出时，要求数据库内容编码为utf-8 general-ci ,php页面编码为utf8,输出请求也需要设置utf8.
    require_once "config.php";            //连接config.php,连接到数据库
	if($exist){
    while($row = $sql_select->fetch_assoc()){
        echo "<h2>您查询的编号为".$newsid."的内容如下</h2>";
        echo "<li>条目编号:".$row['newsid']."</li>";
        echo "<li>标题：".$row['newstitle']."</li>";
        echo "<li>时间：".$row['newstime']."</li>";
        echo "<li>内容：".$row['newscontent']."</li>";
        $type= $row['newstype'];
        $type = (int)$type;
        if ($type==0){
          $type="推荐";
        }elseif ($type==1) {
          $type="百家";
        }elseif ($type==2) {
          $type="本地";
        }elseif ($type==3) {
          $type="图片";
        }elseif ($type==4) {
          $type="娱乐";
        }elseif ($type==5) {
          $type="社会";
        }elseif ($type==6) {
          $type="军事";
        }elseif ($type==7) {
          $type="科技";
        }elseif ($type==8) {
          $type="互联网";
        }elseif ($type==9) {
          $type="女人";
        }elseif ($type==10) {
          $type="搞笑";
        }elseif ($type==11) {
          $type="生活";
        }elseif ($type==12) {
          $type="国际";
        }elseif ($type==13) {
          $type="国内";
        }elseif ($type==14) {
          $type="体育";
        }elseif ($type==15) {
          $type="汽车";
        }elseif ($type==16) {
          $type="财经";
        }elseif ($type==17) {
          $type="房产";
        }elseif ($type==18) {
          $type="时尚";
        }elseif ($type==19) {
          $type="教育";
        }elseif ($type==20) {
          $type="游戏";
        }elseif ($type==21) {
          $type="旅游";
        }elseif ($type==22) {
          $type="人文";
        }elseif ($type==23) {
          $type="创意";
        }elseif ($type==24) {
          $type="互联网+";
        }else {
          $type=$type;
        }
         
        echo "<li>类型：".$type."</li>";
    }
  
  }else{
    echo "您查询的编号项不存在";
  }

	 $con->close();
?>
