/* 2015.10.24 
	数组元素的筛选，排序等
*/

var arr=["a","x","b","d","m","a","k","m","p","j","a"];
var arrObj= {};
	arrObj.name = 
	var freA ,freB,freX,freD,freM,freMax;freK,freP,freJ;
	var freCharacter;
	var arrNumA = new Array();
	var arrNumB = new Array();
	var arrNumD = new Array();
	var arrNumM = new Array();
	var arrNumK = new Array();
	var arrNumP = new Array();
	var arrNumX = new Array();
	var arrNumJ = new Array();
	var arrNumMax = new Array();
	for (var i = 0 ; i < arr.length; i++) {
		switch(arr[i]){
			case "a":
			freA++;
			arrNumA[freA-1]=i+1;
			break;
			case "b":
			freB++;
			arrNumB[freB-1]=i+1;
			break;
			case "d":
			freD++;
			arrNumD[freD-1]=i+1;
			break;
			case "k":
			freK++;
			arrNumK[freK-1]=i+1;
			break;
			case "m":
			freM++;
			arrNumM[freM-1]=i+1;
			break;
			case "p":
			freP++;
			arrNumP[freP-1]=i+1;
			break;
			case "x":
		    freX++;
		    arrNumX[freX-1]=i+1;
			case "j":
			freJ++;
			arrNumJ[freJ-1]=i+1;
			break;
		}
}
var freMax = freJ;
var arrNumMax = arrNumJ;
if (freMax < freA ) {
	freMax = freA;
	arrNumMax = arrNumA;
}
else if (freMax < freB) {
	freMax = freB;
	arrNumMax = arrNumB;
}
else if (freMax < freD) {
	freMax = freD;
	arrNumMax = arrNumD;
}
else if (freMax < freK) {
	freMax = freK;
	arrNumMax = arrNumK;
}
else if (freMax < freM) {
	freMax = freM;
	arrNumMax = arrNumM;
}
else if (freMax < freP) {
	freMax = freP;
	arrNumMax = arrNumP;
}
else {
	freMax = freX;
	arrNumMax = arrNumX;
}
switch (freMax) {
	case freJ:
	freCharacter = "j";
	break;
	case freB:
	freCharacter = "b";
	break;
	case freA:
	freCharacter = "a";
	break;
	case freM:
	freCharacter = "m";
	break;
	case freP:
	freCharacter = "p";
	break;
	case freX:
	freCharacter = "x";
	break;
	case freD:
	freCharacter = "d";
	break;
	case freK:
	freCharacter = "k";
	break;
}
alert("出现次数最多的字符是"+freCharacter+"出现的次数是"+freMax+"出现的位置是"+arrNumMax);











