(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,e,r){var content=r(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("1bd5369a",content,!0,{sourceMap:!1})},169:function(t,e,r){"use strict";var o=r(162);r.n(o).a},170:function(t,e,r){(t.exports=r(95)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:20px 10px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;height:24px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.read-more{width:140px}.blog-gallery-unit{width:100%}}",""])},171:function(t,e,r){var content=r(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("498b36b5",content,!0,{sourceMap:!1})},173:function(t,e,r){"use strict";var o={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},n=(r(169),r(9)),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-gallery"},t._l(t.blogList,function(e,o){return r("div",{key:o,staticClass:"blog-gallery-unit"},[r("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+e.slug,title:e.description}},[r("div",{staticClass:"blog-gallery-inner"},[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"blog-date align-left"},[r("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),r("p",{staticClass:"align-left"},[r("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"align-left"},t._l(e.tags,function(e,o){return r("span",{key:"tag"+o,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])])])])}),0)},[],!1,null,null,null);e.a=component.exports},186:function(t,e,r){"use strict";var o=r(171);r.n(o).a},187:function(t,e,r){(t.exports=r(95)(!1)).push([t.i,'.markdown-body{margin-bottom:50px}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:rgba(0,0,0,.7);transition:background .2s}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:before{background:red}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{width:48%;text-align:left;float:left}.next{width:48%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.prev p{padding-left:16px}.next p,.prev p{margin:0;padding-top:16px;padding-bottom:16px}.next p{padding-right:16px}#comment{margin-top:40px}',""])},193:function(t,e,r){"use strict";r.r(e);r(97),r(98),r(32),r(19),r(63);var o=r(62),n=r.n(o),l={components:{BlogGallery:r(173).a},asyncData:function(t){return n.a.get("http://127.0.0.1:4000?slug="+t.params.slug).then(function(e){var r=e.data,o=r.related_blog;o||(o=[]);for(var l=[],i=0;i<o.length;i++){var c=n.a.get("http://127.0.0.1:4000?slug="+o[i]).then(function(t){return delete t.data.content,t.data.date=t.data.slug.substring(0,10),t.data});l.push(c)}return l.length?Promise.all(l).then(function(e){return{blog:r,tags:r.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:e,baseURL:t.app.router.options.base}}):{blog:r,tags:r.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:[],baseURL:t.app.router.options.base}})},mounted:function(){var t=this;t.$nextTick(function(){var e=window,r=document;var o=r.createElement("script");o.src="/js/zoompic.js",r.querySelector("body").appendChild(o),t.blog.comments&&(!function(){if(!e.iDisqus){var s=r.createElement("script");s.src="https://disqus-api-hzn.000webhostapp.com/disqus/dist/iDisqus.min.js",r.querySelector("body").appendChild(s)}}(),function t(){e.iDisqus?r.getElementById("comment")&&new iDisqus("comment",{forum:"houzhenni-com",api:"https://disqus-api-hzn.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:2,timeout:3e3,init:!0,autoCreate:!1}):setTimeout(t,200)}());for(var n=r.querySelectorAll("a[href]"),l=function(i){-1!==n[i].href.indexOf("#")&&(n[i].onclick=function(t){(t||event).preventDefault();var e=n[i].href,o=e.indexOf("#"),l=e.substring(o+1,e.length);r.querySelector("a[id='"+String(l)+"']").scrollIntoView({behavior:"smooth"})})},i=0;i<n.length;i++)l(i)})},computed:{compiledMarkdown:function(){var html=this.blog.content,t=(html=html.replace(/href\=\"\#/g,'href="blogs/'+this.blog.slug+"#")).match(/href\=\"http.+<\/a>/g);if(t)for(var e=0;e<t.length;e++){var r=t[e];/<img/.test(r)||(r=t[e].replace("</a>",'&nbsp;<i class="fa fa-external-link"></i></a>')),html=html.replace(t[e],'target="_blank" '+r)}var o=html.match(/<img src=\"https:\/\/i\.ytimg\.com\/vi\/[^(<|>)]+default\.jpg\" alt=\"youtube-img\">/g);if(o)for(var i=0;i<o.length;i++)html=html.replace(o[i],'<span class="youtube-img">'+o[i]+"</span>");return html}},head:function(){var t=this.blog.tags.join(" ");return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:t}],link:[{rel:"stylesheet",href:this.baseURL+"css/github-markdown.min.css"},{rel:"stylesheet",href:"/css/highlight.js.css"},{rel:"stylesheet",href:"https://disqus-api-hzn.000webhostapp.com/disqus/dist/iDisqus.min.css"}]}}},c=(r(186),r(9)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.blog.title))]),t._v(" "),r("p",{staticClass:"blog-date"},[r("span",{staticClass:"fa fa-calendar"},[t._v(" "+t._s(t.date))])]),t._v(" "),r("p",{staticClass:"blog-tags"},t._l(t.tags,function(e,o){return r("a",{key:o,attrs:{href:t.baseURL+"blogs/tag/"+e}},[r("span",{staticClass:"blog-tag"},[t._v(t._s(e))])])}),0),t._v(" "),r("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),r("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),r("section",{staticClass:"prev-next"},[t.blog.prev?r("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.prev}},[t._m(0)]):t._e(),t._v(" "),t.blog.next?r("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.next}},[t._m(1)]):t._e()]),t._v(" "),t.relatedBlog.length?r("section",[t._m(2),t._v(" "),r("BlogGallery",{attrs:{blogList:t.relatedBlog,baseURL:t.baseURL}})],1):t._e(),t._v(" "),t.blog.comments?r("div",{attrs:{id:"comment"}}):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prev"},[e("p",[this._v("上一篇")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"next"},[e("p",[this._v("下一篇")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticStyle:{"text-align":"center"}},[e("span",{staticStyle:{"border-bottom":"2px solid black"}},[this._v("Related Articles")])])}],!1,null,null,null);e.default=component.exports}}]);