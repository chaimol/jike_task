/*hao123页面js内容   
	2015.10.26  */

function load() {
    divD.style.background = localStorage.background;
}
var bgColor1 = document.getElementById("bg_color1");
var divD = document.getElementById("mainBgcolor");

bgColor1.onclick = function(e) {
    localStorage.background = "rgb(25,200,255)";
    divD.style.background = localStorage.background;
}



var bgColor2 = document.getElementById("bg_color2");
bgColor2.onclick = function(e) {
    localStorage.background = "rgb(255,20,255)";
    divD.style.background = localStorage.background;
}

var bgColor3 = document.getElementById("bg_color3");
bgColor3.onclick = function(e) {
    localStorage.background = "#EC38AB";
    divD.style.background = localStorage.background;
}

var bgColor4 = document.getElementById("bg_color4");
bgColor4.onclick = function(e) {
    localStorage.background = "rgb(100,200,25)";
    divD.style.background = localStorage.background;
}

var bgColor5 = document.getElementById("bg_color5");
bgColor5.onclick = function(e) {
    localStorage.background = "rgb(100,200,255)";
    divD.style.background = localStorage.background;
}
