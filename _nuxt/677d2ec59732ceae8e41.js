(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(t,e,o){var content=o(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("1da8fc0f",content,!0,{sourceMap:!1})},186:function(t,e,o){"use strict";o(185)},187:function(t,e,o){(e=o(69)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:45%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-unit-2{margin:0 10px 20px}.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-2{width:44%}.pic-showcase-unit-3{margin:0 10px 10px;width:45%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:22%}}@media (max-width:539px){.pic-showcase-unit-2{margin:0 5px 10px;width:100%}.pic-showcase-unit-3{margin:0 5px 10px;width:47%}.pic-showcase-unit-4{margin-left:5px;margin-right:5px;width:46%}.mobile-hidden{display:none}}@media (max-width:425px){.pic-showcase-unit-3{width:48%}}",""]),t.exports=e},188:function(t,e,o){"use strict";var n={name:"Pic-Showcase",data:function(){for(var t=this.pic_showcase_pics,e=[],i=0;i<t.length;i++){var o="";o="below"==this.txt_pos?"pic-showcase-unit-"+this.column+" h-auto":"pic-showcase-unit-"+this.column+" h-300","enabled"!=this.isNeedFeat||t[i].feat||(o+=" mobile-hidden"),e.push(o)}return{picClass:e,linkTarget:this.newWindow?1==this.newWindow?"_blank":"":"_blank"}},props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0},isNeedFeat:{type:String},newWindow:{type:String}}},r=(o(186),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,n){return o("div",{key:"showcasepic"+n,class:t.picClass[n]},[o("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{attrs:{href:e.link,title:e.title,target:t.linkTarget}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},189:function(t,e,o){var content=o(193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("6a62617a",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("0a408f7a",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("cb150022",content,!0,{sourceMap:!1})},192:function(t,e,o){"use strict";o(189)},193:function(t,e,o){(e=o(69)(!1)).push([t.i,"#my-info:hover{border-color:#000}#my-info a{display:block}",""]),t.exports=e},194:function(t,e,o){"use strict";o(190)},195:function(t,e,o){(e=o(69)(!1)).push([t.i,".list-btn{position:fixed;right:20px;bottom:90px;padding-left:6px;width:38px;height:38px;font-size:24px;color:grey;background-color:#f9f9f9;border:1px solid grey;border-radius:3px;cursor:pointer;opacity:.6;transition:opacity .3s;display:none}.desk-list-btn{display:block}@media (max-width:768px){.list-btn{display:block}}.list-btn:hover{opacity:1}.list-btn-hidden{opacity:0;display:none}",""]),t.exports=e},196:function(t,e,o){"use strict";o(191)},197:function(t,e,o){(e=o(69)(!1)).push([t.i,".side-nav .close{position:absolute;top:0;right:8px;font-size:24px;cursor:pointer;display:none}.desk-fix{position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;padding:10px;width:400px;height:400px;display:none}.desk-fix .close{display:block}@media (max-width:768px){.side-nav{position:fixed;top:0;left:0;margin:60px 10px 40px;padding:10px;width:calc(100vw - 20px);height:calc(100vh - 100px);overflow-y:scroll;display:none}.side-nav .close{display:block}}.show{display:block}",""]),t.exports=e},198:function(t,e,o){"use strict";var n={name:"Side-Author",data:function(){return{profile_pic:"/img/mypic.png",ui_zh:{author:"关于作者",profile_desc:"自学前端开发，专业电商运营，熟练掌握Photoshop和Excel的72种用法，欢迎来我的小站玩耍~"},ui_en:{author:"Author",profile_desc:"Self-taught Front-End developer, experienced E-Commerce specialist, expert in Photoshop and Excel. Welcome to my blog~"}}},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}}},r=(o(192),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"my-info"}},[o("a",{staticClass:"no-decor-link",attrs:{href:"/resume"}},[o("div",[t._v(t._s(t.ui_str.author))]),t._v(" "),o("img",{staticStyle:{width:"64px",margin:"10px auto",display:"block"},attrs:{src:t.profile_pic}}),t._v(" "),o("div",[t._v(t._s(t.ui_str.profile_desc))])])])}),[],!1,null,null,null);e.a=component.exports},199:function(t,e,o){"use strict";var n={name:"List-Button",data:function(){return{isHidden:!0}},props:{isDesk:{type:Boolean}},mounted:function(){var t,e=this;(t=window).addEventListener("scroll",(function(){t.scrollY>199?e.isHidden=!1:e.isHidden=!0}))}},r=(o(194),o(2)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list-btn",class:{"desk-list-btn":this.isDesk,"list-btn-hidden":this.isHidden}},[e("i",{staticClass:"fa fa-list-ul"})])}),[],!1,null,null,null);e.a=component.exports},200:function(t,e,o){"use strict";var n={name:"Side-Nav",data:function(){return{isShow:!1}},props:{isDeskFix:{type:Boolean}},methods:{toggle:function(){this.isShow=!this.isShow}}},r=(o(196),o(2)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-nav",class:{show:this.isShow,"desk-fix":!!this.isDeskFix}},[this._t("default"),this._v(" "),e("div",{staticClass:"close",on:{click:this.toggle}},[e("i",{staticClass:"fa fa-window-close-o"})])],2)}),[],!1,null,null,null);e.a=component.exports},260:function(t,e,o){"use strict";o.r(e);o(16),o(10),o(53),o(32);var n=o(5),r=o(188),l=o(198),c=o(199),h=o(200),d={layout:"post",components:{PicShowcase:r.a,ListButton:c.a,SideNav:h.a,SideAuthor:l.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,l,c,h,d,f,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=decodeURI(t.params.tag),e.next=3,t.$content("ui-config").fetch();case 3:return n=e.sent,e.next=6,t.$content("blog").where({tags:{$contains:o}}).sortBy("date","desc").only(["title","slug","date","tags","language","description"]).fetch();case 6:for(r=e.sent,l={},c=[],h=0;h<r.length;h++)d=r[h].date.substring(0,4),l[d]||(l[d]=[]),l[d].push(r[h]);for(f=Object.keys(l),x=0;x<f.length;x++)c.push(l[f[f.length-1-x]]);return e.abrupt("return",{blog_by_year:c,tagName:o,ui_zh:n.blog_tag_tag.ui_zh,ui_en:n.blog_tag_tag.ui_en});case 13:case"end":return e.stop()}}),e)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},methods:{toggleSideNav:function(){this.$refs.SideNav.toggle()}},head:function(){return{title:this.tagName,meta:[{hid:"description",name:"description",content:"Blogs under "+this.tagName}]}}},f=o(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-wrap"},[o("section",{staticClass:"blog-main"},[o("h1",[t._v("\n      "+t._s(t.ui_str.tag)+": "+t._s(t.tagName)+"\n    ")]),t._v(" "),o("p",[o("a",{attrs:{href:"/blog/tag"}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_tags))])]),t._v(" "),o("a",{attrs:{href:"/blog"}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_posts))])])]),t._v(" "),t._l(t.blog_by_year,(function(e,n){return o("div",{key:n},[o("h2",{staticStyle:{"margin-bottom":"0px"},attrs:{id:e[0].date.substring(0,4)+"("+e.length+")"}},[t._v("\n        "+t._s(e[0].date.substring(0,4))+"("+t._s(e.length)+")\n      ")]),t._v(" "),t._l(e,(function(e,n){return o("p",{key:n},[o("span",{staticClass:"blog-date"},[t._v("\n          "+t._s(e.date.substring(0,10))+"\n        ")]),t._v(" "),o("a",{attrs:{href:"/blog/language/"+e.language}},[o("span",{staticClass:"blog-lang"},[t._v(t._s(e.language))])]),t._v(" "),o("a",{staticClass:"blog-link",attrs:{href:"/blog/"+e.slug,title:e.description}},[t._v("\n         "+t._s(e.title)+"\n        ")])])}))],2)}))],2),t._v(" "),o("section",{staticClass:"blog-side"},[o("SideAuthor",{staticClass:"side-unit"}),t._v(" "),o("SideNav",{ref:"SideNav",staticClass:"side-unit"},[o("ul",{staticClass:"year-list"},t._l(t.blog_by_year,(function(e,n){return o("li",{key:n,on:{click:t.toggleSideNav}},[o("a",{attrs:{href:"/blog/tag/"+t.tagName+"#"+e[0].date.substring(0,4)+"("+e.length+")"}},[t._v("\n            "+t._s(e[0].date.substring(0,4))+"("+t._s(e.length)+")\n          ")])])})),0)]),t._v(" "),o("ListButton",{nativeOn:{click:function(e){return t.toggleSideNav(e)}}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);