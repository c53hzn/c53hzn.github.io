(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(t,n,e){var content=e(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("f28bdea2",content,!0,{sourceMap:!1})},196:function(t,n,e){"use strict";e(195)},197:function(t,n,e){(n=e(42)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 20px 0;width:46%;background:#fff;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:nth-child(2n-1){margin-left:0}.blog-gallery-unit:nth-child(2n){margin-right:0}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}.blog-gallery-lang{display:inline-block;width:60px;font-size:14px;text-align:center;color:grey;border:1px solid silver;border-radius:4px}@media (max-width:768px){.blog-gallery-unit:nth-child(2n-1){margin-right:15px}.blog-gallery-unit:nth-child(2n){margin-left:15px}}@media (max-width:425px){.blog-gallery-unit{margin:20px 0 0;width:100%}.blog-gallery-unit:nth-child(2n-1){margin-right:0}.blog-gallery-unit:nth-child(2n){margin-left:0}}.col-1{margin:10px auto;width:98%}.col-1:first-child,.col-1:nth-child(2){margin-top:10px}.col-1:nth-child(2n),.col-1:nth-child(2n-1){margin:10px}.col-1 .desc-tag{display:none}@media (max-width:768px){.col-1{width:46%}.col-1:nth-child(2n-1){margin-right:15px}.col-1:nth-child(2n){margin-left:15px}.col-1 .desc-tag{display:block}}@media (max-width:425px){.col-1{margin:20px 0 0;width:100%}.col-1:first-child,.col-1:nth-child(2){margin-top:10px}.col-1:nth-child(2n),.col-1:nth-child(2n-1){margin:10px}}",""]),t.exports=n},198:function(t,n,e){"use strict";var o={name:"Blog-Gallery",props:{blogList:{type:Array,required:!0},col:{type:String}}},r=(e(196),e(2)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"blog-gallery"},t._l(t.blogList,(function(n,o){return e("div",{key:o,staticClass:"blog-gallery-unit",class:{"col-1":1==t.col}},[e("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+n.slug,title:n.description}},[e("div",{staticClass:"blog-gallery-inner align-left"},[e("h4",[t._v(t._s(n.title))]),t._v(" "),e("p",[e("span",{staticClass:"blog-date"},[e("i",{staticClass:"fa fa-calendar"}),t._v("\n               "+t._s(n.date.substring(0,10))+"\n            ")]),t._v(" "),e("span",{staticClass:"blog-gallery-lang"},[t._v("\n              "+t._s(n.language)+"\n            ")])]),t._v(" "),e("p",{staticClass:"desc-tag align-left"},[e("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(n.description))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"align-left"},t._l(n.tags,(function(n,o){return e("span",{key:"tag"+o,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(n)+"\n              ")])})),0)])])])])})),0)}),[],!1,null,null,null);n.a=component.exports},206:function(t,n,e){var content=e(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("72520070",content,!0,{sourceMap:!1})},224:function(t,n){t.exports=function(t){var n=document,e=n.createElement("style"),o=n.createElement("div");o.id="mask_layer",o.className="hidden",o.innerHTML='<div id="mask_child"></div>',e.innerHTML="\n.zoomable {\n\tcursor: zoom-in;\n}\n#mask_layer {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, .5);\n}\n#mask_child {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tmargin: auto;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tcursor: zoom-out;\n}\n#mask_layer .arrow {\n  position: absolute;\n  top: 50%;\n  left: 0px;\n  right: 0px;\n  width: 48px;\n  font-size: 24px;\n  color: white;\n  text-align: center;\n  line-height: 50px;\n  vertical-align: top;\n  background: rgba(0,0,0,0.5);\n  transform: translateY(-25px);\n  user-select: none;\n  cursor: pointer;\n}\n#mask_layer .arrow:hover {\n  opacity: 0.7;\n}\n#mask_layer .arrow-left {\n  left: 0px;\n  right: auto;\n}\n#mask_layer .arrow-right {\n  left: auto;\n  right: 0px;\n}\n.hidden {\n\tdisplay: none;\n}\n.fade-in-anime {\n\tanimation: fade-in 0.5s;\n  \tz-index: 2;\n}\n.fade-out-anime {\n\tanimation: fade-out 0.5s;\n\tanimation-fill-mode: forwards;\n}\n@keyframes fade-in {\n  from {\n  \topacity: 0;\n  \tz-index: 2;\n  }\n  to {\n  \topacity: 1;\n  \tz-index: 2;\n  }\n}\n@keyframes fade-out {\n  0% {\n  \topacity: 1;\n  \tz-index: 2;\n  }\n  99% {\n  \topacity: 0;\n  \tz-index: 2;\n  }\n  100% {\n  \topacity: 0;\n  \tz-index: -1;\n  }\n}\n",n.querySelector("head").appendChild(e),n.querySelector("body").appendChild(o),n.querySelector("#mask_child").onclick=function(){n.querySelector("#mask_layer").className="fade-out-anime"};for(var r=0;r<t.length;r++)l(t[r][0],t[r][1],r);function l(t,e,o){for(var r=n.querySelectorAll(t),i=0;i<r.length;i++){var l=r[i].parentNode,c=l.parentNode;"A"!=l.nodeName&&"A"!=c.nodeName&&(r[i].className=r[i].className+" zoomable",r[i].setAttribute("data-zoom-group-index",o+"-"+i),r[i].onclick=function(){n.querySelector("#mask_child").style.backgroundImage=e?"url("+this.src+")":this.style.backgroundImage,n.querySelector("#mask_layer").className="fade-in-anime"})}}}},225:function(t,n){t.exports=function(t){var n,e,o=window,r=document;n="https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.css",(e=r.createElement("link")).rel="stylesheet",e.href=n,r.querySelector("head").appendChild(e),o.iDisqus||(!function(t){var s=r.createElement("script");s.src=t,r.querySelector("body").appendChild(s)}("https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.js"),function n(){if(o.iDisqus){new iDisqus(t,{forum:"houzhenni-com",api:"https://hzn-website.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:1,timeout:3e3,init:!0,autoCreate:!1});return}setTimeout(n,200)}())}},226:function(t,n,e){"use strict";e(206)},227:function(t,n,e){(n=e(42)(!1)).push([t.i,'.blog-wrap{margin:10px auto;padding:10px 0;width:1080px;display:flex;justify-content:space-between;flex-wrap:wrap}.blog-main{margin:0 10px 10px 0;width:66%;padding:0 16px 16px;background:#fff;border:1px solid silver;border-radius:5px;overflow:hidden}.blog-side{margin:0 0 10px;width:33%}#my-info{margin:0 10px;padding:10px;background:#fff;border:1px solid silver;border-radius:5px}.nuxt-content{margin-bottom:50px}.nuxt-content h2{margin:9px 18px;padding:9px 0}.nuxt-content h3,.nuxt-content h4,.nuxt-content h5{margin:0 18px;padding:0}.nuxt-content h2,.nuxt-content h3{border-bottom:1px solid silver}.nuxt-content h2{font-size:30px}.nuxt-content h3{font-size:28px}.nuxt-content h4{font-size:24px}.nuxt-content h5{font-size:20px}.nuxt-content p{margin-left:18px;margin-right:18px;line-height:24px}.nuxt-content ol{padding-right:18px}.nuxt-content li{line-height:24px}.nuxt-content li p{margin:0}.nuxt-content iframe{margin-left:20px}.nuxt-content iframe.youtube{margin:8px auto 8px 20px;width:480px;height:360px;display:block}.nuxt-content blockquote{margin:16px 18px;padding:10px;color:#6a737d;background-color:#f8f8f8;border-left:.25em solid #dfe2e5}.nuxt-content img{max-height:100px;max-width:600px;border:1px solid silver}.nuxt-content pre{margin-left:18px;margin-right:18px;border-radius:4px}.nuxt-content code,.nuxt-content li p code{padding:4px;color:#d4d4d4;vertical-align:top;background:#1e1e1e;border-radius:4px;display:inline}.nuxt-content a,.toc a,.toc a:active,.toc a:visited{color:#000;font-weight:700}.nuxt-content a:hover,.toc a:hover{color:grey}li.toc3{list-style:circle;margin-left:15px}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}#disqus_thread{margin-top:20px}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{margin-left:18px;width:46%;text-align:left;float:left}.next{margin-right:18px;width:46%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.next p,.prev p{margin:14px;padding:0;height:46px;overflow:hidden}#comment{margin:40px 18px 0}@media (max-width:1080px){.below-nav{background:none}.blog-wrap{width:100%;justify-content:space-around}.blog-main{margin:0 0 0 10px;width:65%}.blog-side{width:33%}}@media (max-width:768px){.below-nav,.blog-wrap{background:#fff}.blog-wrap{margin:0;padding:0;display:block}.blog-main{margin:0;padding:10px;width:auto;border:none;border-radius:0}.blog-side{margin-top:20px;width:100%}.nuxt-content h2,.nuxt-content h3,.nuxt-content h4,.nuxt-content h5{margin:9px 0}.nuxt-content blockquote{margin:16px 0}.nuxt-content img{max-width:100%}.nuxt-content p{margin-left:0;margin-right:0}.nuxt-content iframe{margin-left:0}.nuxt-content iframe.youtube{margin:8px auto;width:100%}.nuxt-content ul{padding-left:20px}.nuxt-content pre{margin-left:0;margin-right:0}.next,.prev{margin:0}.next p,.prev p{margin:8px;padding:0}.next .title,.prev .title{font-size:12px}#comment{margin:40px 0 0}}@media (max-width:539px){.nuxt-content iframe.youtube{height:auto}}',""]),t.exports=n},255:function(t,n,e){"use strict";e.r(n);e(32);var o=e(5),r=e(198),l=e(224),c=e.n(l),d=e(225),h=e.n(d),x={layout:"post",components:{BlogGallery:r.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,r,l,c,i,d,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params.slug,n.next=3,t.$content("ui-config").fetch();case 3:return o=n.sent,n.next=6,t.$content("blog").where({slug:e}).fetch();case 6:return r=n.sent,l=r[0],n.next=10,t.$content("blog").only(["title","slug"]).sortBy("date").surround(e).fetch();case 10:if(c=n.sent,l.prev=c[0],l.next=c[1],l.relatedBlog=[],!l.related_blog){n.next=28;break}i=0;case 17:if(!(i<l.related_blog.length)){n.next=28;break}if(!l.related_blog[i]){n.next=25;break}return d=l.related_blog[i].substring(11,l.related_blog[i].length),n.next=23,t.$content("blog").only(["title","slug","date","description","tags","language"]).where({slug:d}).fetch();case 23:h=n.sent,l.relatedBlog.push(h[0]);case 25:i++,n.next=17;break;case 28:return n.abrupt("return",{blog:l,mySlug:e,keywords:l.keywords?l.keywords:[],profile_pic:o.blog_slug.profile_pic,ui_zh:o.blog_slug.ui_zh,ui_en:o.blog_slug.ui_en});case 29:case"end":return n.stop()}}),n)})))()},mounted:function(){var t=this;t.$nextTick((function(){var n=window,e=document;t.blog.comments&&h()("comment");for(var o=e.querySelectorAll("article h2"),r=e.querySelectorAll("article h3"),i=0;i<o.length;i++)o[i].innerHTML="<a id=".concat(o[i].id,"></a>")+o[i].innerText,o[i].id="h2-"+(i+1);for(var l=0;l<r.length;l++)r[l].innerHTML="<a id=".concat(r[l].id,"></a>")+r[l].innerText,r[l].id="h3-"+(l+1);for(var d=e.querySelectorAll("article a[href]"),x=function(t){var o=-1!==d[t].href.indexOf("#"),r=d[t].host!==n.location.host;o&&!r?d[t].onclick=function(n){(n||event).preventDefault();var o=d[t].href,r=o.indexOf("#"),l=o.substring(r+1,o.length);e.querySelector("a[id='"+decodeURI(l)+"']").scrollIntoView({behavior:"smooth"})}:r&&(d[t].target="_blank",d[t].innerHTML=d[t].innerHTML+'<i class="fa fa-external-link"></i>')},m=0;m<d.length;m++)x(m);c()([[".nuxt-content img",!0]])}))},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},head:function(){return{htmlAttrs:{lang:"中文"==this.blog.language?"zh":"日本語"==this.blog.language?"jp":"en"},title:this.blog.title,meta:[{hid:"date",name:"date",content:this.blog.date.substring(0,10)},{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:this.keywords.length?this.blog.tags.join(",")+","+this.keywords.join(","):this.blog.tags.join(",")}]}}},m=(e(226),e(2)),component=Object(m.a)(x,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"blog-wrap"},[e("section",{staticClass:"blog-main"},[e("h1",{staticClass:"align-center article-title"},[t._v(t._s(t.blog.title))]),t._v(" "),e("p",{staticClass:"align-center"},[e("span",{staticClass:"blog-date"},[e("i",{staticClass:"fa fa-calendar "}),t._v("\n        "+t._s(t.blog.date.substring(0,10))+"\n      ")]),t._v(" "),e("a",{attrs:{href:"/blog/language/"+t.blog.language}},[e("span",{staticClass:"blog-lang"},[t._v(t._s(t.blog.language))])])]),t._v(" "),e("p",{staticClass:"blog-tags align-center"},t._l(t.blog.tags,(function(n,o){return e("a",{key:o,attrs:{href:"/blog/tag/"+n}},[e("span",{staticClass:"blog-tag"},[t._v(t._s(n))])])})),0),t._v(" "),e("p",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),e("article",[e("ul",{staticClass:"toc"},t._l(t.blog.toc,(function(link){return e("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[e("a",{attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0),t._v(" "),e("nuxt-content",{attrs:{document:t.blog}})],1),t._v(" "),e("div",{staticClass:"prev-next"},[t.blog.prev?e("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+t.blog.prev.slug,title:t.blog.prev.title}},[e("div",{staticClass:"prev"},[e("p",[t._v(t._s(t.ui_str.to_prev)+":"),e("br"),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.blog.prev.title))])])])]):t._e(),t._v(" "),t.blog.next?e("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+t.blog.next.slug,title:t.blog.next.title}},[e("div",{staticClass:"next"},[e("p",[t._v(t._s(t.ui_str.to_next)+":"),e("br"),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.blog.next.title))])])])]):t._e()]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),t.blog.comments?e("div",{attrs:{id:"comment"}}):t._e()]),t._v(" "),e("section",{staticClass:"blog-side"},[e("a",{attrs:{href:"/resume"}},[e("div",{attrs:{id:"my-info"}},[e("div",[t._v("{ui_str.author}")]),t._v(" "),e("img",{staticStyle:{width:"64px",margin:"10px auto",display:"block"},attrs:{src:t.profile_pic}}),t._v(" "),e("div",[t._v(t._s(t.ui_str.profile_desc))])])]),t._v(" "),t.blog.relatedBlog.length?e("div",[e("h3",{staticClass:"align-center"},[e("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v("\n        \t"+t._s(t.ui_str.related_posts)+"\n        ")])]),t._v(" "),e("BlogGallery",{attrs:{blogList:t.blog.relatedBlog,col:"1"}})],1):t._e()])])}),[],!1,null,null,null);n.default=component.exports}}]);