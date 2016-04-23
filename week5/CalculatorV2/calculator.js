//2015.10.23 22:23 计算器 版本号2.0
//x存储第一个数字，y存储第二个数字，msk存储运算符,mtk存储y的字符串。
	var x = 0;
	var y = 0;
	var mtk;
	var	chartBox = document.getElementById("num3");
function clearAll( ){
	document.getElementById("num3").value= "" ;   //清除按钮
	x= 0 ;
	y= 0;
}

function clearOne( ){
	var chart = document.getElementById("num3").value;
	if (chart.length = 0) {
		document.getElementById("num3").value = 0;
	} else{
		mtk= y.toString();
		y = parseFloat(mtk.slice(0,mtk.length-1));
		document.getElementById("num3").value = chart.slice(0,chart.length-1);
	} 
}

function getValue(val){
	y = y.toString() + val;
	document.getElementById("num3").value += val; //数字键的输入
	console.log("num",y);
}

function getValue_2(val){
	x = parseFloat(y);
	document.getElementById("num3").value += val; //运算符的输入
	msk = val;                                    //msk存储运算符
	y = 0 ;
	console.log("msk",y);
}
function calc(){
	y = parseFloat(y);
	switch (msk) {
		case "+" || "加":
			resu=x+y;
			break;
		case "-" || "减":
			resu=x-y;
			break;
		case "*" || "乘":
			resu=x*y;
			break;
		case "/" || "除":
			if (y = 0 ) {
				alert("除数不能为0");
				resu="";
			} else {
				resu=x/y;
			}
			break;
		default:
			resu="";
			alert("您的输入有误，请重新输入");		
	}
	document.getElementById("num3").value = resu;
	y = resu.toString();
}