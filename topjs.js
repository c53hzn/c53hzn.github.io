var scrollTop;
var screenWidth;
var float_menubar = document.getElementById("float_menubar");
var float_middlePart = document.getElementById("myIntro");
function toFixate(){
	float_menubar.className = "menuBarFixated";
	float_middlePart.className = "middlePartFixated";
}
function toNotFixate(){
	float_menubar.className = "menuBar";
	float_middlePart.className = "middlePart";
}
window.onscroll = function(){
	scrollTop = document.body.scrollTop;
	screenWidth = screen.width;
	if(screen.width<401){
		if(scrollTop > 120){
			toFixate();
		}
		else{toNotFixate();}
	}
	else if(scrollTop > 150){
		toFixate();
	}
	else{toNotFixate();}
};
