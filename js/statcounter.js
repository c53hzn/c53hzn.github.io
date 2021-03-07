(function() {
	if (window.location.host == "www.houzhenni.com") {
		window.sc_project=11716132; 
		window.sc_invisible=0; 
		window.sc_security="63c1267e"; 
		window.scJsHost = "https://";
		var url = "https://statcounter.com/counter/counter.js";
		addScript(url);
	}
	function addScript(script) {
		var s = document.createElement("script");
		s.src = script;
		document.querySelector("body").appendChild(s);
	}
})();
