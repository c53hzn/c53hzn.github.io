(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(t,e,o){var content=o(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("1da8fc0f",content,!0,{sourceMap:!1})},195:function(t,e,o){"use strict";o(194)},196:function(t,e,o){(e=o(32)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:45%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-unit-2{margin:0 10px 20px}.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-2{width:44%}.pic-showcase-unit-3{margin:0 10px 10px;width:45%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:22%}}@media (max-width:539px){.pic-showcase-unit-2{margin:0 5px 10px;width:100%}.pic-showcase-unit-3{margin:0 5px 10px;width:47%}.pic-showcase-unit-4{margin-left:5px;margin-right:5px;width:46%}.mobile-hidden{display:none}}@media (max-width:425px){.pic-showcase-unit-3{width:48%}}",""]),t.exports=e},197:function(t,e,o){"use strict";var n={name:"Pic-Showcase",data:function(){for(var t=this.pic_showcase_pics,e=[],i=0;i<t.length;i++){var o="";o="below"==this.txt_pos?"pic-showcase-unit-"+this.column+" h-auto":"pic-showcase-unit-"+this.column+" h-300","enabled"!=this.isNeedFeat||t[i].feat||(o+=" mobile-hidden"),e.push(o)}return{picClass:e,linkTarget:this.newWindow?1==this.newWindow?"_blank":"":"_blank"}},props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0},isNeedFeat:{type:String},newWindow:{type:String}}},r=(o(195),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,n){return o("div",{key:"showcasepic"+n,class:t.picClass[n]},[o("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{attrs:{href:e.link,title:e.title,target:t.linkTarget}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},210:function(t,e,o){var content=o(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("f28bdea2",content,!0,{sourceMap:!1})},211:function(t,e,o){"use strict";o(210)},212:function(t,e,o){(e=o(32)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 20px 0;width:46%;background:#fff;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:nth-child(2n-1){margin-left:0}.blog-gallery-unit:nth-child(2n){margin-right:0}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Noto Sans SC,sans-serif;line-height:20px;border-radius:999px;background:grey;display:inline-block}.blog-gallery-lang{display:inline-block;width:60px;font-size:14px;text-align:center;color:grey;border:1px solid silver;border-radius:4px}@media (max-width:768px){.blog-gallery-unit:nth-child(2n-1){margin-right:15px}.blog-gallery-unit:nth-child(2n){margin-left:15px}}@media (max-width:425px){.blog-gallery-unit{margin:20px 0 0;width:100%}.blog-gallery-unit:nth-child(2n-1){margin-right:0}.blog-gallery-unit:nth-child(2n){margin-left:0}}.col-1{margin:10px auto;width:98%}.col-1:first-child,.col-1:nth-child(2){margin-top:10px}.col-1:nth-child(2n),.col-1:nth-child(2n-1){margin:10px}.col-1 .desc-tag{display:none}@media (max-width:768px){.col-1{width:44%}.col-1:nth-child(2n-1){margin-right:15px}.col-1:nth-child(2n){margin-left:15px}.col-1 .desc-tag{display:block}}@media (max-width:425px){.col-1{margin:20px 0 0;width:100%}.col-1:first-child,.col-1:nth-child(2){margin-top:10px}.col-1:nth-child(2n),.col-1:nth-child(2n-1){margin:10px}}",""]),t.exports=e},213:function(t,e,o){"use strict";var n={name:"Blog-Gallery",props:{blogList:{type:Array,required:!0},col:{type:String}}},r=(o(211),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-gallery"},t._l(t.blogList,(function(e,n){return o("div",{key:n,staticClass:"blog-gallery-unit",class:{"col-1":1==t.col}},[o("a",{staticClass:"no-decor-link",attrs:{href:"/blog/"+e.slug,title:e.description}},[o("div",{staticClass:"blog-gallery-inner align-left"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",[o("span",{staticClass:"blog-date"},[o("i",{staticClass:"fa fa-calendar"}),t._v("\n               "+t._s(e.date.substring(0,10))+"\n            ")]),t._v(" "),o("span",{staticClass:"blog-gallery-lang"},[t._v("\n              "+t._s(e.language)+"\n            ")])]),t._v(" "),o("p",{staticClass:"desc-tag align-left"},[o("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"align-left"},t._l(e.tags,(function(e,n){return o("span",{key:"tag"+n,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])])])})),0)}),[],!1,null,null,null);e.a=component.exports},224:function(t,e,o){var content=o(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("6759f5ab",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";o(224)},248:function(t,e,o){(e=o(32)(!1)).push([t.i,"*{position:relative}.bg-bg{top:-40px;left:0;height:500px}.bg-bg,.bg-img{position:absolute;width:100%}.bg-img{height:100%;background-position:50%;background-size:cover}.bg-overlay{width:100%;height:100%;background:rgba(0,0,0,.7)}#my-info{padding-top:40px;color:#fff}#my-info img{border:3px solid #fff;border-radius:50%}.read-more{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:180px;text-align:center;color:grey;border:1px solid grey;border-radius:5px;cursor:pointer}.read-more:hover{color:#000;border-color:#000}.read-more p{margin:0;padding-top:16px;padding-bottom:16px}@media (max-width:1080px){#my-info{padding-bottom:40px}}@media (max-width:425px){.bg-bg{height:440px}#my-info p{margin-left:20px;margin-right:20px}.my-info-placeholder{height:0}.read-more{width:140px}}",""]),t.exports=e},271:function(t,e,o){"use strict";o.r(e);o(34);var n=o(5),r=o(213),l=o(197),c={layout:"home",components:{BlogGallery:r.a,PicShowcase:l.a},asyncData:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,i,l,c,h,d,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return m=function(img){var t=img.substring(39,45),e=img.substring(46,56),o=img.substring(81,85);return"https://i.etsystatic.com/20529188/c/2000/2000/0/0/il/".concat(t,"/").concat(e,"/il_340x340.").concat(e,"_").concat(o,".jpg")},e,o.next=4,t.$content("blog").sortBy("date","desc").limit(10).only(["title","slug","date","description","tags","language"]).fetch();case 4:for(n=o.sent,r=[],i=0;i<n.length;i++)0==i||n[i].slug!=n[i-1].slug?r.push(n[i]):n[i].updatedAt>n[i-1].updatedAt?r[r.length-1]=n[i]:r[r.length-1]=n[i-1];return o.next=9,t.$content("ui-config").fetch();case 9:return l=o.sent,o.next=12,t.$content("product/etsy").fetch();case 12:return c=o.sent,h=c.body,d=[],h.forEach((function(a){var t={};t.src=m(a.IMAGE1),t.title=a.TITLE,t.link="/store/"+a.SKU,t.feat=1==a.FEATURED,t.tag=a.CURRENCY_CODE+" "+(a.PRICE%1==0?a.PRICE+".00":a.PRICE),d.push(t)})),o.abrupt("return",{blogList:r,cv_pics:l.home.cv_pics,portfolio_zh:l.home.portfolio_zh,portfolio_en:l.home.portfolio_en,baseURL:t.app.router.options.base,etsy_item_list:d,mypic:l.home.mypic,bg_pic:l.home.bg_pic,ui_zh:l.home.ui_zh,ui_en:l.home.ui_en});case 17:case"end":return o.stop()}}),o)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en},portfolio:function(){return"Chi"==this.$store.state.lang.val?this.portfolio_zh:this.portfolio_en}},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:this.ui_str.homepage_desc}]}}},h=(o(247),o(2)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-wrap"},[o("div",{staticClass:"bg-bg"},[o("div",{staticClass:"bg-img",style:{backgroundImage:"url("+t.bg_pic+")"}}),t._v(" "),o("div",{staticClass:"bg-overlay"})]),t._v(" "),o("section",{attrs:{id:"my-info"}},[o("img",{attrs:{src:t.mypic}}),t._v(" "),o("p",{staticStyle:{margin:"0px auto",padding:"20px","max-width":"600px"}},[t._v(t._s(t.ui_str.homepage_desc))])]),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",{staticClass:"align-center"},[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.new_posts))])]),t._v(" "),o("BlogGallery",{attrs:{blogList:t.blogList,baseURL:t.baseURL}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/blog"}},[o("p",[t._v(t._s(t.ui_str.read_more))])])])],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",{staticClass:"align-center"},[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.my_store))])]),t._v(" "),o("PicShowcase",{attrs:{pic_showcase_pics:t.etsy_item_list,column:"4",txt_pos:"below",newWindow:"0"}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/store"}},[o("p",[t._v(t._s(t.ui_str.go_to_store))])])])],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.my_cv))])]),t._v(" "),o("PicShowcase",{attrs:{id:"cv-showcase",pic_showcase_pics:t.cv_pics,column:"4",txt_pos:"bottom"}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/resume"}},[o("p",[t._v(t._s(t.ui_str.read_more))])])])],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.my_portfolio))])]),t._v(" "),o("PicShowcase",{attrs:{pic_showcase_pics:t.portfolio,column:"2",txt_pos:"left"}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/portfolio"}},[o("p",[t._v(t._s(t.ui_str.read_more))])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);