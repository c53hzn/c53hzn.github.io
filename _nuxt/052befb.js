(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nuxt")],1)},l=[]},125:function(t,e,n){var content=n(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("db582384",content,!0,{sourceMap:!1})},126:function(t,e,n){var content=n(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("779bf73e",content,!0,{sourceMap:!1})},127:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("c3b0b3e0",content,!0,{sourceMap:!1})},141:function(t,e,n){"use strict";var o=n(100),l=n(74),r=n(2),component=Object(r.a)(l.default,o.a,o.b,!1,null,null,null);e.default=component.exports},145:function(t,e,n){"use strict";var o=n(20),l=n(21),r={components:{Navigation:o.a,Footer:l.a}},c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},146:function(t,e,n){"use strict";var o=n(20),l=n(21),r={components:{Navigation:o.a,Footer:l.a},mounted:function(){var t=function(){(n.body.scrollTop||n.documentElement.scrollTop)>360?(nav.style="position: fixed; mix-blend-mode: normal;",l.style.position="fixed"):(nav.style="position: absolute; mix-blend-mode: screen;",l.style.position="absolute")},e=function(){nav.style="position: fixed; mix-blend-mode: normal;"},n=document,o=n.body.clientWidth,nav=(n.body.scrollTop||n.documentElement.scrollTop,n.getElementsByTagName("nav")[0]),l=n.getElementsByClassName("nav-mask")[0];n.getElementById("my-info");o<425?e():t(),window.addEventListener("scroll",(function(){(o=n.body.clientWidth)>425?t():e()})),window.addEventListener("resize",(function(){(o=n.body.clientWidth)>425?t():e()}))}},c=(n(194),n(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},147:function(t,e,n){"use strict";var o=n(20),l=n(21),r=n(49),c={components:{Navigation:o.a,Footer:l.a,Breadcrumbs:r.a}},d=n(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("div",{staticClass:"below-nav"},[n("Breadcrumbs",{attrs:{isCurPathUpper:"1"}})],1),t._v(" "),n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},148:function(t,e,n){"use strict";var o=n(20),l=n(21),r=n(49),c={components:{Navigation:o.a,Footer:l.a,Breadcrumbs:r.a}},d=n(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("div",{staticClass:"below-nav"},[n("Breadcrumbs",{attrs:{isCurPathUpper:"0"}})],1),t._v(" "),n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},149:function(t,e,n){"use strict";var o=n(20),l=n(21),r=n(49),c={components:{Navigation:o.a,Footer:l.a,Breadcrumbs:r.a},data:function(){return{isProd:!0,path:""}},computed:{lang:function(){return"Chi"==this.$store.state.lang.val?"zh":"en"}},created:function(){this.path=this.$route.path},head:function(){return{htmlAttrs:{lang:this.lang},link:[{rel:"preconnect",href:"https://app.snipcart.com"},{rel:"preconnect",href:"https://cdn.snipcart.com"},{rel:"stylesheet",href:"https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"}]}}},d=(n(198),n(2)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("div",{staticClass:"below-nav"},[n("Breadcrumbs",{attrs:{isCurPathUpper:"0"}}),t._v(" "),n("div",{staticClass:"my-cart"},[n("a",{attrs:{href:t.path+"#/cart"}},[n("i",{staticClass:"fa fa-shopping-cart"})])])],1),t._v(" "),n("nuxt"),t._v(" "),n("script",{attrs:{async:"",src:"https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"}}),t._v(" "),t.isProd?n("div",{attrs:{id:"snipcart","data-config-modal-style":"side","data-api-key":"NGFhNzBmNzYtMmQ0NS00MjgzLWFlM2UtYWVmOTc0MGM1ZmExNjM3NTExMjY2MTE5Mzg5MjYw",hidden:""}}):n("div",{attrs:{id:"snipcart","data-config-modal-style":"side","data-api-key":"YzJiMGY4MzAtN2I0ZS00Mjg5LTk3MmYtYWExZTRlNDhjZmMwNjM3NTExMjY2MTE5Mzg5MjYw",hidden:""}})],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},152:function(t,e,n){t.exports=n(153)},192:function(t,e,n){var content=n(193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("89dfa84c",content,!0,{sourceMap:!1})},193:function(t,e,n){var o=n(51)(!1);o.push([t.i,'code[class*=language-],pre[class*=language-]{color:#d4d4d4;font-size:13px;text-shadow:none;font-family:Menlo,Monaco,Consolas,"Andale Mono","Ubuntu Mono","Courier New",monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#75a7ca}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#75a7ca}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;background:#1e1e1e}:not(pre)>code[class*=language-]{padding:.1em .3em;border-radius:.3em;color:#db4c69;background:#f9f2f4}.namespace{opacity:.7}.token.doctype .token.doctype-tag{color:#569cd6}.token.doctype .token.name{color:#9cdcfe}.token.comment,.token.prolog{color:#6a9955}.language-html .language-css .token.punctuation,.language-html .language-javascript .token.punctuation,.token.punctuation{color:#d4d4d4}.token.boolean,.token.constant,.token.inserted,.token.number,.token.property,.token.symbol,.token.tag,.token.unit{color:#b5cea8}.token.attr-name,.token.builtin,.token.char,.token.deleted,.token.selector,.token.string{color:#ce9178}.language-css .token.string.url{text-decoration:underline}.token.entity,.token.operator{color:#d4d4d4}.token.operator.arrow{color:#569cd6}.token.atrule{color:#ce9178}.token.atrule .token.rule{color:#c586c0}.token.atrule .token.url{color:#9cdcfe}.token.atrule .token.url .token.function{color:#dcdcaa}.token.atrule .token.url .token.punctuation{color:#d4d4d4}.token.keyword{color:#569cd6}.token.keyword.control-flow,.token.keyword.module{color:#c586c0}.token.function,.token.function .token.maybe-class-name{color:#dcdcaa}.token.regex{color:#d16969}.token.important{color:#569cd6}.token.italic{font-style:italic}.token.constant{color:#9cdcfe}.token.class-name,.token.maybe-class-name{color:#4ec9b0}.token.console,.token.interpolation,.token.parameter{color:#9cdcfe}.token.boolean,.token.punctuation.interpolation-punctuation{color:#569cd6}.token.exports .token.maybe-class-name,.token.imports .token.maybe-class-name,.token.property,.token.variable{color:#9cdcfe}.token.escape,.token.selector{color:#d7ba7d}.token.tag{color:#569cd6}.token.cdata,.token.tag .token.punctuation{color:grey}.token.attr-name{color:#9cdcfe}.token.attr-value,.token.attr-value .token.punctuation{color:#ce9178}.token.attr-value .token.punctuation.attr-equals{color:#d4d4d4}.token.entity{color:#569cd6}.token.namespace{color:#4ec9b0}code[class*=language-javascript],code[class*=language-jsx],code[class*=language-tsx],code[class*=language-typescript],pre[class*=language-javascript],pre[class*=language-jsx],pre[class*=language-tsx],pre[class*=language-typescript]{color:#9cdcfe}code[class*=language-css],pre[class*=language-css]{color:#ce9178}code[class*=language-html],pre[class*=language-html]{color:#d4d4d4}.language-regex .token.anchor{color:#dcdcaa}.language-html .token.punctuation{color:grey}pre[data-line]{position:relative}pre[class*=language-]>code[class*=language-]{position:relative;z-index:1}.line-highlight{position:absolute;left:0;right:0;padding:inherit 0;margin-top:1em;background:#f7ebc6;box-shadow:inset 5px 0 0 #f7d87c;z-index:0;pointer-events:none;line-height:inherit;white-space:pre}',""]),t.exports=o},194:function(t,e,n){"use strict";n(125)},195:function(t,e,n){var o=n(51)(!1);o.push([t.i,".container{position:relative}",""]),t.exports=o},196:function(t,e,n){"use strict";n(126)},197:function(t,e,n){var o=n(51)(!1);o.push([t.i,".breadcrumbs{display:inline-block}",""]),t.exports=o},198:function(t,e,n){"use strict";n(127)},199:function(t,e,n){var o=n(51)(!1);o.push([t.i,".my-cart{margin-left:10px;font-size:24px;text-align:right;transform:translateY(-5px);flex:1}",""]),t.exports=o},20:function(t,e,n){"use strict";var o={name:"Navigation",data:function(){return{isNeedZh:!0,isNavVisible:!1,path_status:{"/home":!1,"/resume":!1,"/portfolio":!1,"/blog":!1,"/item":!1,"/contact":!1},nav_links_zh:[{path:"/",title:"首页",target:"_self"},{path:"/resume",title:"简历",target:"_self"},{path:"/portfolio",title:"作品集",target:"_self"},{path:"/blog",title:"博客",target:"_self"},{path:"/store",title:"网店",target:"_self"},{path:"https://wj.qq.com/s2/3731207/f0cd/",title:"联系我",target:"_blank"}],nav_links_en:[{path:"/",title:"Home",target:"_self"},{path:"/resume",title:"Resume",target:"_self"},{path:"/portfolio",title:"Portfolio",target:"_self"},{path:"/blog",title:"Blog",target:"_self"},{path:"/store",title:"Store",target:"_self"},{path:"https://wj.qq.com/s2/3731207/f0cd/",title:"Contact",target:"_blank"}],baseURL:"/"}},computed:{lang:function(){return this.$store.state.lang.ui},txt_toggleLang:function(){return this.$store.state.lang.title},nav_links:function(){return"Chi"==this.$store.state.lang.val?this.nav_links_zh:this.nav_links_en}},created:function(){var t=this;t.path_status[t.$route.path]=!0,/\/blog/.test(t.$route.path)&&(t.path_status["/blog"]=!0)},mounted:function(){var t=this,e=navigator.language||navigator.userLanguage;e=e.substr(0,2);var n=localStorage.getItem("lang");"zh"!=e?n?n!=t.$store.state.lang.val&&t.$store.commit("lang/toggleLang"):(t.$store.commit("lang/toggleLang"),localStorage.setItem("lang","Eng")):n&&n!=t.$store.state.lang.val&&(t.$store.commit("lang/toggleLang"),localStorage.setItem("lang",t.$store.state.lang.val))},methods:{handleClk:function(){var t=this;t.isNavVisible?t.isNavVisible=!1:t.isNavVisible=!0},toggleLang:function(){var t=this;t.$store.commit("lang/toggleLang",t.lang),localStorage.setItem("lang",t.$store.state.lang.val)},hide_nav:function(){this.isNavVisible=!1}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav-wrap"},[n("header",[n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL}},[n("p",{staticClass:"nav-home",on:{click:t.hide_nav}},[t._v("Jenny's blog")])])]),t._v(" "),n("div",{staticClass:"nav-btn",on:{click:t.handleClk}},[n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"})]),t._v(" "),n("div",{staticClass:"nav-mask"}),t._v(" "),n("div",{staticClass:"body-mask",class:{"body-mask-visible":t.isNavVisible},on:{click:t.hide_nav}}),t._v(" "),n("ul",{staticClass:"nav-ul",class:{"nav-mobile":t.isNavVisible}},[t.isNeedZh?n("span",{staticClass:"nav-link",staticStyle:{"padding-left":"10px"},attrs:{title:t.txt_toggleLang},on:{click:t.toggleLang}},[t._v("\n      "+t._s(t.lang)+"\n    ")]):t._e(),t._v(" "),t._l(t.nav_links,(function(link,e){return n("a",{key:e,staticClass:"nav-link",class:{"nuxt-link-active":t.path_status[link.path]},attrs:{href:link.path,target:link.target}},[n("li",{on:{click:t.hide_nav}},[t._v(t._s(link.title)),/http/.test(link.path)?n("span",[t._v(" ")]):t._e(),/http/.test(link.path)?n("i",{staticClass:"fa fa-external-link"}):t._e()])])}))],2)])])}),[],!1,null,null,null);e.a=component.exports},200:function(t,e,n){"use strict";n.r(e);e.default={state:function(){return{val:"Eng",ui:"中文",title:"将UI文本切换成中文"}},mutations:{toggleLang:function(t){"Chi"==t.val?(t.val="Eng",t.ui="中文",t.title="将UI文本切换成中文"):(t.val="Chi",t.ui="English",t.title="Change UI texts to English")}}}},21:function(t,e,n){"use strict";var o={data:function(){return{isHidden:!0}},methods:{toTop:function(){document.querySelector(".container").scrollIntoView({behavior:"smooth"})}},mounted:function(){var t,e=this;(t=window).addEventListener("scroll",(function(){t.scrollY>199?e.isHidden=!1:e.isHidden=!0}))}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._m(0),t._v(" "),n("div",{staticClass:"go-top",class:{"go-top-hidden":t.isHidden},on:{click:t.toTop}},[n("div",{staticClass:"arrow"}),t._v(" "),n("div",{staticClass:"stick"})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Created with Nuxt.js "),n("br"),t._v("\n    \tDesigned by  \n    \t"),n("a",{staticClass:"no-decor-link",attrs:{href:"https://github.com/c53hzn",target:"_blank"}},[n("strong",[t._v("Jenny HOU")]),t._v(" "),n("i",{staticClass:"fa fa-github font-20"})])])}],!1,null,null,null);e.a=component.exports},31:function(t,e,n){"use strict";var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[n("p",[t._v("404 not found.")]),t._v(" "),n("p",[t._v("Go back to "),n("a",{staticClass:"err-home",attrs:{href:"/"}},[t._v("Home")])])])}],!1,null,null,null);e.a=component.exports},49:function(t,e,n){"use strict";n(63),n(27);var o={name:"breadcrumbs",data:function(){return this.isCurPathUpper,{paths:[]}},props:{isCurPathUpper:{type:String,required:!0}},computed:{curPath:function(){var t=this,path=t.paths[t.paths.length-1];return 1==t.isCurPathUpper?path.text.charAt(0).toUpperCase()+path.text.slice(1):path.text}},created:function(){for(var t=this.$route.path.split("/"),e="",n=[],i=0;i<t.length;i++){i>1?e+="/"+t[i]:e=1==i?"/"+t[i]:"/";var o={href:e,text:t[i]?decodeURI(t[i]):"Home"};n.push(o)}this.paths=n}},l=(n(196),n(2)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumbs"},t._l(t.paths,(function(path,e){return n("span",{key:e},[e<t.paths.length-1?n("a",{attrs:{href:path.href}},[t._v(t._s(path.text.charAt(0).toUpperCase()+path.text.slice(1)))]):t._e(),e==t.paths.length-1?n("span",[t._v(t._s(t.curPath))]):t._e(),e<t.paths.length-1?n("span",[t._v(" / ")]):t._e()])})),0)}),[],!1,null,null,null);e.a=component.exports},74:function(t,e,n){"use strict";var o=n(75),l=n.n(o);e.default=l.a},75:function(t,e){}},[[152,15,1,16]]]);