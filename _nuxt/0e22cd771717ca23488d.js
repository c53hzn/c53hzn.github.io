(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{189:function(t,e,n){var content=n(193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("cb150022",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";n(189)},193:function(t,e,n){(e=n(69)(!1)).push([t.i,".side-nav .close{position:absolute;top:4px;right:18px;font-size:24px;cursor:pointer;display:none}.desk-fix{position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;padding:10px;width:400px;height:400px;overflow-y:overlay;display:none}.desk-fix .close{display:block}@media (max-width:768px){.side-nav{position:fixed;top:0;left:0;margin:60px 10px 40px;padding:10px;width:calc(100vw - 20px);height:calc(100vh - 100px);overflow-y:scroll;display:none}.side-nav .close{display:block}}.show{display:block}",""]),t.exports=e},194:function(t,e,n){"use strict";var o={name:"Side-Nav",data:function(){return{isShow:!1}},props:{isDeskFix:{type:Boolean}},methods:{toggle:function(){this.isShow=!this.isShow}}},r=(n(192),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-nav",class:{show:this.isShow,"desk-fix":!!this.isDeskFix}},[this._t("default"),this._v(" "),e("div",{staticClass:"close",on:{click:this.toggle}},[e("i",{staticClass:"fa fa-window-close-o"})])],2)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e){t.exports=function(t){var e=document,n=e.createElement("style"),o=e.createElement("div");o.id="mask_layer",o.className="hidden",o.innerHTML='<div id="mask_child"></div>',n.innerHTML="\n.zoomable {\n\tcursor: zoom-in;\n}\n#mask_layer {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, .5);\n}\n#mask_child {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tmargin: auto;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tcursor: zoom-out;\n}\n#mask_layer .arrow {\n  position: absolute;\n  top: 50%;\n  left: 0px;\n  right: 0px;\n  width: 48px;\n  font-size: 24px;\n  color: white;\n  text-align: center;\n  line-height: 50px;\n  vertical-align: top;\n  background: rgba(0,0,0,0.5);\n  transform: translateY(-25px);\n  user-select: none;\n  cursor: pointer;\n}\n#mask_layer .arrow:hover {\n  opacity: 0.7;\n}\n#mask_layer .arrow-left {\n  left: 0px;\n  right: auto;\n}\n#mask_layer .arrow-right {\n  left: auto;\n  right: 0px;\n}\n.hidden {\n\tdisplay: none;\n}\n.fade-in-anime {\n\tanimation: fade-in 0.5s;\n  \tz-index: 2;\n}\n.fade-out-anime {\n\tanimation: fade-out 0.5s;\n\tanimation-fill-mode: forwards;\n}\n@keyframes fade-in {\n  from {\n  \topacity: 0;\n  \tz-index: 2;\n  }\n  to {\n  \topacity: 1;\n  \tz-index: 2;\n  }\n}\n@keyframes fade-out {\n  0% {\n  \topacity: 1;\n  \tz-index: 2;\n  }\n  99% {\n  \topacity: 0;\n  \tz-index: 2;\n  }\n  100% {\n  \topacity: 0;\n  \tz-index: -1;\n  }\n}\n",e.querySelector("head").appendChild(n),e.querySelector("body").appendChild(o),e.querySelector("#mask_child").onclick=function(){e.querySelector("#mask_layer").className="fade-out-anime"};for(var r=0;r<t.length;r++)d(t[r][0],t[r][1],r);function d(t,n,o){for(var r=e.querySelectorAll(t),i=0;i<r.length;i++){var d=r[i].parentNode,l=d.parentNode;"A"!=d.nodeName&&"A"!=l.nodeName&&(r[i].className=r[i].className+" zoomable",r[i].setAttribute("data-zoom-group-index",o+"-"+i),r[i].onclick=function(){e.querySelector("#mask_child").style.backgroundImage=n?"url("+this.src+")":this.style.backgroundImage,e.querySelector("#mask_layer").className="fade-in-anime"})}}}},203:function(t,e){t.exports=function(t){var e,n,o=window,r=document;e="https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.css",(n=r.createElement("link")).rel="stylesheet",n.href=e,r.querySelector("head").appendChild(n),function(t){var s=r.createElement("script");s.src=t,r.querySelector("body").appendChild(s)}("https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.js"),function e(){if(o.iDisqus){new iDisqus(t,{forum:"houzhenni-com",api:"https://hzn-website.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:1,timeout:3e3,init:!0,autoCreate:!1});return}setTimeout(e,200)}()}},207:function(t,e,n){var content=n(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("a41e302e",content,!0,{sourceMap:!1})},208:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("4a4db84f",content,!0,{sourceMap:!1})},209:function(t,e,n){var content=n(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("77be9cd2",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";n(207)},222:function(t,e,n){(e=n(69)(!1)).push([t.i,".desk-unit{margin:0 0 10px;padding:0 0 10px;border-top:2px solid hsla(0,0%,75.3%,.4);display:flex;justify-content:flex-start}.desk-unit .author{padding:16px 0;font-size:24px;font-weight:700}.desk-unit .time{margin-left:10px;color:silver}.desk-unit .content p{text-align:justify}.desk-unit .share{font-size:24px}.desk-unit .share .media{margin-right:10px;text-align:center;background:hsla(0,0%,75.3%,.4);cursor:pointer}.desk-unit .share .media:hover{background:hsla(0,0%,75.3%,.2);transition:background .5s}.desk-unit .share .media a{padding:10px;width:100%;height:100%;color:inherit;display:block}.desk-unit .media.heart{padding:10px}.main-color{color:#182b54}.txt-red{color:red}.desk-unit .picture{display:flex;flex-wrap:wrap}.desk-unit .picture .img{width:33%;padding:4px}.desk-unit .picture .img img{width:100%}@media (max-width:425px){.desk-unit .author{font-size:18px}.desk-unit .time{margin-left:0;display:block}}",""]),t.exports=e},223:function(t,e,n){"use strict";n(208)},224:function(t,e,n){(e=n(69)(!1)).push([t.i,".comment-btn{position:fixed;right:20px;bottom:90px;padding-left:6px;width:38px;height:38px;font-size:24px;color:grey;background-color:#f9f9f9;border:1px solid grey;border-radius:3px;cursor:pointer;opacity:.6;transition:opacity .3s;display:none}.desk-comment-btn{display:block}@media (max-width:768px){.comment-btn{display:block}}.comment-btn:hover{opacity:1}.comment-btn-hidden{opacity:0;display:none}",""]),t.exports=e},225:function(t,e,n){"use strict";n(209)},226:function(t,e,n){(e=n(69)(!1)).push([t.i,"*{box-sizing:border-box}.main-color{color:#182b54;border-color:#182b54}.main-color-bg{background:#182b54}.desk-wrap{margin:0;padding:10px 0;min-height:calc(100vh - 169px);display:flex;justify-content:space-between}.desk-main{margin:0 10px 10px 0;width:66%}.desk-side{margin:10px 0 10px 20px;width:30%}.desk-main .banner{margin:20px auto 60px;width:480px;text-align:center;font-weight:700}.desk-main .banner .upper{font-size:24px;display:flex;justify-content:space-between}.desk-main .banner .upper .left{border-top:8px solid;border-left:8px solid;border-top-left-radius:8px;flex-grow:1;transform:translateY(12px)}.desk-main .banner .upper .right{border-top:8px solid;border-right:8px solid;border-top-right-radius:8px;flex-grow:1;transform:translateY(12px)}.desk-main .banner .lower{padding:10px;font-size:40px;border-left:8px solid;border-right:8px solid;border-bottom:8px solid}#my-info{position:relative}#my-info .pic{margin:10px auto;width:200px;height:200px;padding:4px;background:#fff;border:1px solid;border-radius:100%}#my-info .pic img{width:100%;display:block}#my-info .intro{padding:16px 10px;font-size:15px;font-weight:700;text-align:justify;background:hsla(0,0%,75.3%,.4)}.desk-side .support{text-align:center}.desk-side .support a{padding:10px 0;text-decoration:none;color:#fff;display:block}.side-unit{background:#fff;border-radius:5px}@media (max-width:768px){.desk-wrap{padding:10px;width:100%}.desk-main .banner{margin:0 auto 30px;width:100%;font-size:18px}.side-unit{border:1px solid silver}}@media (max-width:425px){.desk-wrap{flex-wrap:wrap}.desk-main{margin:0;width:100%}.desk-side{margin:10px auto;width:100%}.side-unit{border:1px solid silver}}",""]),t.exports=e},262:function(t,e,n){"use strict";n.r(e);var o=n(65),r=(n(32),n(5)),d={data:function(){return{isRed:!1}},props:{url:{type:String,required:!0},author:{type:String,required:!0},id:{type:String,required:!0},time:{type:String,required:!0},content:{type:Array,required:!0},picture:{type:Array},link:{type:Array}},methods:{redHeart:function(){this.isRed=!0}}},l=(n(221),n(2)),c=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desk-unit"},[n("div",{staticClass:"share main-color"},[n("div",{staticClass:"media"},[n("a",{attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u="+t.url}},[n("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),n("div",{staticClass:"media"},[n("a",{attrs:{target:"_blank",href:"http://twitter.com/share?url="+t.url}},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("div",{staticClass:"media heart",class:{"txt-red":t.isRed},on:{click:t.redHeart}},[n("i",{staticClass:"fa fa-heart"})])]),t._v(" "),n("div",[n("div",[n("span",{staticClass:"author main-color"},[t._v(t._s(t.author))]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.time))])]),t._v(" "),n("div",{staticClass:"content"},t._l(t.content,(function(p,i){return n("p",{key:"p"+i},[t._v("\n          "+t._s(p)+"\n        ")])})),0),t._v(" "),t.link?n("div",{staticClass:"link"},t._l(t.link,(function(e,i){return n("p",{key:"link"+i},[n("a",{attrs:{target:"_blank",href:e.href}},[t._v(t._s(e.text)),n("i",{staticClass:"fa fa-external-link"})])])})),0):t._e(),t._v(" "),t.picture?n("div",{staticClass:"picture"},t._l(t.picture,(function(t,i){return n("div",{key:"pic"+i,staticClass:"img"},[n("img",{attrs:{src:t}})])})),0):t._e()])])}),[],!1,null,null,null).exports,m=n(194),f={name:"Comment-Button",data:function(){return{isHidden:!0}},props:{isDesk:{type:Boolean}},mounted:function(){var t,e=this;(t=window).addEventListener("scroll",(function(){t.scrollY>199?e.isHidden=!1:e.isHidden=!0}))}},h=(n(223),Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment-btn",class:{"desk-comment-btn":this.isDesk,"comment-btn-hidden":this.isHidden}},[e("i",{staticClass:"fa fa-commenting",staticStyle:{transform:"translateY(-2px)"}})])}),[],!1,null,null,null).exports),x=n(202),k=n.n(x),v=n(203),w=n.n(v),y={layout:"page",asyncData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,d,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e,n.next=3,t.$content("desk").fetch();case 3:for(r=n.sent,d=[],i=0;i<r.length;i++)d=[].concat(Object(o.a)(d),Object(o.a)(r[i].posts));return d=d.reverse(),n.abrupt("return",{posts:d});case 8:case"end":return n.stop()}}),n)})))()},components:{DeskPost:c,SideNav:m.a,CommentButton:h},mounted:function(){var t=this;t.$nextTick((function(){function e(){var e=document.querySelectorAll(".loadCommentBtn")[0];e&&e.offsetTop<=window.innerHeight+document.documentElement.scrollTop&&t.loadDisqus()}var n,o,r;k()([[".desk-unit img",!0]]),e(),window.onscroll=(n=200,o=e,r=0,function(){var t=new Date;t-r>n&&(o(),r=t)})}))},methods:{toggleSideNav:function(){this.$refs.SideNav.toggle()},loadDisqus:function(){document.getElementById("comment").innerHTML="",w()("comment")}},head:function(){return{title:"From the desk of Jenny HOU",meta:[{hid:"description",name:"description",content:"A one-person twitter inspired from the desk of US former president Donald J. Trump"}]}}},_=(n(225),Object(l.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[n("div",{staticClass:"desk-wrap"},[n("main",{staticClass:"desk-main"},[t._m(0),t._v(" "),t._l(t.posts,(function(t){return n("DeskPost",{key:t.id,attrs:{url:"https://www.houzhenni.com/desk",author:"Zhenni J. HOU",id:t.id,time:t.time,content:t.content,link:t.link,picture:t.picture}})}))],2),t._v(" "),n("aside",{staticClass:"desk-side"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v(" ")]),t._v(" "),n("SideNav",{ref:"SideNav",staticClass:"side-unit"},[n("div",{attrs:{id:"comment"}},[n("div",{staticClass:"loadCommentBtn"},[n("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t          加载评论\n\t\t        ")])])]),t._v(" "),n("CommentButton",{attrs:{isDesk:!1},nativeOn:{click:function(e){return t.toggleSideNav(e)}}})],1)]),t._v(" "),n("h3",{staticStyle:{"text-align":"center"}},[t._v('Disclaimer: This page is inspired by "From the desk of Donald J. Trump" application, but I did not copy a single code from his page.')])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner main-color"},[e("div",{staticClass:"upper"},[e("span",{staticClass:"left"}),this._v(" "),e("span",[this._v("  FROM THE DESK OF  ")]),this._v(" "),e("span",{staticClass:"right"})]),this._v(" "),e("div",{staticClass:"lower"},[this._v("\n            ZHENNI J. HOU\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-color",attrs:{id:"my-info"}},[e("div",{staticClass:"silver-bg"}),this._v(" "),e("div",{staticClass:"pic"},[e("img",{attrs:{src:"https://www.houzhenni.com/img/mypic.png"}})]),this._v(" "),e("div",{staticClass:"intro"},[this._v("\n            自学前端开发，专业电商运营，熟练掌握 PS 和 Excel 的 72 种用法，欢迎来我的小站玩耍~\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"support main-color-bg"},[e("a",{attrs:{target:"_blank",href:"https://afdian.net/@c53hzn"}},[this._v("支持我")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("原版“办公桌”应用: "),e("a",{attrs:{target:"_blank",href:"https://www.donaldjtrump.com/desk"}},[this._v("https://www.donaldjtrump.com/desk")])])}],!1,null,null,null));e.default=_.exports}}]);