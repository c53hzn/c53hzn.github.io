;(function(){
	if(document.getElementById('disqus_thread')){
		var disq = new iDisqus('disqus_thread', {
	        forum: 'houzhenni-com',
	        api: 'https://37ed5962-3f77-41a6-bd8e-c7735322cebe.coding.io/api/login.php',
	        site: 'https://www.houzhenni.com',
	        mode: 1,
	        timeout: 3000,
	        init: true
	    });
	    disq.popular();
	    disq.count();
	}
})();