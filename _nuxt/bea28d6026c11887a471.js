(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(t,n,e){"use strict";e.r(n);e(21),e(14),e(61);var l=e(79),r=e.n(l),o={layout:"page",asyncData:function(t){return r.a.get("http://127.0.0.1:4000/blogs?tag=all_tags").then((function(n){for(var e=Object.keys(n.data.tags),l=[],i=0;i<e.length;i++)l[i]={name:e[i],len:n.data.tags[e[i]]};return{tags:l,baseURL:t.app.router.options.base,ui_str:{tag_list:"标签列表",all_posts:"所有文章"}}}))},mounted:function(){var t=navigator.language||navigator.userLanguage;"zh"!=(t=t.substr(0,2))&&(this.ui_str={tag_list:"Tag list",all_posts:"All posts"})},head:function(){return{title:"Tag list",meta:[{hid:"description",name:"description",content:"文章标签列表"}]}}},c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-content"},[e("h1",[t._v("\n    "+t._s(t.ui_str.tag_list)+"\n    "),e("a",{attrs:{href:t.baseURL+"blogs"}},[e("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_posts))])])]),t._v(" "),e("p",t._l(t.tags,(function(n,l){return e("a",{key:l,attrs:{href:t.baseURL+"blogs/tag/"+n.name}},[e("span",{staticClass:"blog-tag"},[t._v(t._s(n.name)+": "+t._s(n.len))])])})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);