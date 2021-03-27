__NUXT_JSONP__("/blog/build-ecommerce-website-with-nuxt-snipcart-stripe", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg){au[0]="E-Commerce";au[1]="独立站";au[2]="webstore";return {data:[{blog:{slug:as,description:"没有后台和数据库，静态网站也想做网店？完全没有问题。生成网站用nuxt，内容及产品管理用nuxt content，订单管理和结算功能用snipcart，收款账号用stripe。从注册snipcart到功能上线，总共5小时搞定。",date:"2021-03-13T00:00:00.000Z",language:U,title:"用nuxt、snipcart和stripe建立一个电商网站",tags:[V,"电商","网店",W,at,u,x],keywords:au,comments:true,related_blog:["2019-05-05-nuxt-blog-static-website","2021-02-08-nuxt-2021-limitations","2021-03-24-nuxt-breadcrumbs-bilingual"],toc:[{id:X,depth:y,text:X},{id:Y,depth:y,text:Y},{id:H,depth:y,text:H},{id:av,depth:z,text:I},{id:x,depth:z,text:aw},{id:Z,depth:y,text:Z},{id:_,depth:z,text:_},{id:$,depth:z,text:$},{id:aa,depth:y,text:aa},{id:ab,depth:y,text:ab},{id:ax,depth:z,text:ay},{id:az,depth:z,text:aA},{id:aB,depth:z,text:aC},{id:aD,depth:z,text:aE},{id:ac,depth:y,text:ac}],body:{type:"root",children:[{type:b,tag:C,props:{id:X},children:[{type:b,tag:k,props:{href:"#%E5%89%8D%E8%A8%80",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:X}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"之前因为想卖供人下载的虚拟产品，于是就到可以托管和销售虚拟产品的 "},{type:b,tag:k,props:{href:"https:\u002F\u002Fwww.etsy.com\u002Fhk-en\u002Fshop\u002FJoyfulTemplateDesign",rel:[J,K,L],target:M},children:[{type:a,value:"Etsy"}]},{type:a,value:" 开了账号，上传了 8 个自己设计的日历、日程表模板和 HTML 网页模板，但是总也卖不出去。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"根据平台资料显示，我的平台产品每日流量（\u003C3) 还不如我自己的网站每天的流量（\u003C10) 多呢。但是降价促销也做了，付费平台广告也买了，流量还是上不去，并且也还是没人买。那我不如把产品放到自己网站上，也许看的人还多一些。"}]},{type:a,value:f},{type:b,tag:C,props:{id:Y},children:[{type:b,tag:k,props:{href:"#%E4%BA%A7%E5%93%81%E9%A1%B5%E5%B1%95%E7%A4%BA",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"一开始我只是想把产品在自己网站上做个展示，占个网络流量，然后把购买按钮导流回 Etsy ，这样我就还是只需要做网页，不用费劲去搞 API。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"这部分是前两个月断断续续完成的，不在文章概要里说的 5 个小时内。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"由于转用了 "},{type:b,tag:g,props:{},children:[{type:a,value:at}]},{type:a,value:" 作为内容管理模块，我可以直接用 "},{type:b,tag:g,props:{},children:[{type:a,value:"content"}]},{type:a,value:" 读取 csv 的功能来加载产品数据到网站上。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"首先从 Etsy 下载我的产品数据，下载下来的 csv 是这样子的。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:"img",props:{alt:"001",src:"\u002Fimg\u002Fblog\u002F2021-03-13\u002F001.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"这个数据结构挺好的，图片托管在 Etsy 上，连图片链接都有了，放到 "},{type:b,tag:g,props:{},children:[{type:a,value:"content\u002F"}]},{type:a,value:" 文件夹里就能直接用。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后就是在网站的产品目录页和产品详情页加载产品信息。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"使用 "},{type:b,tag:g,props:{},children:[{type:a,value:"async asyncData(){}"}]},{type:a,value:aF},{type:b,tag:g,props:{},children:[{type:a,value:aG}]},{type:a,value:aF},{type:b,tag:g,props:{},children:[{type:a,value:aH}]},{type:a,value:"方法来加载数据"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aI]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aJ}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"asyncData"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"context"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aK}]},{type:a,value:" data "},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,Q,aL]},children:[{type:a,value:aG}]},{type:a,value:" context"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,aM,ag,aj]},children:[{type:a,value:"$content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'product\u002Fetsy.csv'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,aM,ag,aj]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aN}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aK}]},{type:a,value:" product_list "},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:m}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"body"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aN}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,Q,aL]},children:[{type:a,value:"return"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:"product_list"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"\n    \n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后渲染到 "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fstore\u002Findex.vue"}]},{type:a,value:ak},{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:" 上就行啦。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"后来我就想，既然产品页面都有了，我何不把生成订单和收款功能也加上去呢？"}]},{type:a,value:f},{type:b,tag:C,props:{id:H},children:[{type:b,tag:k,props:{href:aO,ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:A,props:{id:av},children:[{type:b,tag:k,props:{href:"#paypal",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"线上收款的话，国际上用的最广的是 "},{type:b,tag:g,props:{},children:[{type:a,value:I}]},{type:a,value:" ，如果想要在自己网站使用 PayPal 收款的话，有两种方式："}]},{type:a,value:f},{type:b,tag:aP,props:{},children:[{type:a,value:f},{type:b,tag:aQ,props:{},children:[{type:a,value:"PayPal Payments Pro"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"配置这个需要生成开发者 APP KEY，好处是付款过程中页面不用跳转到 PayPal，但是需要商业账号才能用，且每个月要额外交月费。"}]},{type:a,value:f},{type:b,tag:aP,props:{start:y},children:[{type:a,value:f},{type:b,tag:aQ,props:{},children:[{type:a,value:"PayPal Express Checkout"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"配置这个不需要开发者 APP KEY，只需要填写 PayPal 账号 email 就行，个人账号就能用，还不需要额外交月费。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"两种方式都需要在 PayPal 后台给你的网站添加授权，否则前端会报错 "},{type:b,tag:g,props:{},children:[{type:a,value:aR}]},{type:a,value:aS}]},{type:a,value:f},{type:b,tag:A,props:{id:x},children:[{type:b,tag:k,props:{href:"#stripe",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"如果想允许买家使用信用卡付款的话，你还需要一些其他的第三方工具，比如 "},{type:b,tag:k,props:{href:"https:\u002F\u002Fstripe.com\u002F",rel:[J,K,L],target:M},children:[{type:a,value:x}]},{type:a,value:aS}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"注册账号之后，验证邮箱，添加公司详情（经营性质选个人也行），填写收款银行账号，然后在菜单的 "},{type:b,tag:g,props:{},children:[{type:a,value:"开发者"}]},{type:a,value:" 那里获取 "},{type:b,tag:g,props:{},children:[{type:a,value:"API 秘钥"}]},{type:a,value:" ，这个后面会用到。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Stripe 里面可以集成支付宝和微信收款，但是得要商业账号，我不想弄这些认证，于是作罢。"}]},{type:a,value:f},{type:b,tag:C,props:{id:Z},children:[{type:b,tag:k,props:{href:"#%E7%BB%93%E7%AE%97%E5%B7%A5%E5%85%B7",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:Z}]},{type:a,value:f},{type:b,tag:A,props:{id:_},children:[{type:b,tag:k,props:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89snipcart",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"有 "},{type:b,tag:g,props:{},children:[{type:a,value:I}]},{type:a,value:ak},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" 之后，还需要有加到购物车、结算、付款的功能，我希望网站能根据产品页面信息动态生成订单。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"根据 PayPal 和 Stripe 提供的文档和网上搜到的资料来看，这好像无法在静态网站上实现。那我们可以再绕一下，用 "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:" 来做这些，然后把 "},{type:b,tag:g,props:{},children:[{type:a,value:I}]},{type:a,value:ak},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" 作为 "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:" 的收款工具来用。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"这里要注意的是， "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:aT},{type:b,tag:g,props:{},children:[{type:a,value:"3.4% + HK$2.35"}]},{type:a,value:" 的费用，没有月费，而 "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:aT},{type:b,tag:g,props:{},children:[{type:a,value:"2% + 付款渠道费"}]},{type:a,value:" ，每月最低收费 10 美元，这样会被收两道钱。而 Etsy 的收费是每笔 "},{type:b,tag:g,props:{},children:[{type:a,value:"5%"}]},{type:a,value:" ，如果自建网店就会比 Etsy 收费贵了。但是没办法，如果要保持现在的静态网站，就只能这样做。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"换个角度来看，就是相当于 eBay 和 PayPal 的关系，一个处理订单，一个处理收款，并且两个都要收费。但是从费用上来看， "},{type:b,tag:g,props:{},children:[{type:a,value:"snipcart + stripe"}]},{type:a,value:" 比 "},{type:b,tag:g,props:{},children:[{type:a,value:"eBay(最低10%) + PayPal(2.9%)"}]},{type:a,value:" 要实惠多了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"而如果是 "},{type:b,tag:g,props:{},children:[{type:a,value:"snipcart + PayPal"}]},{type:a,value:" 的话，好像是最划算的结果，希望买家都选 PayPal 吧。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"再说说 Snipcart 的其他优势吧。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"之前我知道 "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:" 可以在静态网站或是单页面网站上添加结算功能，这样即使卖家没有自己的网站后台，也可以做到线上售卖的生意。这次研究了下，发现它不止可以做结算，还可以在他们的后台上传虚拟产品，并生成下载链接，当有买家成功付款之后就会发送下载链接给买家，简直太适合我了。"}]},{type:a,value:f},{type:b,tag:A,props:{id:$},children:[{type:b,tag:k,props:{href:"#%E9%9B%86%E6%88%90snipcart",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"注册 "},{type:b,tag:k,props:{href:"https:\u002F\u002Fsnipcart.com",rel:[J,K,L],target:M},children:[{type:a,value:u}]},{type:a,value:" 账号，然后按照首页提示的步骤，先填写商业信息，经营性质可以选个人，然后配置域名，接下来就可以集成代码了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"在页面右上角点击人头按钮，弹出主菜单，找到 "},{type:b,tag:g,props:{},children:[{type:a,value:"ACCOUNT"}]},{type:a,value:aU},{type:b,tag:g,props:{},children:[{type:a,value:"API KEYS"}]},{type:a,value:" ，先用 "},{type:b,tag:g,props:{},children:[{type:a,value:"TEST"}]},{type:a,value:" 模式下的 "},{type:b,tag:g,props:{},children:[{type:a,value:"API KEY"}]},{type:a,value:" ，等测试没问题了，换成 "},{type:b,tag:g,props:{},children:[{type:a,value:am}]},{type:a,value:" 就能上线了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"相关功能加到了 "},{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:" 这个模板里。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"首先在 "},{type:b,tag:g,props:{},children:[{type:a,value:"head"}]},{type:a,value:" 部分添加 "},{type:b,tag:g,props:{},children:[{type:a,value:aV}]}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aI]},children:[{type:b,tag:g,props:{},children:[{type:a,value:aV},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'https:\u002F\u002Fapp.snipcart.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'https:\u002F\u002Fcdn.snipcart.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'stylesheet'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'https:\u002F\u002Fcdn.snipcart.com\u002Fthemes\u002Fv3.0.31\u002Fdefault\u002Fsnipcart.css'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后在 "},{type:b,tag:g,props:{},children:[{type:a,value:ap}]},{type:a,value:" 的部分添加 "},{type:b,tag:g,props:{},children:[{type:a,value:"Add to cart"}]},{type:a,value:" 按钮"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aq]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:aX}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"snipcart-add-item"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-id"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"sku"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-file-guid"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"file_guid"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-price"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"price"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-url"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aY}]},{type:a,value:"\u002Fstore\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aY}]},{type:a,value:"+sku"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-description"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-image"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"photos[0]"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:":data-item-name"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:"\n  Add to cart\n"},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"在 "},{type:b,tag:g,props:{},children:[{type:a,value:ap}]},{type:a,value:" 部分的末尾加上"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aq]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:ar}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aJ}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"https:\u002F\u002Fcdn.snipcart.com\u002Fthemes\u002Fv3.0.31\u002Fdefault\u002Fsnipcart.js"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,ar]},children:[]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:v}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"TESTING_API_KEY"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:bc}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"现在可以开始测试了。"}]},{type:a,value:f},{type:b,tag:C,props:{id:aa},children:[{type:b,tag:k,props:{href:"#%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"我先在本机 "},{type:b,tag:g,props:{},children:[{type:a,value:bd}]},{type:a,value:" 的环境下测试，加到购物车之后很顺利地弹出了结算按钮，可是输入了收件信息和付款信息之后，页面报错说 snipcart 爬取的信息和当前结算的信息不符。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"我一头雾水地搜了半天，才发现原来 snipcart 的安全机制不允许开发人员在 "},{type:b,tag:g,props:{},children:[{type:a,value:"localhost"}]},{type:a,value:" 环境下生成订单，连测试订单都不行。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"但是我总不能每改一处代码就部署一次网站吧？有没有什么别的办法可以绕过去呢？"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后就搜到了一个解决办法，用代理。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:k,props:{href:be,rel:[J,K,L],target:M},children:[{type:a,value:be}]},{type:a,value:" 提供了一个代理域名的服务，可以转发本地的请求。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"打开网站，下载软件，解压缩，双击执行，电脑上闪过一个终端，然后又消失了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"我以为自己安装错了，又回到官网查看，才发现软件并不提供 UI，而是安装后使用命令行控制。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"于是回到刚才解压缩的目录下，在此目录打开 "},{type:b,tag:g,props:{},children:[{type:a,value:"cmd"}]},{type:a,value:" ，输入命令 "},{type:b,tag:g,props:{},children:[{type:a,value:"staqlab-tunnel 3000"}]},{type:a,value:"，这里的 "},{type:b,tag:g,props:{},children:[{type:a,value:"3000"}]},{type:a,value:" 是我用的端口，如果你用了别的端口，就改成别的。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后终端就会生成一个看起来像乱码的子域名: "},{type:b,tag:g,props:{},children:[{type:a,value:"https:\u002F\u002Fxxxxxxx.staqlab-tunnel.com"}]},{type:a,value:" 。我们可以用它访问原来本机的 "},{type:b,tag:g,props:{},children:[{type:a,value:bd}]},{type:a,value:" 的服务。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"我们可以把这个域名加到 "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:" 的允许使用的域名清单里，然后就可以测试购买了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"进入这个网址，网站会先提醒访客此网站不安全，除非你是该网站的开发人员，不然不要点击进去，但我们是开发人员，点进去就可以了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后测试加到购物车，点击结算，输入买家信息，输入测试用的信用卡号码，付款，立刻就收到购买成功的邮件和包含下载链接的邮件了。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"接下来就是结束测试，准备上线。"}]},{type:a,value:f},{type:b,tag:C,props:{id:ab},children:[{type:b,tag:k,props:{href:"#%E5%8A%9F%E8%83%BD%E4%B8%8A%E7%BA%BF",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ab}]},{type:a,value:f},{type:b,tag:A,props:{id:ax},children:[{type:b,tag:k,props:{href:"#%E5%9C%A8snipcart%E9%85%8D%E7%BD%AEstripe%E5%92%8Cpaypal",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ay}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"找到前面 "},{type:b,tag:k,props:{href:aO},children:[{type:a,value:H}]},{type:a,value:" 里面说的 Stripe 的 API KEY ，回到 snipcart ，在页面右上角点击人头按钮，弹出主菜单，找到 "},{type:b,tag:g,props:{},children:[{type:a,value:"STORE CONFIGURATIONS"}]},{type:a,value:aU},{type:b,tag:g,props:{},children:[{type:a,value:bf}]},{type:a,value:" ，在 "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" 那里点击 "},{type:b,tag:g,props:{},children:[{type:a,value:"connect"}]},{type:a,value:" ，把刚才从 stripe 那里获取到的 API KEY 填进去，保存即可。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"根据 Snipcart 的要求，你只可以有一个主要收款方式，如果想用 PayPal Payments Pro 的话，就不能用 Stripe 了。但是如果想额外添加 PayPal Express Checkout 收款则不受此限制。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"所以我们可以在 "},{type:b,tag:g,props:{},children:[{type:a,value:bf}]},{type:a,value:" 页面下拉至底部，添加一个 PayPal Express Checkout 的账号进去。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"另外，别忘了在 PayPal 授权给 Snipcart，否则会报错 "},{type:b,tag:g,props:{},children:[{type:a,value:aR}]},{type:a,value:"。授权步骤看 "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdocs.snipcart.com\u002Fv3\u002Fdashboard\u002Fpaypal-configuration#granting-permissions-to-your-paypal-account-to-snipcart",rel:[J,K,L],target:M},children:[{type:a,value:"这里"}]},{type:a,value:ad}]},{type:a,value:f},{type:b,tag:A,props:{id:az},children:[{type:b,tag:k,props:{href:"#%E5%9C%A8snipcart%E7%94%9F%E6%88%90%E4%B8%8A%E7%BA%BF%E7%94%A8%E7%9A%84live-key",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"想要使用 "},{type:b,tag:g,props:{},children:[{type:a,value:am}]},{type:a,value:" 的话，就要在 snipcart 添加缴付费用的信用卡，添加成功之后回到 API 页面，它还是叫我添加信用卡，这里不知道是触发了什么机制，添加了好几次，回来这个页面还是让我添加。后来不知怎的福至心灵，F5 刷新了一下页面，再回到 API KEY 那里，就可以生成 "},{type:b,tag:g,props:{},children:[{type:a,value:am}]},{type:a,value:" 了。"}]},{type:a,value:f},{type:b,tag:A,props:{id:aB},children:[{type:b,tag:k,props:{href:"#snipcart%E7%9A%84%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aC}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"原本在 Test 模式的时候，我已经设置过允许购买的买家国家\u002F地区了，可是转成 LIVE 模式之后还需要重新设置一次。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"从右边的菜单找到 "},{type:b,tag:g,props:{},children:[{type:a,value:"REGIONAL SETTINGS"}]},{type:a,value:" ，然后勾选你想售卖的国家\u002F地区，否则除了默认的美国和加拿大之外，所有地方的买家都无法下单。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"然后在右边的菜单找到 "},{type:b,tag:g,props:{},children:[{type:a,value:"DOMAINS & URLS"}]},{type:a,value:"，把你的网站域名加进去，这样 Snipcart 才能在你的网站上使用。"}]},{type:a,value:f},{type:b,tag:A,props:{id:aD},children:[{type:b,tag:k,props:{href:"#%E5%9C%A8nuxt%E9%85%8D%E7%BD%AEsnipcart%E7%9A%84live-key",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"我们回到 "},{type:b,tag:g,props:{},children:[{type:a,value:al}]},{type:a,value:" 这里，修改 "},{type:b,tag:g,props:{},children:[{type:a,value:ap}]},{type:a,value:" 的末尾部分"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aq]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:v}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,e,t]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"LIVE_APP_API_KEY"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:bc}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"save，git add，git commit，git push，等待 CI 自动部署，就完成了。"}]},{type:a,value:f},{type:b,tag:C,props:{id:ac},children:[{type:b,tag:k,props:{href:"#%E6%80%BB%E7%BB%93",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"虽然说终于算是有了自己的所谓“网店”，但是不管是 Etsy 还是 我的独立站，两边都一直不出单的话，还不如我发微博，一天能赚 0.1 人民币呢。"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"总而言之算是又学到了一些东西吧，2021 年，要加倍努力啊！"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2021-03-13-build-ecommerce-website-with-nuxt-snipcart-stripe",extension:".md",createdAt:bg,updatedAt:bg,prev:{slug:"kittens-game",title:"游戏猫国建设者的外挂脚本"},next:{slug:"build-ecommerce-website-with-nuxt-snipcart-stripe-en",title:"Build an E-Commerce website with Nuxt, Snipcart and Stripe"},relatedBlog:[{slug:"nuxt-blog-static-website",description:"重构了一下博客，从Jekyll迁移到了Nuxt。方法是先用Node API 来解析 Markdown 文件，然后 Nuxt+Axios 获取 API 返回的文章内容并生成静态页面。",date:"2019-05-05T00:00:00.000Z",language:U,title:"如何使用Nuxt建立个人博客",tags:["我的项目","Node.js",W,"静态博客",V]},{slug:"nuxt-2021-limitations",description:"升级Nuxt到2.14.12之后，遇到了3个问题，这个新版本用起来有点不太顺手。",date:"2021-02-08T00:00:00.000Z",language:U,title:"2021年Nuxt新版本的一些限制",tags:[V,W,"Nuxt Content"]},{slug:"nuxt-breadcrumbs-bilingual",description:"终于弄好了双语的面包屑导航，还是很开心的。",date:"2021-03-24T00:00:00.000Z",language:U,title:"如何制作中英双语的面包屑导航",tags:[V,W,"面包屑导航"]}]},mySlug:as,keywords:au,ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","code","p","\""," ","a","attr-name","=","tag","true",-1,"icon","icon-link","attr-value","attr-equals","snipcart","div","operator","stripe",2,3,"h3","\u003E","h2","string",":","\n  ","\n    ","收款工具","PayPal","nofollow","noopener","noreferrer","_blank","nuxt-content-highlight","pre","line-numbers","keyword","{","}",",","中文","技术","Nuxt.js","前言","产品页展示","结算工具","为什么选snipcart","集成snipcart","本地测试","功能上线","总结",".","\u003C","\u003C\u002F","function","(",")","property-access"," 和 ","\u002Fstore\u002F_sku.vue","LIVE KEY","rel"," href","html","language-html","script","build-ecommerce-website-with-nuxt-snipcart-stripe","Nuxt content",Array(3),"paypal","Stripe","在snipcart配置stripe和paypal","在snipcart配置stripe和PayPal","在snipcart生成上线用的live-key","在snipcart生成上线用的LIVE KEY","snipcart的其他配置","Snipcart的其他配置","在nuxt配置snipcart的live-key","在Nuxt配置snipcart的LIVE KEY"," 、 ","await","fetch","language-js","async","var","control-flow","method",";","#%E6%94%B6%E6%AC%BE%E5%B7%A5%E5%85%B7","ol","li","422 Unprocessable entity"," 。"," 每笔交易收 "," 下面的 ","link","'preconnect'","button","'","title","id","data-config-modal-style","side","data-api-key","hidden","localhost:3000","https:\u002F\u002Ftunnel.staqlab.com","PAYMENT GATEWAY","2021-03-27T16:59:06.146Z")));