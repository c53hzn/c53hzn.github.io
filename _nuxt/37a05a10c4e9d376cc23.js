(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(t,e,o){var content=o(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("1bd5369a",content,!0,{sourceMap:!1})},172:function(t,e,o){"use strict";var r=o(164);o.n(r).a},173:function(t,e,o){(t.exports=o(63)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 10px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.blog-gallery-unit{width:100%}}",""])},174:function(t,e,o){var content=o(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("498b36b5",content,!0,{sourceMap:!1})},176:function(t,e,o){"use strict";var r={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},n=(o(172),o(5)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-gallery"},t._l(t.blogList,function(e,r){return o("div",{key:r,staticClass:"blog-gallery-unit"},[o("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+e.slug,title:e.description}},[o("div",{staticClass:"blog-gallery-inner align-left"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"blog-date"},[o("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),o("p",{staticClass:"align-left"},[o("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"align-left"},t._l(e.tags,function(e,r){return o("span",{key:"tag"+r,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])])])])}),0)},[],!1,null,null,null);e.a=component.exports},191:function(t,e,o){"use strict";var r=o(174);o.n(r).a},192:function(t,e,o){(t.exports=o(63)(!1)).push([t.i,'.markdown-body{margin-bottom:50px}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:rgba(0,0,0,.7);transition:background .2s}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:before{background:red}#disqus_thread{margin-top:20px}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{width:48%;text-align:left;float:left}.next{width:48%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.prev p{padding-left:16px}.next p,.prev p{margin:0;padding-top:16px;padding-bottom:16px}.next p{padding-right:16px}#comment{margin-top:40px}',""])},199:function(t,e,o){"use strict";o.r(e);o(98),o(99),o(32),o(19),o(66);var r=o(65),n=o.n(r),l={layout:"default",components:{BlogGallery:o(176).a},asyncData:function(t){return n.a.get("http://127.0.0.1:4000/blogs?slug="+t.params.slug).then(function(e){var o=e.data,r=o.related_blog;r||(r=[]);for(var l=[],i=0;i<r.length;i++){var c=n.a.get("http://127.0.0.1:4000/blogs?slug="+r[i]).then(function(t){return delete t.data.content,t.data.date=t.data.slug.substring(0,10),t.data});l.push(c)}var d={to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"};return l.length?Promise.all(l).then(function(e){return{blog:o,tags:o.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:e,baseURL:t.app.router.options.base,ui_str:d}}):{blog:o,tags:o.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:[],baseURL:t.app.router.options.base,ui_str:d}})},mounted:function(){var t=this;t.$nextTick(function(){var e=window,o=document;var r=o.createElement("script");r.src="/js/zoompic.js",o.querySelector("body").appendChild(r),t.blog.comments&&(!function(){if(!e.iDisqus){var s=o.createElement("script");s.src="https://disqus-api-hzn.000webhostapp.com/disqus/dist/iDisqus.min.js",o.querySelector("body").appendChild(s)}}(),function t(){e.iDisqus?o.getElementById("comment")&&new iDisqus("comment",{forum:"houzhenni-com",api:"https://disqus-api-hzn.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:2,timeout:3e3,init:!0,autoCreate:!1}):setTimeout(t,200)}());for(var n=o.querySelectorAll("a[href]"),l=function(i){-1!==n[i].href.indexOf("#")&&(n[i].onclick=function(t){(t||event).preventDefault();var e=n[i].href,r=e.indexOf("#"),l=e.substring(r+1,e.length);o.querySelector("a[id='"+String(l)+"']").scrollIntoView({behavior:"smooth"})})},i=0;i<n.length;i++)l(i)})},computed:{compiledMarkdown:function(){var html=this.blog.content,t=(html=html.replace(/href\=\"\#/g,'href="blogs/'+this.blog.slug+"#")).match(/href\=\"http.+<\/a>/g);if(t)for(var e=0;e<t.length;e++){var o=t[e];/<img/.test(o)||(o=t[e].replace("</a>",'&nbsp;<i class="fa fa-external-link"></i></a>')),html=html.replace(t[e],'target="_blank" '+o)}var r=html.match(/<img src=\"https:\/\/i\.ytimg\.com\/vi\/[^(<|>)]+default\.jpg\" alt=\"youtube-img\">/g);if(r)for(var i=0;i<r.length;i++)html=html.replace(r[i],'<span class="youtube-img">'+r[i]+"</span>");return html}},head:function(){var t=this.blog.tags.join(" ");return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:t}],link:[{rel:"stylesheet",href:this.baseURL+"css/github-markdown.min.css"},{rel:"stylesheet",href:"/css/highlight.js.css"},{rel:"stylesheet",href:"https://disqus-api-hzn.000webhostapp.com/disqus/dist/iDisqus.min.css"}]}}},c=(o(191),o(5)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"main-content"},[o("h1",{staticClass:"align-center"},[t._v(t._s(t.blog.title))]),t._v(" "),o("p",{staticClass:"blog-date align-center"},[o("span",{staticClass:"fa fa-calendar"},[t._v(" "+t._s(t.date))])]),t._v(" "),o("p",{staticClass:"blog-tags align-center"},t._l(t.tags,function(e,r){return o("a",{key:r,attrs:{href:t.baseURL+"blogs/tag/"+e}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(e))])])}),0),t._v(" "),o("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),o("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),o("div",{staticClass:"prev-next"},[t.blog.prev?o("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.prev}},[o("div",{staticClass:"prev"},[o("p",[t._v(t._s(t.ui_str.to_prev))])])]):t._e(),t._v(" "),t.blog.next?o("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.next}},[o("div",{staticClass:"next"},[o("p",[t._v(t._s(t.ui_str.to_next))])])]):t._e()]),t._v(" "),t.relatedBlog.length?o("div",[o("h3",{staticStyle:{"text-align":"center"}},[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.related_posts))])]),t._v(" "),o("BlogGallery",{attrs:{blogList:t.relatedBlog,baseURL:t.baseURL}})],1):t._e(),t._v(" "),t.blog.comments?o("div",{attrs:{id:"comment"}}):t._e()])])},[],!1,null,null,null);e.default=component.exports}}]);