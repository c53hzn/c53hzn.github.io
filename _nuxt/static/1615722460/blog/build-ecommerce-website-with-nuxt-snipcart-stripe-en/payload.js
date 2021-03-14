__NUXT_JSONP__("/blog/build-ecommerce-website-with-nuxt-snipcart-stripe-en", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk){al[0]="static website";al[1]="webstore";return {data:[{blog:{slug:ak,description:"You don't have a backend a and database, but still want to build a webstore? No problem! You can use Nuxt to build static website, Nuxt content to manage content and stock, Snipcart to manage orders and checkout functions, and Stripe to manage your funds.",date:"2021-03-14T00:00:00.000Z",language:X,layout:"post",title:"Build an E-Commerce website with Nuxt, Snipcart and Stripe",tags:["tech","E-Commerce",P,r,y],keywords:al,comments:F,related_blog:["2020-04-05-nuxt-blog-static-website-en","2021-02-08-nuxt-2021-limitations-en","2021-03-13-build-ecommerce-website-with-nuxt-snipcart-stripe"],toc:[{id:am,depth:G,text:an},{id:ao,depth:G,text:ap},{id:aq,depth:G,text:Y},{id:ar,depth:G,text:as},{id:at,depth:B,text:au},{id:av,depth:B,text:aw},{id:ax,depth:B,text:ay},{id:az,depth:B,text:aA},{id:aB,depth:B,text:aC},{id:aD,depth:B,text:aE},{id:aF,depth:B,text:aG},{id:aH,depth:G,text:aI}],body:{type:"root",children:[{type:b,tag:H,props:{id:am},children:[{type:b,tag:l,props:{href:"#preface",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"A while ago I wanted to start selling downloadable digital products, so I opened an "},{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.etsy.com\u002Fhk-en\u002Fshop\u002FJoyfulTemplateDesign",rel:[Q,R,S],target:T},children:[{type:a,value:aJ}]},{type:a,value:" store that can host and sell digital products. I have created 8 listings, selling calendar templates, schedule planner templates and HTML webpage templates, etc, all designed by myself. But it seems hard to get any sale."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"According to the stats provided by Etsy, everyday I get traffic from the platform (\u003C3) even less than my own website (\u003C10). I have tried discount sales and paid ads on Etsy, but still don't get much traffic, and still 0 sale. Then maybe I could put products on my own website and hope to get more viewers."}]},{type:a,value:f},{type:b,tag:H,props:{id:ao},children:[{type:b,tag:l,props:{href:"#product-page-display",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"At first I only intended to put my products on my website for display purpose, to gain more online traffic for these products, then redirect purchase button back to Etsy. In this way, I only have to design product pages, and I don't have to worry about any APIs."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"I started to use "},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt content"}]},{type:a,value:" as CMS a few months back. It has great feature that allows reading content directly from a csv file, and I can use it to read product data and render to website."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"First I need to download product data from Etsy, here is how the downloaded csv looks like"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:"img",props:{alt:"001",src:"\u002Fimg\u002Fblog\u002F2021-03-13\u002F001.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This data structure is pretty great, the pictures are hosted on Etsy and picture URLs are accessible outside the platform, I can put this csv in "},{type:b,tag:g,props:{},children:[{type:a,value:"content\u002F"}]},{type:a,value:" folder and start using it immediately."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The next step is to create product catalogue page and product detail page."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can use "},{type:b,tag:g,props:{},children:[{type:a,value:"async asyncData(){}"}]},{type:a,value:aK},{type:b,tag:g,props:{},children:[{type:a,value:aL}]},{type:a,value:aK},{type:b,tag:g,props:{},children:[{type:a,value:aM}]},{type:a,value:" to load data."}]},{type:a,value:f},{type:b,tag:w,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,aN]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aO}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"asyncData"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"context"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aP}]},{type:a,value:" data "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,L,aQ]},children:[{type:a,value:aL}]},{type:a,value:" context"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,aR,Z,aa]},children:[{type:a,value:"$content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'product\u002Fetsy.csv'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,aR,Z,aa]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aS}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aP}]},{type:a,value:" product_list "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:m}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"body"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aS}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,L,aQ]},children:[{type:a,value:"return"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"product_list"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:"\n  \n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Then render data in "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fstore\u002Findex.vue"}]},{type:a,value:aT},{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:z}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"After this, I thought, now that I have the product pages, why not add order and payment functions as well?"}]},{type:a,value:f},{type:b,tag:H,props:{id:aq},children:[{type:b,tag:l,props:{href:"#payment-tool",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"For receiving online payments, "},{type:b,tag:g,props:{},children:[{type:a,value:"PayPal"}]},{type:a,value:" is most widely and globally used. But you will need a business account for API integration, then I'll pass."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"There are other third party payment tools that allow credit cart or debit cart payments, like "},{type:b,tag:l,props:{href:"https:\u002F\u002Fstripe.com\u002F",rel:[Q,R,S],target:T},children:[{type:a,value:y}]},{type:a,value:z}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"So I registered an account, verified my email, added company info(just select individual), added bank account, then go to "},{type:b,tag:g,props:{},children:[{type:a,value:"Developer"}]},{type:a,value:" section in menu on the left to generate an "},{type:b,tag:g,props:{},children:[{type:a,value:"API key"}]},{type:a,value:", we will be using it shortly after."}]},{type:a,value:f},{type:b,tag:H,props:{id:ar},children:[{type:b,tag:l,props:{href:"#checkoutshopping-cart-tool",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:as}]},{type:a,value:f},{type:b,tag:D,props:{id:at},children:[{type:b,tag:l,props:{href:"#why-snipcart",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:au}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"With "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" account ready, we still need shopping cart, checkout and payment functions. According to Stripe's documents and some online demos I found, they cannot be achieved on static websites, then maybe we can work around it with "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" , and use "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" as payment gateway in "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:z}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Here you might want to take a look at the fees."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:ac},{type:b,tag:g,props:{},children:[{type:a,value:"3.4% + HK$2.35"}]},{type:a,value:" per transaction, without monthly subscription fees. While "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:ac},{type:b,tag:g,props:{},children:[{type:a,value:"2% + payment gateway fee"}]},{type:a,value:" for each transaction, minimum 10 USD for each month."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Meanwhile "},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:ac},{type:b,tag:g,props:{},children:[{type:a,value:"5%"}]},{type:a,value:" per order. So if I create a webstore using "},{type:b,tag:g,props:{},children:[{type:a,value:"Snipcart"}]},{type:a,value:aT},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:", it will cost more than simply listing items on Etsy. If I want to keep my website static, there is no other choice."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"But we can compare this combination with eBay and PayPal, one for managing orders, one for managing funds, and both cost fees. And if we compare the fees, "},{type:b,tag:g,props:{},children:[{type:a,value:"snipcart + stripe"}]},{type:a,value:" is much cheaper than "},{type:b,tag:g,props:{},children:[{type:a,value:"eBay + PayPal"}]},{type:a,value:z}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"And there are other advantages."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"I learned about "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" some time earlier that it can add shopping cart function to static websites or SPA websites. Even the seller does not own a backend, he\u002Fshe can still manage online selling business. And this time I found that "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" can do not only checkout, but also hosting digital products and generating downloading links that will be sent to buyers automatically once a payment is made. This suits me perfectly."}]},{type:a,value:f},{type:b,tag:D,props:{id:av},children:[{type:b,tag:l,props:{href:"#integrate-with-snipcart",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Register a "},{type:b,tag:l,props:{href:"https:\u002F\u002Fsnipcart.com",rel:[Q,R,S],target:T},children:[{type:a,value:r}]},{type:a,value:" account, then follow the steps indicated on dashboard, fill in business information, you can choose individual in company type, then set up domains, now you can install "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:" codes in your website."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Click on the head button on top right, find "},{type:b,tag:g,props:{},children:[{type:a,value:"API KEYS"}]},{type:a,value:aU},{type:b,tag:g,props:{},children:[{type:a,value:"ACCOUNT"}]},{type:a,value:", choose "},{type:b,tag:g,props:{},children:[{type:a,value:"TEST"}]},{type:a,value:" mode and get your "},{type:b,tag:g,props:{},children:[{type:a,value:"API KEY"}]},{type:a,value:". When your local test all pass, you can change to "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" and let your store go online."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"I added the shopping cart function in "},{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:" ."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"First add "},{type:b,tag:g,props:{},children:[{type:a,value:aV}]},{type:a,value:" in "},{type:b,tag:g,props:{},children:[{type:a,value:"head"}]},{type:a,value:" section."}]},{type:a,value:f},{type:b,tag:w,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,aN]},children:[{type:b,tag:g,props:{},children:[{type:a,value:aV},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'https:\u002F\u002Fapp.snipcart.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'https:\u002F\u002Fcdn.snipcart.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'stylesheet'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'https:\u002F\u002Fcdn.snipcart.com\u002Fthemes\u002Fv3.0.31\u002Fdefault\u002Fsnipcart.css'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Then add "},{type:b,tag:g,props:{},children:[{type:a,value:"Add to cart"}]},{type:a,value:" button in "},{type:b,tag:g,props:{},children:[{type:a,value:ag}]}]},{type:a,value:f},{type:b,tag:w,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,ah]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:aX}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"snipcart-add-item"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-id"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"sku"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-file-guid"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"file_guid"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-price"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"price"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-url"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aY}]},{type:a,value:"\u002Fstore\u002F"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aY}]},{type:a,value:"+sku"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-description"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-image"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"photos[0]"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":data-item-name"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:a,value:"\n  Add to cart\n"},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Append this to "},{type:b,tag:g,props:{},children:[{type:a,value:ag}]}]},{type:a,value:f},{type:b,tag:w,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,ah]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:ai}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aO}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"https:\u002F\u002Fcdn.snipcart.com\u002Fthemes\u002Fv3.0.31\u002Fdefault\u002Fsnipcart.js"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,ai]},children:[]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:w}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"TESTING_API_KEY"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:bc}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Now you are ready for local tests."}]},{type:a,value:f},{type:b,tag:D,props:{id:ax},children:[{type:b,tag:l,props:{href:"#testing-in-local-environment",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ay}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"First I started building in "},{type:b,tag:g,props:{},children:[{type:a,value:bd}]},{type:a,value:" , go to product page, add to cart, the cart page jumps out as expected, but when I tried to confirm payment, there is an error saying that the information in cart does not match what snipcart crawled from my website."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"After researching for a while, I found out that snipcart does not allow you to generate orders, not even test orders."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"But it seems odd if I deploy my website each time I change a line of codes. Is there a way that I can work this around?"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Then a solution came out from the search results, a proxy domain."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:l,props:{href:be,rel:[Q,R,S],target:T},children:[{type:a,value:be}]},{type:a,value:" offers a proxy domain service that can forward your local website."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Go to their website, download the software, unzip, double click to run software, then there popped up a terminal and disappeared in a flash."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"I thought I did something wrong, so I went back to their website and found that the software does not provide an interface, you will have to use command line after installation."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"So I went back to the directory where I unzipped the file package, open "},{type:b,tag:g,props:{},children:[{type:a,value:"cmd"}]},{type:a,value:" in this directory, input "},{type:b,tag:g,props:{},children:[{type:a,value:"staqlab-tunnel 3000"}]},{type:a,value:" in terminal. The "},{type:b,tag:g,props:{},children:[{type:a,value:"3000"}]},{type:a,value:" here stands for the port that I'm using, if you are using another port, just change it."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Then the terminal generated a subdomain for me: "},{type:b,tag:g,props:{},children:[{type:a,value:"https:\u002F\u002Fxxxxxxx.staqlab-tunnel.com"}]},{type:a,value:" . We can use this to access the website originally served on "},{type:b,tag:g,props:{},children:[{type:a,value:bd}]},{type:a,value:z}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Now add this domain to "},{type:b,tag:g,props:{},children:[{type:a,value:r}]},{type:a,value:"'s domain whitelist and start testing."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Go to this address, the website will warn you first that this website is not save unless you are the developer of it, but I am the developer, so just click continue."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Add my item to shopping cart, click checkout, input buyer information, input testing credit cart info, confirm payment, then I almost immediately received emails for order and downloading links."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"It's time to wrap up the tests and prepare for going online."}]},{type:a,value:f},{type:b,tag:D,props:{id:az},children:[{type:b,tag:l,props:{href:"#function-going-online",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:D,props:{id:aB},children:[{type:b,tag:l,props:{href:"#use-stripes-api-key-in-snipcart",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aC}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Go find the API KEY mentioned in "},{type:b,tag:l,props:{href:"#Payment-tool"},children:[{type:a,value:Y}]},{type:a,value:" , go back to snipcart and click head button on top right, find "},{type:b,tag:g,props:{},children:[{type:a,value:"PAYMENT GATEWAY"}]},{type:a,value:aU},{type:b,tag:g,props:{},children:[{type:a,value:"STORE CONFIGURATIONS"}]},{type:a,value:" , click "},{type:b,tag:g,props:{},children:[{type:a,value:"connect"}]},{type:a,value:" button on the right of "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" input your API KEY and save."}]},{type:a,value:f},{type:b,tag:D,props:{id:aD},children:[{type:b,tag:l,props:{href:"#generate-live-key-in-snipcart",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"In order to generate a "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:", you need to set up a credit cart for paying snipcart fees. So I added a credit cart and went back to API page, but it still asked me to add a credit cart, which is weird. I have tried adding credit cart several times but it still asked me to add one. Then somehow it hit me that maybe refreshing the page can do a little good. Then I went back to API page and generated a "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" successfully."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Now please remember to go to "},{type:b,tag:g,props:{},children:[{type:a,value:"REGIONAL SETTINGS"}]},{type:a,value:" in the right menu under LIVE mode, select countries that you would like to sell to, or buyers from the whole world cannot place order except default countries like US and Canada."}]},{type:a,value:f},{type:b,tag:D,props:{id:aF},children:[{type:b,tag:l,props:{href:"#use-snipcarts-live-key-in-nuxt",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aG}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Go back to "},{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:" and modify the end of "},{type:b,tag:g,props:{},children:[{type:a,value:ag}]}]},{type:a,value:f},{type:b,tag:w,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,ah]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:w}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,e,p]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"LIVE_APP_API_KEY"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:bc}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Save, git add, git commit, git push and wait for CI to deploy the website, done."}]},{type:a,value:f},{type:b,tag:H,props:{id:aH},children:[{type:b,tag:l,props:{href:"#conclusion",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aI}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Although I have set up my stores, one on Etsy and one on my own website, if orders don't come, then I'll be only paying the fees."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Well, still learned a lot during the process. Need to fight harder for the year 2021 now!"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2021-03-14-build-ecommerce-website-with-nuxt-snipcart-stripe-en",extension:".md",createdAt:bf,updatedAt:bf,readingTime:423300,prev:{slug:bg,title:bh},next:null,relatedBlog:[{slug:"nuxt-blog-static-website-en",description:"I built up my website with Nuxt. First I created an API to parse Markdown articles and return JSON contents, and then used Nuxt+Axios to call this API to retrieve blog article and generate static pages based on this structure. Here you can see some details.",date:"2020-04-05T00:00:00.000Z",language:X,title:"How to build up a static blog website with Nuxt",tags:["JavaScript","Node.js",P,"Static Blog",bi]},{slug:"nuxt-2021-limitations-en",description:"After updating to Nuxt 2.14.12, I encountered 3 problems, making the developing process a little difficult for me.",date:"2021-02-08T00:00:00.000Z",language:X,title:"Limitations of latest version Nuxt in 2021",tags:[bi,P,"Nuxt Content"]},{slug:bg,description:"没有后台和数据库，静态网站也想做网店？完全没有问题。生成网站用nuxt，内容及产品管理用nuxt content，订单管理和结算功能用snipcart，收款账号用stripe。从注册snipcart到功能上线，总共5小时搞定。",date:"2021-03-13T00:00:00.000Z",language:"中文",title:bh,tags:["技术","电商","网店",P,r,y]}]},mySlug:ak,keywords:al,ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"\u002Fstore\u002Ftemplate-ebay-desc",feat:F,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"\u002Fstore\u002Fcalendar-8-page",feat:F,tag:bj},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"\u002Fstore\u002Fcalendar-weekly",feat:F,tag:aj},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"\u002Fstore\u002Fcalendar-100-day",feat:F,tag:bj},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"\u002Fstore\u002Fcalendar-monthly-elegant",feat:W,tag:bk},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"\u002Fstore\u002Fexcel-bill-tracker",feat:W,tag:aj},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"\u002Fstore\u002Fcalendar-annual",feat:W,tag:aj},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"\u002Fstore\u002Fcalendar-monthly-vertical",feat:W,tag:bk}]}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","code","p","\""," ","attr-name","a","=","tag","attr-value","attr-equals","\n  ","snipcart","true",-1,"icon","icon-link","div","operator","stripe",".","\u003E",3,"string","h3",":",true,2,"h2","nuxt-content-highlight","pre","line-numbers","keyword","{","}",",","Nuxt.js","nofollow","noopener","noreferrer","_blank","\u003C","\u003C\u002F",false,"English","Payment tool","function","(",")","property-access","\u002Fstore\u002F_sku.vue"," is charging ","LIVE KEY","rel"," href","html","language-html","script","USD 2.00","build-ecommerce-website-with-nuxt-snipcart-stripe-en",Array(2),"preface","Preface","product-page-display","Product page display","payment-tool","checkoutshopping-cart-tool","Checkout(shopping cart) tool","why-snipcart","Why snipcart","integrate-with-snipcart","Integrate with Snipcart","testing-in-local-environment","Testing in local environment","function-going-online","Function going online","use-stripes-api-key-in-snipcart","Use Stripe's API KEY in Snipcart","generate-live-key-in-snipcart","Generate LIVE KEY in Snipcart","use-snipcarts-live-key-in-nuxt","Use Snipcart's LIVE KEY in Nuxt","conclusion","Conclusion","Etsy"," 、 ","await","fetch","language-js","async","var","control-flow","method",";"," and "," under ","link","'preconnect'","button","'","title","id","data-config-modal-style","side","data-api-key","hidden","localhost:3000","https:\u002F\u002Ftunnel.staqlab.com","2021-03-14T11:46:51.284Z","build-ecommerce-website-with-nuxt-snipcart-stripe","用nuxt、snipcart和stripe建立一个电商网站","Tech","USD 1.00","USD 3.00")));