var styleContent = `
.zoomable {
	cursor: zoom-in;
}
#mask_layer {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .5);
}
#mask_child {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	margin: auto;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	cursor: zoom-out;
}
.hidden {
	display: none;
}
.fade-in-anime {
	animation: fade-in 0.5s;
  	z-index: 999;
}
.fade-out-anime {
	animation: fade-out 0.5s;
	animation-fill-mode: forwards;
}
@keyframes fade-in {
  from {
  	opacity: 0;
  	z-index: 999;
  }
  to {
  	opacity: 1;
  	z-index: 999;
  }
}
@keyframes fade-out {
  0% {
  	opacity: 1;
  	z-index: 999;
  }
  99% {
  	opacity: 0;
  	z-index: 999;
  }
  100% {
  	opacity: 0;
  	z-index: -1;
  }
}
`;
var d = document;
var maskStyle = d.createElement("style");
var maskDom = d.createElement("div");
maskDom.id = "mask_layer";
maskDom.className = "hidden";
maskDom.innerHTML = `<div id="mask_child"/>`;
maskStyle.innerHTML = styleContent;
d.querySelector("head").appendChild(maskStyle);
d.querySelector("body").appendChild(maskDom);
d.querySelector("#mask_layer").onclick = function() {
	this.className = "fade-out-anime";
}
zoompic("article img");
zoompic(".pic-showcase-unit");
function zoompic(selector) {
	var d = document;
	var nodes = d.querySelectorAll(selector);
	for (let i = 0; i < nodes.length; i++) {
		let parent = nodes[i].parentNode;
		let grandParent = parent.parentNode;
		if (parent.nodeName != "A" && grandParent.nodeName != "A") {
			nodes[i].className = nodes[i].className + " zoomable";
			nodes[i].onclick = function() {
				d.querySelector("#mask_child").style.backgroundImage = "url("+this.src+")";
				d.querySelector("#mask_layer").className = "fade-in-anime";
			}
		}
	}
}
