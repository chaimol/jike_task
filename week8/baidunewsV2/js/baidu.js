//新闻管理模块的js控制
$(document).ready(function(){
  
  function selchange(){
    //获取下拉liebaio
    var select=document.getElementById('title-list');
     return select.selectedIndex;   //下拉列表的选项值赋给newstype
    
  }
  
  function checkradio(){
    //获取单选按钮选项
    var Objs = document.getElementsByName("lesson");
     for(var i=0;i<Objs.length;i++){
                    if(Objs[i].checked){
                   return Objs[i].value;  //单选按钮选择项的值赋给chk
                        break;
                    }
  }
};
$("#reset").click(function(){
  $("#late2").empty();
})
$("#submit").click(function(e){
  e.preventDefault();
  chk = Number(checkradio());         //操作转化为数字类型
  if (isNaN(chk)){
    alert ("请选择要操作的类型");      //判断是否选择操作类型，如果否，弹出窗口,终止后续内容。
    return false;
  }
  newstype = Number(selchange());
  list_list = Number($("#inputList").val());

  function judgeInteger(){
    var y= /^[1-9]\d*$/;                              //判断输入的条目编号是否为正整数
    return y.test(list_list);
   
  }

  if(!judgeInteger()){
    alert("您输入的条目编号不是正整数或者未输入内容");      //判断输入的条目编号
    return false;
  }




   switch(chk)
  {
    case 1:

     $.ajax({
      url:'./php/add.php',
      data:{
        list_list:list_list,
        list_title:$("#inputTitle").val(),
        list_time:$("#inputTime").val(),
        list_content:$("#inputContent").val(),
        newstype:newstype,
      },
      type:'get',
       success:function(result){
        alert(result);
      },error:function(){
        alert("add error");
      }
    });

    break;
    case 2:
   
     $.ajax({
      url:'./php/delete.php',
      data:{
        list_list:list_list,
        list_title:$("#inputTitle").val(),
        list_time:$("#inputTime").val(),
        list_content:$("#inputContent").val(),
        newstype:newstype,
      },
      type:'get',
       success:function(result){
        alert(result);
      },error:function(){
        alert("delete error");
      }
    });

    break;
    case 3:

     $.ajax({
      url:'./php/update.php',
      data:{
        list_list:list_list,
        list_title:$("#inputTitle").val(),
        list_time:$("#inputTime").val(),
        list_content:$("#inputContent").val(),
        newstype:newstype,
      },
      type:'get',
       success:function(result){
        alert(result);
      },error:function(){
        alert("update error");
      }
    });

    break;
    case 4:

     $.ajax({
      url:'./php/select.php',
      data:{
        list_list:list_list,
        list_title:$("#inputTitle").val(),
        list_time:$("#inputTime").val(),
        list_content:$("#inputContent").val(),
        newstype:newstype,
      },
      type:'get',
      success:function(result){
        $("#late2").empty();
          $("#late2").append(result);
      },error:function(){
        alert("select error");
      }
    });
    break;
   
}
});
});
