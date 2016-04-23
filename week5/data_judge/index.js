//2015.10.22 my first javascript



function mask( ){
	var index;
	var x=document.getElementById("in").value;//将输入的内容赋给变量x ，
switch(true){
	case x>100 || x <0:
		intex = "";
		document.getElementById("in").value="";
		alert("您输入数字大于100或小于0，请重新输入。");
		break;
	case x>=90:
		intex =("1等生");
		break;
	case x>=80:
		intex =("2等生");
		console.log("错误",205);
		break;
	case x>=70:
		intex =("3等生");
		break;
	case x>=60:
		intex =("4等生");
		break;
	case x>=50:
		intex =("5等生");
		break;
	case x>=40:
		intex =("6等生");
		break;
	case x>=30:
		intex =("7等生");
		break;
	case x>=20:
		intex =("8等生");
		break;
	case x>=10:
		intex =("9等生");
		break;
	case x>=0:
		intex =("10等生");
		break;
	default:
		intex = "";
		document.getElementById("in").value="";
		alert("您的输入有误，请重新输入。");
	}
	document.getElementById("out").value = intex;
}
