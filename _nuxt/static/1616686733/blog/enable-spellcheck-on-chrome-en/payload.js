__NUXT_JSONP__("/blog/enable-spellcheck-on-chrome-en", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{blog:{slug:q,description:"My Chrome used to check spelling for me when typing, but recently the spellcheck isn't working normally. I thought it was something related to coding, but it turns out to be just a browser setting thing.",date:"2020-05-01T00:00:00.000Z",language:r,title:"How to enable spell check on Chrome",tags:[s,"HTML","Tech"],comments:f,related_blog:["2017-05-28-hao123-issue"],toc:[{id:t,depth:i,text:u},{id:v,depth:i,text:w},{id:x,depth:i,text:y}],body:{type:"root",children:[{type:b,tag:j,props:{id:t},children:[{type:b,tag:g,props:{href:"#annoying-typos-driving-me-mad",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have been writing blog articles with both Chinese and English versions since April, and I can always find a lot of typos after posting the English version."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Also I've been using this "},{type:b,tag:e,props:{},children:[{type:a,value:"CMS"}]},{type:a,value:" that I built on my own, the editor just wouldn't show any spelling mistakes for me."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But the browser used to check spellings, when has it stopped?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I started searching some programming ways to solve it, but they won't work, then I tried searching only Chrome-related keywords, and fond the solution."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fchrome\u002Fcomments\u002F6ztplx\u002Fcant_enable_spell_check_in_chrome\u002F",rel:[z,A,B],target:C},children:[{type:a,value:"reddit discussion"}]},{type:a,value:" is the key solution that I found."}]},{type:a,value:c},{type:b,tag:j,props:{id:v},children:[{type:b,tag:g,props:{href:"#can-it-be-solved-with-codes",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes, and no."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If spellcheck is enabled on Chrome, you can control whether to allow this feature by setting "},{type:b,tag:e,props:{},children:[{type:a,value:D}]},{type:a,value:E},{type:b,tag:e,props:{},children:[{type:a,value:"spellcheck=\"false\""}]},{type:a,value:" for specific elements on your website or web apps."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And unlike other "},{type:b,tag:e,props:{},children:[{type:a,value:"true\u002Ffalse"}]},{type:a,value:" attributes, if you want it enabled, you have to address it explicitly with "},{type:b,tag:e,props:{},children:[{type:a,value:D}]},{type:a,value:" rather than just write down the attribute name, like "},{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cinput type=\"text\" spellcheck\u002F\u003E"}]},{type:a,value:". You can find some explanations "},{type:b,tag:g,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTML\u002FGlobal_attributes\u002Fspellcheck",rel:[z,A,B],target:C},children:[{type:a,value:"here"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But if it is disabled on Chrome, the codes are just useless, you will not be able to turn it on by force."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By "},{type:b,tag:G,props:{},children:[{type:a,value:"disabled"}]},{type:a,value:", I don't mean that you might really have clicked a button called "},{type:b,tag:e,props:{},children:[{type:a,value:"disable spellcheck"}]},{type:a,value:", it's possible that you just haven't "},{type:b,tag:G,props:{},children:[{type:a,value:"enabled"}]},{type:a,value:" the right setting. Believe me, I've been there too."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm a Chinese speaker, but I can also read Japanese and some Korean, so I added Japanese and Korean to browser language setting to stop Chrome translating Japanese and Korean pages. And I might have changed something that I shouldn't change at that time."}]},{type:a,value:c},{type:b,tag:j,props:{id:x},children:[{type:b,tag:g,props:{href:"#lets-set-it-right-on-chrome",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to "},{type:b,tag:e,props:{},children:[{type:a,value:"three dots \u003E Settings \u003E Advanced \u003E Languages \u003E Spell Check"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you only see a language "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" but without specific country name in parenthesis next to it, like "},{type:b,tag:e,props:{},children:[{type:a,value:"English(United Kingdom)"}]},{type:a,value:E},{type:b,tag:e,props:{},children:[{type:a,value:"English(United States)"}]},{type:a,value:", then you will see this message:"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"checkSpell check isn’t supported for the languages you selected."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So please add those languages with country names in parenthesis and enable spellcheck for these languages, then your wavy red underline will be back and working."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Shortcut"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to any input box or textarea box, type anything, right click on any word, then go to "},{type:b,tag:e,props:{},children:[{type:a,value:"Spell check \u003E Language settings"}]},{type:a,value:F}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2020-05-01-enable-spellcheck-on-chrome-en",extension:".md",createdAt:H,updatedAt:H,prev:{slug:"editor-for-my-cms-of-my-nuxt-blog-en",title:"Write a control panel for my API-based CMS for Nuxt"},next:{slug:"roommate-relationship",title:"论室友关系"},relatedBlog:[{slug:"hao123-issue",description:"Chrome主页被hao123劫持了，该怎么办？",date:"2017-05-28T00:00:00.000Z",language:"中文",title:"记录一下解决Chrome主页被hao123劫持的过程",tags:[s,"首页劫持","技术"]}]},mySlug:q,keywords:[],ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"\u002Fstore\u002Ftemplate-ebay-desc",feat:f,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"\u002Fstore\u002Fcalendar-8-page",feat:f,tag:I},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"\u002Fstore\u002Fcalendar-weekly",feat:f,tag:p},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"\u002Fstore\u002Fcalendar-100-day",feat:f,tag:I},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"\u002Fstore\u002Fcalendar-monthly-elegant",feat:h,tag:J},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"\u002Fstore\u002Fexcel-bill-tracker",feat:h,tag:p},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"\u002Fstore\u002Fcalendar-annual",feat:h,tag:p},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"\u002Fstore\u002Fcalendar-monthly-vertical",feat:h,tag:J}]}],fetch:{},mutations:[]}}("text","element","\n","p","code",true,"a",false,2,"h2","true",-1,"span","icon","icon-link","USD 2.00","enable-spellcheck-on-chrome-en","English","Chrome","annoying-typos-driving-me-mad","Annoying typos driving me mad","can-it-be-solved-with-codes","Can it be solved with codes?","lets-set-it-right-on-chrome","Let's set it right on Chrome","nofollow","noopener","noreferrer","_blank","spellcheck=\"true\""," or ",".","em","2021-03-25T15:38:03.497Z","USD 1.00","USD 3.00")));