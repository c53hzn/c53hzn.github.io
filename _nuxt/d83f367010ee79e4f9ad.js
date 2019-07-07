(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(t,e,r){var content=r(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("1bd5369a",content,!0,{sourceMap:!1})},172:function(t,e,r){"use strict";var n=r(165);r.n(n).a},173:function(t,e,r){(t.exports=r(63)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:20px 10px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.blog-gallery-unit{width:100%}}",""])},175:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("36873827",content,!0,{sourceMap:!1})},176:function(t,e,r){"use strict";var n={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},o=(r(172),r(5)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-gallery"},t._l(t.blogList,function(e,n){return r("div",{key:n,staticClass:"blog-gallery-unit"},[r("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+e.slug,title:e.description}},[r("div",{staticClass:"blog-gallery-inner"},[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"blog-date align-left"},[r("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),r("p",{staticClass:"align-left"},[r("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"align-left"},t._l(e.tags,function(e,n){return r("span",{key:"tag"+n,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])])])])}),0)},[],!1,null,null,null);e.a=component.exports},191:function(t,e,r){"use strict";var n=r(175);r.n(n).a},192:function(t,e,r){(t.exports=r(63)(!1)).push([t.i,".index-wrap{width:100%;min-height:calc(100vh - 160px);text-align:center;display:flex;flex-direction:column;justify-content:center}#my-info{margin-bottom:-170px;padding:20px;color:#fff;background:#333}#my-info img{border:3px solid #fff;border-radius:50%}.my-info-placeholder{height:160px}.pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit{position:relative;margin:20px 10px 0;padding:20px;width:22%;height:200px;background-size:cover;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-text{position:absolute;left:0;bottom:0;width:100%;background:silver;-webkit-transform:translateY(100%);transform:translateY(100%);transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.pic-showcase-unit:hover>.pic-showcase-text{-webkit-transform:translateY(0);transform:translateY(0)}.read-more{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:180px;text-align:center;color:grey;border:1px solid grey;border-radius:5px;cursor:pointer}.read-more:hover{color:#000;border-color:#000}.read-more p{margin:0;padding-top:16px;padding-bottom:16px}@media (max-width:425px){#my-info{margin-bottom:0;height:auto}.my-info-placeholder{height:0}.pic-showcase-unit{width:100%}.pic-showcase-text{-webkit-transform:translateY(0);transform:translateY(0)}.read-more{width:140px}}",""])},198:function(t,e,r){"use strict";r.r(e);r(32),r(19),r(66);var n=r(65),o=r.n(n),l={layout:"home",components:{BlogGallery:r(176).a},asyncData:function(t){return o.a.get("http://127.0.0.1:4000").then(function(e){for(var r=e.data.blogs.slice(0,6).map(function(a){return a.slug}),n=[],i=0;i<r.length;i++){var l=o.a.get("http://127.0.0.1:4000?slug="+r[i]).then(function(t){return delete t.data.content,t.data.date=t.data.slug.substring(0,10),t.data});n.push(l)}return Promise.all(n).then(function(e){return{showcase_pics:["/img/home/resume01.png","/img/home/resume02.png","/img/home/resume03.png","/img/home/resume04.png"],blogList:e,baseURL:t.app.router.options.base,homepage_desc:"懂一点电商，会一点前端，然而本质上还是个死宅~"}})})},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:this.homepage_desc}]}}},c=(r(191),r(5)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-wrap"},[r("section",{attrs:{id:"my-info"}},[r("img",{attrs:{src:"/img/mypic.png"}}),t._v(" "),r("p",[t._v(t._s(t.homepage_desc))]),t._v(" "),r("div",{staticClass:"my-info-placeholder"})]),t._v(" "),r("section",{staticClass:"main-content"},[t._m(0),t._v(" "),r("BlogGallery",{attrs:{blogList:t.blogList,baseURL:t.baseURL}}),t._v(" "),t._m(1)],1),t._v(" "),r("section",{staticClass:"main-content"},[t._m(2),t._v(" "),r("div",{staticClass:"pic-showcase"},t._l(t.showcase_pics,function(e,n){return r("div",{key:"showcasepic"+n,staticClass:"pic-showcase-unit",style:{backgroundImage:"url("+e+")"}},[r("div",{staticClass:"pic-showcase-text"},[r("p",[t._v("设计"+t._s(n+1))])])])}),0),t._v(" "),t._m(3)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticStyle:{"border-bottom":"2px solid black"}},[this._v("最新文章")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"read-more"},[e("a",{staticClass:"no-decor-link",attrs:{href:"/blogs"}},[e("p",[this._v("查看全部")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticStyle:{"border-bottom":"2px solid black"}},[this._v("我的简历")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"read-more"},[e("a",{staticClass:"no-decor-link",attrs:{href:"/resume"}},[e("p",[this._v("查看全部")])])])}],!1,null,null,null);e.default=component.exports}}]);