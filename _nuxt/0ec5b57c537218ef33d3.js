(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(t,n,e){"use strict";e.r(n);var o=e(70),r=e.n(o),l={asyncData:function(t){return r.a.get("http://127.0.0.1:4000?tag="+encodeURIComponent(t.params.tag)).then(function(n){for(var data=n.data,e=[],i=0;i<data.blogs.length;i++)e[data.blogs.length-i-1]=data.blogs[i];return{blogs:e,baseURL:t.app.router.options.base,tagName:t.params.tag}})},head:function(){return{title:this.tagName,meta:[{hid:"description",name:"description",content:"Blog list under tag "+this.tagName}]}}},c=e(9),component=Object(c.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Tag: "+t._s(t.tagName))]),t._v(" "),t._l(t.blogs,function(n,o){return e("p",{key:o},[e("span",{staticClass:"blog-date"},[t._v(t._s(n.slug.substring(0,10))+" ")]),t._v(" "),e("a",{attrs:{href:t.baseURL+"blogs/"+n.slug}},[t._v("\n     "+t._s(n.title)+"\n    ")])])})],2)},[],!1,null,null,null);n.default=component.exports}}]);