(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(t,e,o){var content=o(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("1da8fc0f",content,!0,{sourceMap:!1})},179:function(t,e,o){var content=o(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("f28bdea2",content,!0,{sourceMap:!1})},180:function(t,e){t.exports=function(t){var e=document,o=e.createElement("style"),n=e.createElement("div");n.id="mask_layer",n.className="hidden",n.innerHTML='<div id="mask_child"></div>',o.innerHTML="\n.zoomable {\n\tcursor: zoom-in;\n}\n#mask_layer {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, .5);\n}\n#mask_child {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tmargin: auto;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tcursor: zoom-out;\n}\n.hidden {\n\tdisplay: none;\n}\n.fade-in-anime {\n\tanimation: fade-in 0.5s;\n  \tz-index: 999;\n}\n.fade-out-anime {\n\tanimation: fade-out 0.5s;\n\tanimation-fill-mode: forwards;\n}\n@keyframes fade-in {\n  from {\n  \topacity: 0;\n  \tz-index: 999;\n  }\n  to {\n  \topacity: 1;\n  \tz-index: 999;\n  }\n}\n@keyframes fade-out {\n  0% {\n  \topacity: 1;\n  \tz-index: 999;\n  }\n  99% {\n  \topacity: 0;\n  \tz-index: 999;\n  }\n  100% {\n  \topacity: 0;\n  \tz-index: -1;\n  }\n}\n",e.querySelector("head").appendChild(o),e.querySelector("body").appendChild(n),e.querySelector("#mask_layer").onclick=function(){this.className="fade-out-anime"};for(var l=0;l<t.length;l++)r(t[l][0],t[l][1]);function r(t,o){for(var n=e.querySelectorAll(t),i=0;i<n.length;i++){var l=n[i].parentNode,r=l.parentNode;if("A"!=l.nodeName&&"A"!=r.nodeName){var c=""==n[i].className?"":n[i].className+" ";n[i].className=c+"zoomable",n[i].onclick=function(){e.querySelector("#mask_child").style.backgroundImage=o?"url("+this.src+")":this.style.backgroundImage,e.querySelector("#mask_layer").className="fade-in-anime"}}}}}},182:function(t,e,o){"use strict";var n=o(178);o.n(n).a},183:function(t,e,o){(e=o(79)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2{margin:20px;width:46%}.pic-showcase-unit-2,.pic-showcase-unit-4{position:relative;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-4{margin:20px 10px 0;width:22%}.pic-showcase-unit-2:nth-child(2n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-left:0}.pic-showcase-unit-2:nth-child(2n),.pic-showcase-unit-4:nth-child(4n){margin-right:0}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.h-200{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom,.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-title{margin:0 auto;padding:16px 0;width:80%;text-align:center}.pic-showcase-title span.title{line-height:21px;max-height:108px;display:block;overflow:hidden}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.h-auto{height:auto}}@media (max-width:539px){.pic-showcase-unit-2,.pic-showcase-unit-4{margin-left:0;margin-right:0;width:100%}}",""]),t.exports=e},190:function(t,e,o){"use strict";var n=o(179);o.n(n).a},191:function(t,e,o){(e=o(79)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 20px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:nth-child(2n-1){margin-left:0}.blog-gallery-unit:nth-child(2n){margin-right:0}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.blog-gallery-unit{margin:20px 0 0;width:100%}}",""]),t.exports=e},193:function(t,e,o){var content=o(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("6759f5ab",content,!0,{sourceMap:!1})},194:function(t,e,o){"use strict";var n={name:"Blog-Gallery",props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},l=(o(190),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-gallery"},t._l(t.blogList,(function(e,n){return o("div",{key:n,staticClass:"blog-gallery-unit"},[o("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blog/"+e.slug,title:e.description}},[o("div",{staticClass:"blog-gallery-inner align-left"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"blog-date"},[o("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),o("p",{staticClass:"align-left"},[o("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"align-left"},t._l(e.tags,(function(e,n){return o("span",{key:"tag"+n,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])])])})),0)}),[],!1,null,null,null);e.a=component.exports},195:function(t,e,o){"use strict";var n={name:"Pic-Showcase",props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0}}},l=(o(182),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,n){return o("div",{key:"showcasepic"+n,class:"below"==t.txt_pos?"pic-showcase-unit-"+t.column+" h-auto":"pic-showcase-unit-"+t.column+" h-300"},[o("div",{staticClass:"pic-showcase-bg",class:"below"==t.txt_pos?4==t.column?"h-200 pos-relative":"h-300 pos-relative":"h-full pos-absolute",style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{staticStyle:{"font-weight":"bold"},attrs:{href:e.link,title:e.title,target:"_blank"}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},212:function(t,e,o){"use strict";var n=o(193);o.n(n).a},213:function(t,e,o){(e=o(79)(!1)).push([t.i,"*{position:relative}.index-wrap{width:100%;min-height:calc(100vh - 160px);text-align:center;display:flex;flex-direction:column;justify-content:center}.bg-bg{top:-40px;left:0;height:500px}.bg-bg,.bg-img{position:absolute;width:100%}.bg-img{height:100%;background-position:50%;background-size:cover}.bg-overlay{width:100%;height:100%;background:rgba(0,0,0,.7)}#my-info{padding-top:40px;color:#fff}#my-info img{border:3px solid #fff;border-radius:50%}.read-more{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:180px;text-align:center;color:grey;border:1px solid grey;border-radius:5px;cursor:pointer}.read-more:hover{color:#000;border-color:#000}.read-more p{margin:0;padding-top:16px;padding-bottom:16px}@media (max-width:1080px){#my-info{padding-bottom:40px}}@media (max-width:425px){.bg-bg{height:440px}#my-info p{margin-left:20px;margin-right:20px}.my-info-placeholder{height:0}.read-more{width:140px}}",""]),t.exports=e},219:function(t,e,o){"use strict";o.r(e);o(18),o(11),o(26);var n=o(81),l=o.n(n),r=o(194),c=o(195),d=o(180),h=o.n(d),m={layout:"home",components:{BlogGallery:r.a,PicShowcase:c.a},asyncData:function(t){return l.a.get("http://127.0.0.1:4000/blog").then((function(e){for(var o=e.data.blogs.slice(0,10).map((function(a){return a.slug})),n=[],i=0;i<o.length;i++){var r=l.a.get("http://127.0.0.1:4000/blog?slug="+o[i]).then((function(t){return delete t.data.content,t.data}));n.push(r)}return Promise.all(n).then((function(e){return{cv_pics:[{src:"/img/home/resume01.png",title:"Design 1"},{src:"/img/home/resume02.png",title:"Design 2"},{src:"/img/home/resume03.png",title:"Design 3"},{src:"/img/home/resume04.png",title:"Design 4"}],portfolio_zh:[{src:"/img/portfolio/portfolio01.png",title:"Markdown编辑器",link:"https://codepen.io/c53hzn/full/YzzRzxR"},{src:"/img/portfolio/portfolio02.png",title:"产品落地页",link:"https://codepen.io/c53hzn/full/vaevqP"},{src:"/img/portfolio/portfolio03.png",title:"eBay刊登专用图片检查工具",link:"https://codepen.io/c53hzn/full/bMjVLe"},{src:"/img/portfolio/portfolio04.png",title:"技术文档页面<br>CSS形状指南",link:"https://codepen.io/c53hzn/full/gjXwdE"}],portfolio_en:[{src:"/img/portfolio/portfolio01.png",title:"Markdown editor",link:"https://codepen.io/c53hzn/full/YzzRzxR"},{src:"/img/portfolio/portfolio02.png",title:"Product Landing Page",link:"https://codepen.io/c53hzn/full/vaevqP"},{src:"/img/portfolio/portfolio03.png",title:"Image size checker for eBay",link:"https://codepen.io/c53hzn/full/bMjVLe"},{src:"/img/portfolio/portfolio04.png",title:"Technical Documentation Page<br>CSS shape guide",link:"https://codepen.io/c53hzn/full/gjXwdE"}],blogList:e,baseURL:t.app.router.options.base,mypic:"/img/mypic.png",bg_pic:"/img/home/bg-2.jpg",ui_zh:{homepage_desc:"自学前端开发，专业电商运营，熟练掌握Photoshop和Excel的72种用法，欢迎来我的小站玩耍~",read_more:"查看全部",cv_design:"设计",new_posts:"最新文章",my_cv:"我的简历",my_portfolio:"我的作品",etsy_items_onsale:"我的Etsy在售产品"},ui_en:{homepage_desc:"Self-taught Front-End developer, experienced E-Commerce specialist, expert in Photoshop and Excel. Welcome to my blog~",read_more:"Read More",cv_design:"Design",new_posts:"Latest Posts",my_cv:"My Resume",my_portfolio:"My Portfolio",etsy_items_onsale:"My Etsy listings on sale"},etsy_item_list:[{src:"/img/etsy/etsy01.jpg",title:"2021 annual calendar | editable multi year color selection excel template | 7-color two-column | printable PDF xlsx instant download",link:"https://www.etsy.com/listing/939749315",tag:"Digital"},{src:"/img/etsy/etsy02.jpg",title:"2021 weekly schedule planner | 3 types simple to-do list checklist calendar | printable PDF editable excel template instant download",link:"https://www.etsy.com/listing/939707561",tag:"Digital"},{src:"/img/etsy/etsy03.jpg",title:"2021 monthly calendar weekly schedule planner | multi year multi color simple calendar | printable PDF with editable excel template download",link:"https://www.etsy.com/listing/939397411",tag:"Digital"},{src:"/img/etsy/etsy04.jpg",title:"100 day challenge planner minimalist | simple calendar | goal progress tracker | schedule A4 printable PDF download",link:"https://www.etsy.com/listing/925324268",tag:"Digital"},{src:"/img/etsy/etsy05.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"https://www.etsy.com/listing/928907974",tag:"Digital"}]}}))}))},computed:{ui_str:{get:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en},set:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},portfolio:{get:function(){return"Chi"==this.$store.state.lang.val?this.portfolio_zh:this.portfolio_en},set:function(){return"Chi"==this.$store.state.lang.val?this.portfolio_zh:this.portfolio_en}}},mounted:function(){h()([["#cv-showcase .pic-showcase-unit-4 .pic-showcase-bg",!1]])},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:this.ui_str.homepage_desc}]}}},f=(o(212),o(3)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index-wrap"},[o("div",{staticClass:"bg-bg"},[o("div",{staticClass:"bg-img",style:{backgroundImage:"url("+t.bg_pic+")"}}),t._v(" "),o("div",{staticClass:"bg-overlay"})]),t._v(" "),o("section",{attrs:{id:"my-info"}},[o("img",{attrs:{src:t.mypic}}),t._v(" "),o("p",{staticStyle:{margin:"0px auto",padding:"20px","max-width":"600px"}},[t._v(t._s(t.ui_str.homepage_desc))])]),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",{staticClass:"align-center"},[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.new_posts))])]),t._v(" "),o("BlogGallery",{attrs:{blogList:t.blogList,baseURL:t.baseURL}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/blog"}},[o("p",[t._v(t._s(t.ui_str.read_more))])])])],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",{staticClass:"align-center"},[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.etsy_items_onsale))])]),t._v(" "),o("PicShowcase",{attrs:{pic_showcase_pics:t.etsy_item_list,column:"4",txt_pos:"below"}})],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.my_cv))])]),t._v(" "),o("PicShowcase",{attrs:{id:"cv-showcase",pic_showcase_pics:t.cv_pics,column:"4",txt_pos:"bottom"}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/resume"}},[o("p",[t._v(t._s(t.ui_str.read_more))])])])],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h3",[o("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.my_portfolio))])]),t._v(" "),o("PicShowcase",{attrs:{pic_showcase_pics:t.portfolio,column:"2",txt_pos:"left"}}),t._v(" "),o("div",{staticClass:"read-more"},[o("a",{staticClass:"no-decor-link",attrs:{href:"/portfolio"}},[o("p",[t._v(t._s(t.ui_str.read_more))])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);