(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(t,e,o){var content=o(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("1da8fc0f",content,!0,{sourceMap:!1})},205:function(t,e,o){"use strict";o(204)},206:function(t,e,o){var n=o(60)(!1);n.push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:45%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-unit-2{margin:0 10px 20px}.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-2{width:44%}.pic-showcase-unit-3{margin:0 10px 10px;width:45%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:22%}}@media (max-width:539px){.pic-showcase-unit-2{margin:0 5px 10px;width:100%}.pic-showcase-unit-3{margin:0 5px 10px;width:47%}.pic-showcase-unit-4{margin-left:5px;margin-right:5px;width:46%}.mobile-hidden{display:none}}@media (max-width:425px){.pic-showcase-unit-3{width:48%}}",""]),t.exports=n},207:function(t,e,o){"use strict";var n={name:"Pic-Showcase",data:function(){for(var t=this,e=t.pic_showcase_pics,o=[],i=0;i<e.length;i++){var n="";n="below"==t.txt_pos?"pic-showcase-unit-"+t.column+" h-auto":"pic-showcase-unit-"+t.column+" h-300","enabled"!=t.isNeedFeat||e[i].feat||(n+=" mobile-hidden"),o.push(n)}return{picClass:o,linkTarget:t.newWindow?1==t.newWindow?"_blank":"":"_blank"}},props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0},isNeedFeat:{type:String},newWindow:{type:String}}},r=(o(205),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,n){return o("div",{key:"showcasepic"+n,class:t.picClass[n]},[o("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{attrs:{href:e.link,title:e.title,target:t.linkTarget}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,o){"use strict";o.r(e);o(22),o(9),o(43),o(42);var n=o(3),r={layout:"page",components:{PicShowcase:o(207).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,c,l,h,d,w,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog-language-language").fetch();case 2:return o=e.sent,n=t.params.language,e.next=6,t.$content("blog").where({language:n}).sortBy("date","desc").only(["title","slug","date","language"]).fetch();case 6:for(r=e.sent,c={},l=[],h=0;h<r.length;h++)d=r[h].date.substring(0,4),c[d]||(c[d]=[]),c[d].push(r[h]);for(w=Object.keys(c),f=0;f<w.length;f++)l.push(c[w[w.length-1-f]]);return e.abrupt("return",{blog_by_year:l,baseURL:t.app.router.options.base,langName:t.params.language,ui_zh:o.ui_zh,ui_en:o.ui_en});case 13:case"end":return e.stop()}}),e)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},mounted:function(){},head:function(){return{title:this.langName,meta:[{hid:"description",name:"description",content:"Blogs under "+this.langName}]}}},c=o(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("h1",[t._v("\n      "+t._s(t.ui_str.language)+": "+t._s(t.langName)+"\n    ")]),t._v(" "),o("p",[o("a",{attrs:{href:"/blog/language"}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_language))])]),t._v(" "),o("a",{attrs:{href:t.baseURL+"blog"}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_posts))])])]),t._v(" "),t._l(t.blog_by_year,(function(e,n){return o("div",{key:n},[o("h2",{staticStyle:{"margin-bottom":"0px"}},[t._v("\n        "+t._s(e[0].date.substring(0,4))+"("+t._s(e.length)+")\n      ")]),t._v(" "),t._l(e,(function(e,n){return o("p",{key:n},[o("span",{staticClass:"blog-date"},[t._v(t._s(e.date.substring(0,10))+" ")]),t._v(" "),o("a",{staticClass:"blog-link",attrs:{href:t.baseURL+"blog/"+e.slug}},[t._v("\n\t       "+t._s(e.title)+"\n\t      ")])])}))],2)})),t._v(" "),o("p",[t._v(" ")])],2)}),[],!1,null,null,null);e.default=component.exports}}]);