(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(t,e,o){var content=o(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("1da8fc0f",content,!0,{sourceMap:!1})},179:function(t,e,o){"use strict";var c=o(176);o.n(c).a},180:function(t,e,o){(e=o(77)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2{margin:20px;width:46%}.pic-showcase-unit-2,.pic-showcase-unit-4{position:relative;height:300px;background-size:cover;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-4{margin:20px 10px 0;width:22%}.pic-showcase-unit-2:nth-child(2n-1){margin-left:0}.pic-showcase-unit-2:nth-child(2n){margin-right:0}.pic-showcase-unit-4:nth-child(4n-3){margin-left:0}.pic-showcase-unit-4:nth-child(4n){margin-right:0}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-bottom div{padding:16px 0}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom,.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase a{width:100%;display:block}.pic-showcase-title{width:80%;text-align:center}@media (max-width:1024px){.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}}@media (max-width:425px){.pic-showcase-unit-2,.pic-showcase-unit-4{margin-left:0;margin-right:0;width:100%}}",""]),t.exports=e},192:function(t,e,o){"use strict";var c={name:"Pic-Showcase",props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0}}},n=(o(179),o(4)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,c){return o("div",{key:"showcasepic"+c,class:"pic-showcase-unit-"+t.column,style:{backgroundImage:"url("+e.src+")"}},[o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("a",{attrs:{href:e.link,target:"_blank"}},[o("div",{staticClass:"pic-showcase-title"},[t._v("\n            "+t._s(e.title)+"\n          ")])]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[t._v("\n          "+t._s(e.title)+"\n        ")])])])})),0)}),[],!1,null,null,null);e.a=component.exports},215:function(t,e,o){"use strict";o.r(e);var c={layout:"page",components:{PicShowcase:o(192).a},data:function(){return{portfolio:[{src:"/img/portfolio/portfolio01.png",title:"Markdown editor",link:"https://codepen.io/c53hzn/full/YzzRzxR",desc:"This is a description"},{src:"/img/portfolio/portfolio02.png",title:"Product Landing Page",link:"https://codepen.io/c53hzn/full/vaevqP",desc:"This is a description"},{src:"/img/portfolio/portfolio03.png",title:"Image size checker for eBay",link:"https://codepen.io/c53hzn/full/bMjVLe",desc:"This is a description"},{src:"/img/portfolio/portfolio04.png",title:"Technical Documentation Page\nCSS shape guide",link:"https://codepen.io/c53hzn/full/gjXwdE",desc:"This is a description"}]}},methods:{},mounted:function(){},head:function(){return{title:"Portfolio",meta:[{hid:"description",name:"description",content:"Portfolio of Jenny HOU"}]}}},n=o(4),component=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-content"},[e("PicShowcase",{attrs:{pic_showcase_pics:this.portfolio,column:"2",txt_pos:"left"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);