(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("1da8fc0f",content,!0,{sourceMap:!1})},199:function(t,e,n){"use strict";n(198)},200:function(t,e,n){(e=n(75)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:46%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2:nth-child(2n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-left:0}.pic-showcase-unit-2:nth-child(2n),.pic-showcase-unit-4:nth-child(4n){margin-right:0}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.pic-showcase-unit-2:nth-child(2n-1){margin-right:16px}.pic-showcase-unit-2:nth-child(2n){margin-left:16px}.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-3:nth-child(2n-1){margin-left:0;margin-right:15px}.pic-showcase-unit-3:nth-child(2n){margin-left:15px;margin-right:0}.pic-showcase-unit-3{width:46%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:23%}.pic-showcase-unit-4:nth-child(4n-3){margin-left:0;margin-right:0}.pic-showcase-unit-4:nth-child(4n),.pic-showcase-unit-4:nth-child(4n-1),.pic-showcase-unit-4:nth-child(4n-2){margin-left:12px;margin-right:0}}@media (max-width:539px){.pic-showcase-unit-2{width:100%}.pic-showcase-unit-2:nth-child(2n-1){margin-right:0}.pic-showcase-unit-2:nth-child(2n){margin-left:0}.pic-showcase-unit-3{width:48%}.pic-showcase-unit-3:nth-child(2n-1){margin-left:0;margin-right:7px}.pic-showcase-unit-3:nth-child(2n){margin-left:0;margin-right:0}.pic-showcase-unit-4{width:48%}.pic-showcase-unit-4:nth-child(4n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-left:0;margin-right:7px}.pic-showcase-unit-4:nth-child(4n),.pic-showcase-unit-4:nth-child(4n-2){margin-left:0;margin-right:0}}@media (max-width:425px){.pic-showcase-unit-4{width:49%}.pic-showcase-unit-4.h-300{width:48%}.pic-showcase-unit-4:nth-child(4n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-right:5px}}",""]),t.exports=e},201:function(t,e,n){"use strict";var o={name:"Pic-Showcase",props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0}}},l=(n(199),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,o){return n("div",{key:"showcasepic"+o,class:"below"==t.txt_pos?"pic-showcase-unit-"+t.column+" h-auto":"pic-showcase-unit-"+t.column+" h-300"},[n("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?n("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),n("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?n("div",{staticClass:"pic-showcase-title"},[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?n("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():n("div",{staticClass:"pic-showcase-title"},[n("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?n("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("f28bdea2",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(202)},204:function(t,e,n){(e=n(75)(!1)).push([t.i,'.blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 20px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:nth-child(2n-1){margin-left:0}.blog-gallery-unit:nth-child(2n){margin-right:0}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:"Microsoft Yahei";line-height:20px;border-radius:999px;background:grey;display:inline-block}.blog-gallery-lang{display:inline-block;width:60px;font-size:14px;text-align:center;color:grey;border:1px solid silver;border-radius:4px}@media (max-width:768px){.blog-gallery-unit:nth-child(2n-1){margin-right:15px}.blog-gallery-unit:nth-child(2n){margin-left:15px}}@media (max-width:425px){.blog-gallery-unit{margin:20px 0 0;width:100%}.blog-gallery-unit:nth-child(2n-1){margin-right:0}.blog-gallery-unit:nth-child(2n){margin-left:0}}',""]),t.exports=e},205:function(t,e,n){"use strict";var o={name:"Blog-Gallery",props:{blogList:{type:Array,required:!0}}},l=(n(203),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-gallery"},t._l(t.blogList,(function(e,o){return n("div",{key:o,staticClass:"blog-gallery-unit"},[n("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+e.slug,title:e.description}},[n("div",{staticClass:"blog-gallery-inner align-left"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",[n("span",{staticClass:"blog-date"},[n("i",{staticClass:"fa fa-calendar"}),t._v("\n               "+t._s(e.date.substring(0,10))+"\n            ")]),t._v(" "),n("span",{staticClass:"blog-gallery-lang"},[t._v("\n              "+t._s(e.language)+"\n            ")])]),t._v(" "),n("p",{staticClass:"align-left"},[n("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"align-left"},t._l(e.tags,(function(e,o){return n("span",{key:"tag"+o,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])])])})),0)}),[],!1,null,null,null);e.a=component.exports},212:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("72520070",content,!0,{sourceMap:!1})},226:function(t,e){t.exports=function(t){var e=document,n=e.createElement("style"),o=e.createElement("div");o.id="mask_layer",o.className="hidden",o.innerHTML='<div id="mask_child"></div>',n.innerHTML="\n.zoomable {\n\tcursor: zoom-in;\n}\n#mask_layer {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, .5);\n}\n#mask_child {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tmargin: auto;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tcursor: zoom-out;\n}\n.hidden {\n\tdisplay: none;\n}\n.fade-in-anime {\n\tanimation: fade-in 0.5s;\n  \tz-index: 999;\n}\n.fade-out-anime {\n\tanimation: fade-out 0.5s;\n\tanimation-fill-mode: forwards;\n}\n@keyframes fade-in {\n  from {\n  \topacity: 0;\n  \tz-index: 999;\n  }\n  to {\n  \topacity: 1;\n  \tz-index: 999;\n  }\n}\n@keyframes fade-out {\n  0% {\n  \topacity: 1;\n  \tz-index: 999;\n  }\n  99% {\n  \topacity: 0;\n  \tz-index: 999;\n  }\n  100% {\n  \topacity: 0;\n  \tz-index: -1;\n  }\n}\n",e.querySelector("head").appendChild(n),e.querySelector("body").appendChild(o),e.querySelector("#mask_layer").onclick=function(){this.className="fade-out-anime"};for(var l=0;l<t.length;l++)r(t[l][0],t[l][1]);function r(t,n){for(var o=e.querySelectorAll(t),i=0;i<o.length;i++){var l=o[i].parentNode,r=l.parentNode;"A"!=l.nodeName&&"A"!=r.nodeName&&(o[i].className=o[i].className+" zoomable",o[i].onclick=function(){e.querySelector("#mask_child").style.backgroundImage=n?"url("+this.src+")":this.style.backgroundImage,e.querySelector("#mask_layer").className="fade-in-anime"})}}}},227:function(t,e,n){"use strict";n(212)},228:function(t,e,n){(e=n(75)(!1)).push([t.i,'.nuxt-content{margin-bottom:50px}.nuxt-content h2{margin:9px 18px;padding:9px 0}.nuxt-content h3,.nuxt-content h4,.nuxt-content h5{margin:0 18px;padding:0}.nuxt-content h2,.nuxt-content h3{border-bottom:1px solid silver}.nuxt-content h2{font-size:30px}.nuxt-content h3{font-size:28px}.nuxt-content h4{font-size:24px}.nuxt-content h5{font-size:20px}.nuxt-content p{margin-left:18px;margin-right:18px;line-height:24px}.nuxt-content ol{padding-right:18px}.nuxt-content li{line-height:24px}.nuxt-content li p{margin:0}.nuxt-content blockquote{margin:16px 18px;padding:10px;color:#6a737d;background-color:#f8f8f8;border-left:.25em solid #dfe2e5}.nuxt-content img{max-height:100px;max-width:600px;border:1px solid silver}.nuxt-content pre{margin-left:18px;margin-right:18px;border-radius:4px}.nuxt-content code,.nuxt-content li p code{padding:4px;color:#d4d4d4;vertical-align:top;background:#1e1e1e;border-radius:4px;display:inline}.nuxt-content a,.toc a,.toc a:active,.toc a:visited{text-decoration:none;color:#0366d6}li.toc3{list-style:circle;transform:translateX(15px)}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}#disqus_thread{margin-top:20px}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{margin-left:18px;width:46%;text-align:left;float:left}.next{margin-right:18px;width:46%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.next p,.prev p{margin:14px;padding:0;height:46px;overflow:hidden}#comment{margin:40px 18px 0}@media (max-width:768px){.nuxt-content h2,.nuxt-content h3,.nuxt-content h4,.nuxt-content h5{margin:9px 0}.nuxt-content blockquote{margin:16px 0}.nuxt-content img{max-width:100%}.nuxt-content p{margin-left:0;margin-right:0}.nuxt-content ul{padding-left:20px}.nuxt-content pre{margin-left:0;margin-right:0}.next,.prev{margin:0}.next p,.prev p{margin:8px;padding:0}.next .title,.prev .title{font-size:12px}#comment{margin:40px 0 0}}',""]),t.exports=e},250:function(t,e,n){"use strict";n.r(e);n(37);var o=n(2),l=n(205),r=n(226),c=n.n(r),h=n(201),d={layout:"blog",components:{BlogGallery:l.a,PicShowcase:h.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,r,c,h,i,d,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params.slug,e.next=3,t.$content("blog-slug").fetch();case 3:return o=e.sent,e.next=6,t.$content("products/list").fetch();case 6:return l=e.sent,e.next=9,t.$content("blog").where({slug:n}).fetch();case 9:return r=e.sent,c=r[0],e.next=13,t.$content("blog").only(["title","slug"]).sortBy("date").surround(n).fetch();case 13:if(h=e.sent,c.prev=h[0],c.next=h[1],c.relatedBlog=[],!c.related_blog){e.next=31;break}i=0;case 20:if(!(i<c.related_blog.length)){e.next=31;break}if(!c.related_blog[i]){e.next=28;break}return d=c.related_blog[i].substring(11,c.related_blog[i].length),e.next=26,t.$content("blog").only(["title","slug","date","description","tags","language"]).where({slug:d}).fetch();case 26:x=e.sent,c.relatedBlog.push(x[0]);case 28:i++,e.next=20;break;case 31:return e.abrupt("return",{blog:c,mySlug:n,ui_zh:o.ui_zh,ui_en:o.ui_en,etsy_item_list:l.etsy_item_list});case 32:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;t.$nextTick((function(){var script,s,e=window,n=document;t.blog.comments&&(e.iDisqus||(script="https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.js",(s=n.createElement("script")).src=script,n.querySelector("body").appendChild(s)),function t(){if(e.iDisqus){if(n.getElementById("comment"))new iDisqus("comment",{forum:"houzhenni-com",api:"https://hzn-website.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:1,timeout:3e3,init:!0,autoCreate:!1})}else setTimeout(t,200)}());for(var o=n.querySelectorAll("article h2"),l=n.querySelectorAll("article h3"),i=0;i<o.length;i++)o[i].innerHTML="<a id=".concat(o[i].id,"></a>")+o[i].innerText,o[i].id="h2-"+(i+1);for(var r=0;r<l.length;r++)l[r].innerHTML="<a id=".concat(l[r].id,"></a>")+l[r].innerText,l[r].id="h3-"+(r+1);for(var h=n.querySelectorAll("article a[href]"),d=function(t){var o=-1!==h[t].href.indexOf("#"),l=h[t].host!==e.location.host;o&&!l?h[t].onclick=function(e){(e||event).preventDefault();var o=h[t].href,l=o.indexOf("#"),r=o.substring(l+1,o.length);n.querySelector("a[id='"+decodeURI(r)+"']").scrollIntoView({behavior:"smooth"})}:l&&(h[t].target="_blank",h[t].innerHTML=h[t].innerHTML+'<i class="fa fa-external-link"></i>')},x=0;x<h.length;x++)d(x);c()([[".nuxt-content img",!0]])}))},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},head:function(){return{title:this.blog.title,meta:[{hid:"date",name:"date",content:this.blog.date.substring(0,10)},{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:this.blog.tags.join(",")}],link:[{rel:"stylesheet",href:"https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.css"}]}}},x=(n(227),n(4)),component=Object(x.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main-content"},[n("h1",{staticClass:"align-center article-title"},[t._v(t._s(t.blog.title))]),t._v(" "),n("p",{staticClass:"align-center"},[n("span",{staticClass:"blog-date"},[n("i",{staticClass:"fa fa-calendar "}),t._v("\n        "+t._s(t.blog.date.substring(0,10))+"\n      ")]),t._v(" "),n("a",{attrs:{href:"/blog/language/"+t.blog.language}},[n("span",{staticClass:"blog-lang"},[t._v(t._s(t.blog.language))])])]),t._v(" "),n("p",{staticClass:"blog-tags align-center"},t._l(t.blog.tags,(function(e,o){return n("a",{key:o,attrs:{href:"/blog/tag/"+e}},[n("span",{staticClass:"blog-tag"},[t._v(t._s(e))])])})),0),t._v(" "),n("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),n("article",[n("ul",{staticClass:"toc"},t._l(t.blog.toc,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("a",{attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0),t._v(" "),n("nuxt-content",{attrs:{document:t.blog}})],1),t._v(" "),t._m(0),t._v(" "),n("PicShowcase",{attrs:{pic_showcase_pics:t.etsy_item_list,column:"4",txt_pos:"below"}}),t._v(" "),n("div",{staticClass:"prev-next"},[t.blog.prev?n("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+t.blog.prev.slug,title:t.blog.prev.title}},[n("div",{staticClass:"prev"},[n("p",[t._v(t._s(t.ui_str.to_prev)+":"),n("br"),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(t.blog.prev.title))])])])]):t._e(),t._v(" "),t.blog.next?n("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+t.blog.next.slug,title:t.blog.next.title}},[n("div",{staticClass:"next"},[n("p",[t._v(t._s(t.ui_str.to_next)+":"),n("br"),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(t.blog.next.title))])])])]):t._e()]),t._v(" "),t.blog.relatedBlog.length?n("div",[n("h3",{staticStyle:{"text-align":"center"}},[n("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.related_posts))])]),t._v(" "),n("BlogGallery",{attrs:{blogList:t.blog.relatedBlog}})],1):t._e(),t._v(" "),t.blog.comments?n("div",{attrs:{id:"comment"}}):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"align-center"},[e("span",[this._v("Buy a digital product here!")])])}],!1,null,null,null);e.default=component.exports}}]);