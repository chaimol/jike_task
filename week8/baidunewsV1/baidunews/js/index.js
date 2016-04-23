/*百度新闻js */
$(document).ready(function(){
//菜单项更多按钮start	
$(".nav-title-more").click(function(){
    $(".down-nav").show();
    $(".nav2").show();
    $(".nav-title-more").hide();
});
$(".upslide").click(function(){
    $(".down-nav").hide();
    $(".nav2").hide();
    $(".nav-title-more").show();
}); 
//菜单项更多按钮end
//页面第一次加载后，选定在推荐上start

    $.ajax({
      url:'./connect.php',
      data:{
        newstype:0,
      },
      type:'get',
      dataType:'json', 
       success:function(result){
        var tbody ="";
        var trs = ""; 
        //遍历返回的数组，拼合html
         $.each(result, function (n, value) {  
              trs += "<div class='index-list-item'>" +"<div class='index-list-title'> "+value.newstitle + "</div> <div class='index-list-content'>" + value.newscontent + "</div> <div class='index-list-bottom'> <b class='tip-time'>"+value.newstime+"</b></div> </div>";  
              tbody += trs;  
          });  
          $("#late").empty();    //清除前一个页面内容        
          $("#late").append(tbody);  //添加该数组的拼合后内容到页面
      },
      error:function(){
        alert("connect error");
      }
    });


//页面第一次加载后，选定在推荐上end

//菜单项选中时，选中项添加下划线start

$(".nav-title").each(function(index){
	$(this).click(function(){
		$(".nav-title").removeClass("under_line");
        
		$(".nav-title").eq(index).addClass("under_line");

        newstype=Number(index);
        if(newstype>9){
            newstype = newstype-1;   //页面中存在“更多”选项占用index，更多之后的页面的index值应-1，才是对应的数据库内容
        }
        
    $.ajax({
      url:'./connect.php',
      data:{
        newstype:newstype,
      },
      type:'get',
      dataType:'json', 
       success:function(result){
        var tbody ="";
        var trs = ""; 
        //遍历返回的数组，拼合html
         $.each(result, function (n, value) {  
              trs += "<div class='index-list-item'>" +"<div class='index-list-title'> "+value.newstitle + "</div> <div class='index-list-content'>" + value.newscontent + "</div> <div class='index-list-bottom'> <b class='tip-time'>"+value.newstime+"</b></div> </div>";  
              tbody += trs;  
          });  
          $("#late").empty();    //清除前一个页面内容        
          $("#late").append(tbody);  //添加该数组的拼合后内容到页面
      },
      error:function(){
        alert("connect error");
      }
    });


 
	});
});
//菜单项选中时，选中项添加下划线end
    
});