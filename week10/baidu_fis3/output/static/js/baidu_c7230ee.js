$(document).ready(function(){function t(){this.list=$(".imgbox").children(":first").children(),this.indexs=[],this.length=this.list.length,this.timer=3e3,this.showTitle=$(".title");var t,e=0,n=this,o=0,s=!1,i=!1;this.Start=function(){this.Init(),t=setInterval(n.Play,this.timer)},this.Init=function(){for(var t=$(".pager ul li"),e=t.length-1,o=0;e>=0;e--,o++)this.indexs[o]=t.eq(e).click(n.PagerClick)},this.Play=function(){s=!0,e++,e==n.length&&(e=0),n.list.eq(o).fadeOut(300,"linear",function(){var l=n.list.eq(e).fadeIn(500,"linear",function(){s=!1,i&&(t=setInterval(n.Play,n.timer),i=!1)}).attr("title");n.showTitle.text(l),n.indexs[e].addClass("border_select"),n.indexs[o].addClass("border_select"),o=e})},this.PagerClick=function(){if(!s){i=!0,clearInterval(t);var l=$(this),c=parseInt(l.text())-1;c!=o&&(e=c-1,n.Play())}}}$("#left_menu_ul li").each(function(t){$(this).mouseover(function(){$("#left_menu_ul li").eq(t).addClass("bgColor")}),$(this).mouseleave(function(){$("#left_menu_ul li").eq(t).removeClass("bgColor")}),$("div.Right-content").eq(0).addClass("disp-on"),$(this).click(function(){$("#left_menu_ul li").removeClass("select1"),$("#left_menu_ul li").eq(t).addClass("select1"),$("div.Right-content").removeClass("disp-on"),$("div.Right-content").addClass("disp-off"),$("div.Right-content").eq(t).removeClass("disp-off"),$("div.Right-content").eq(t).addClass("disp-on")})}),$("#middle_right_manu a").each(function(t){$(this).click(function(){$("#middle_right_manu a.bgColor2").removeClass("bgColor2"),$("#middle_right_manu a").eq(t).addClass("bgColor2"),$(".content0-select").removeClass("disp-on"),$(".content0-select").addClass("disp-off"),$(".content0-select").eq(t).removeClass("disp-off"),$(".content0-select").eq(t).addClass("disp-on")})}),(new t).Start(),$(".content2-ul li").each(function(t){$(this).click(function(){$(".content2-ul li").removeClass("content2-text-bg"),$(".content2-ul li").eq(t).addClass("content2-text-bg")})}),$(".content3-top-ul li").each(function(t){$(this).mouseover(function(){$(".content3-top-ul li").removeClass("content3-select"),$(".content3-top-ul li").eq(t).addClass("content3-select")}),$(this).click(function(){$(".content3-top-ul li").removeClass("content3-select"),$(".content3-top-ul li").eq(t).addClass("content3-select"),$("div.content3-bottom").addClass("disp-off"),$("div.content3-bottom").removeClass("disp-on"),$("div.content3-bottom").eq(t).addClass("disp-on"),$("div.content3-bottom").eq(t).removeClass("disp-off")})}),$(".content4-top-ul li").each(function(t){$(this).mouseover(function(){$(".content4-top-ul li").removeClass("content4-select"),$(".content4-top-ul li").eq(t).addClass("content4-select")}),$("div.content4-bottom").addClass("disp-off"),$("div.content4-bottom").eq(0).addClass("disp-on"),$(this).click(function(){$(".content4--top-ul li").removeClass("content4-select"),$(".content4--top-ul li").eq(t).addClass("content4-select"),$("div.content4-bottom").addClass("disp-off"),$("div.content4-bottom").removeClass("disp-on"),$("div.content4-bottom").eq(t).addClass("disp-on"),$("div.content4-bottom").eq(t).removeClass("disp-off")})}),$("#moremenu").hide(),$("#mor").mouseenter(function(){$("#moremenu").show(100)}),$("#moremenu").mouseleave(function(){$("#moremenu").hide()})});