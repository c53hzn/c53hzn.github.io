(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("1da8fc0f",content,!0,{sourceMap:!1})},199:function(t,e,n){"use strict";n(198)},200:function(t,e,n){(e=n(75)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:46%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2:nth-child(2n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-left:0}.pic-showcase-unit-2:nth-child(2n),.pic-showcase-unit-4:nth-child(4n){margin-right:0}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.pic-showcase-unit-2:nth-child(2n-1){margin-right:16px}.pic-showcase-unit-2:nth-child(2n){margin-left:16px}.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-3:nth-child(2n-1){margin-left:0;margin-right:15px}.pic-showcase-unit-3:nth-child(2n){margin-left:15px;margin-right:0}.pic-showcase-unit-3{width:46%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:23%}.pic-showcase-unit-4:nth-child(4n-3){margin-left:0;margin-right:0}.pic-showcase-unit-4:nth-child(4n),.pic-showcase-unit-4:nth-child(4n-1),.pic-showcase-unit-4:nth-child(4n-2){margin-left:12px;margin-right:0}}@media (max-width:539px){.pic-showcase-unit-2{width:100%}.pic-showcase-unit-2:nth-child(2n-1){margin-right:0}.pic-showcase-unit-2:nth-child(2n){margin-left:0}.pic-showcase-unit-3{width:48%}.pic-showcase-unit-3:nth-child(2n-1){margin-left:0;margin-right:7px}.pic-showcase-unit-3:nth-child(2n){margin-left:0;margin-right:0}.pic-showcase-unit-4{width:48%}.pic-showcase-unit-4:nth-child(4n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-left:0;margin-right:7px}.pic-showcase-unit-4:nth-child(4n),.pic-showcase-unit-4:nth-child(4n-2){margin-left:0;margin-right:0}}@media (max-width:425px){.pic-showcase-unit-4{width:49%}.pic-showcase-unit-4.h-300{width:48%}.pic-showcase-unit-4:nth-child(4n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-right:5px}}",""]),t.exports=e},201:function(t,e,n){"use strict";var o={name:"Pic-Showcase",props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0}}},c=(n(199),n(4)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,o){return n("div",{key:"showcasepic"+o,class:"below"==t.txt_pos?"pic-showcase-unit-"+t.column+" h-auto":"pic-showcase-unit-"+t.column+" h-300"},[n("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?n("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),n("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?n("div",{staticClass:"pic-showcase-title"},[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?n("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():n("div",{staticClass:"pic-showcase-title"},[n("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?n("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},246:function(t,e,n){"use strict";n.r(e);n(19),n(10),n(46),n(37);var o=n(2),c={layout:"blog",components:{PicShowcase:n(201).a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,h,i,r,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("products/list").fetch();case 2:return n=e.sent,e.next=5,t.$content("blog-language-index").fetch();case 5:return o=e.sent,e.next=8,t.$content("blog").sortBy("date","desc").only(["date","language","title","slug"]).fetch();case 8:for(c=e.sent,h={},i=0;i<c.length;i++)h[c[i].language]?h[c[i].language]++:h[c[i].language]=1;for(r=Object.keys(h),l=[],d=0;d<r.length;d++)l[d]={name:r[d],len:h[r[d]]};return e.abrupt("return",{languages:l,baseURL:t.app.router.options.base,ui_zh:o.ui_zh,ui_en:o.ui_en,etsy_item_list:n.etsy_item_list});case 15:case"end":return e.stop()}}),e)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},mounted:function(){},head:function(){return{title:"Language list",meta:[{hid:"description",name:"description",content:"文章语言列表"}]}}},h=n(4),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[n("h1",[t._v("\n    "+t._s(t.ui_str.lang_list)+"\n    "),n("a",{attrs:{href:t.baseURL+"blog"}},[n("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_posts))])])]),t._v(" "),n("p",t._l(t.languages,(function(e,o){return n("a",{key:o,attrs:{href:t.baseURL+"blog/language/"+e.name}},[n("span",{staticClass:"blog-tag"},[t._v(t._s(e.name)+": "+t._s(e.len))])])})),0),t._v(" "),n("p",[t._v(" ")]),t._v(" "),t._m(0),t._v(" "),n("PicShowcase",{attrs:{pic_showcase_pics:t.etsy_item_list,column:"4",txt_pos:"below"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"align-center"},[e("span",[this._v("Buy a digital product here!")])])}],!1,null,null,null);e.default=component.exports}}]);