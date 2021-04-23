var loader = setInterval(function () {
	var tempGoogle = adsbygoogle;
    if(document.readyState !== "complete" && !tempGoogle.loaded) return;
    clearInterval(loader);
    if (window.location.host == "www.houzhenni.com") {
		window.sc_project=11716132; 
		window.sc_invisible=0; 
		window.sc_security="63c1267e"; 
		window.scJsHost = "https://";
		var s = document.createElement("script");
		s.src = "https://statcounter.com/counter/counter.js";
		document.body.appendChild(s);
	}
}, 300);