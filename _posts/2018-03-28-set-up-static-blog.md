---
layout: post
title: 如何搭建静态个人博客
description: >
  我的个人博客 = Github代码托管 + Jekyll模板 + Godaddy域名 + Cloudflare安全认证 + disqus评论系统 + 反向代理访问disqus(墙内) + zoho自主域名邮箱
tags: [涨知识]
author: author1
comments: true
canonical_url: http://hyde.getpoole.com/2012/02/06/whats-jekyll/
---

折腾了半个月，终于算是建好了我的小窝，虽然还没有成为专业的程序媛，但是至少算是建立了一片自己的天地啦。

以下就是这次搭建博客的完整流程，欢迎参考~

[如何在Github上玩耍？](#static-blog-01)

[静态博客模板哪家强？](#static-blog-02)

[买个高大上的域名咋样？](#static-blog-03)

[域名只能用http访问怎么办？](#static-blog-04)

[做个有心人，用Google Analytics分析你的网站](#static-blog-05)

[静态博客没有自带的评论系统怎么办？](#static-blog-06)

[disqus被墙了怎么办？](#static-blog-07)

[有网站了还想要自己域名的邮箱怎么整？](#static-blog-08)

***

<h3 id="static-blog-01">如何在Github上玩耍？</h3>

Github是一个可以免费进行代码托管和版本控制的平台，简单来说，就是你把代码储存在他们网站的云端，他们帮你保管，不光能在线修改、离线修改，还能记录下你每一次修改了哪里，而且不收你的钱。

说句实话，“免费”这两个字最吸引我。

记得本科毕业时，毕业论文总共大改了13次，每次都要另存为新的文件名，于是我有了14个差不多名称的doc文件，其中有三个还是同一天保存的。可是现在翻开文件夹，想回忆一下当时写论文的过程，却完全没有任何头绪。

于是宇宙终极难题出现了：我到底改了啥？

如果使用word自带的校阅批改功能，添加“增”、“删”、“改”的高亮注释的话，也还算可以，但是如何能把握每次修改的不同的地方呢？

这就要提一提Github的修改记录高亮功能了。

你的每一次保存都会留下记录，而这一次保存的内容跟上一次保存的内容有什么差别，都能用高亮颜色告诉你。

有了高亮的对比之后，改了哪里，怎么改的，一目了然。如果后期觉得改得不好，还能再改回去，绝对是各位手残党的福音。

不过我现在只能对着那14个doc文件干瞪眼了。

那么我们怎样才能使用Github进行版本管理呢？

首先，要注册一个Github账号，然后为你的项目建立代码仓库（repository），往里面上传你正在做的代码文件。你可以用Git命令工具或者用GitHub桌面版进行管理，每次在电脑本地修改后都将你的修改推送上GitHub，每次修改都留有记录，这样就可以进行版本控制了。

Git命令对我来说有点复杂，所以我用的是GitHub桌面版软件，也很方便。安装软件之后，把你的账号下的repo克隆到电脑本地，在本地修改、保存后，打开Github桌面版，先commit，给你这次的更新写个小备注，然后push上云端，就能看到了。

GitHub上建立公开的repo是免费的，而且不限个数，不限大小，不过当然不能滥用，那样会被封号的。

有关Github的空间和使用限制<a href='https://help.github.com/articles/what-is-my-disk-quota' target='_blank'>看这里</a>。

如果你已经用HTML或者Markdown这样的标记语言写好了静态网页文件，你就可以用Github的静态网页部署功能——Github Pages，来建立一个静态的网页项目，比如一个项目展示网页、个人简历页面，或者任何一个你希望大家看到的页面。

在你的repo的setting的Options那里找到“Github Pages”，选择一个分支，然后save即可发布。

Github上只能部署静态页面，不能部署动态页面和数据库，不过用来做个人博客已经是很够用了。

关于静态页面和动态页面的区别<a href='https://zhidao.baidu.com/question/40565483.html' target='_blank'>看这里</a>。

通常在部署静态博客的时候，大家都会选择使用 username.github.io(username即为你注册的用户名) 这种Github免费提供的二级域名来作为repo的名称，然后在setting里面发布你的pages，发布成功后，username.github.io就成为你的博客地址啦。

国内有一个类似Github的代码托管平台<a href='https://www.coding.net' target='_blank'>coding.net</a>，也可以云储存代码、查看修改记录、部署网页、使用它的二级域名，而它提供的网页部署功能除了静态之外，甚至能部署动态的网页，还免费提供数据库，不过总空间有限制就是了。

大家根据自己的需要来选择平台吧~

<h3 id="static-blog-02">静态博客模板哪家强？</h3>

我们已经知道静态页面是什么了，那么静态博客又是怎么配置的呢？

如果我们写的都是HTML页面，那么只能自己在各个文件中指定互相的引用关系，如果想要用不同的HTML文件来写日志，再做一个HTML页面的总目录，这样一来每次要更新这些引用关系的时候都要伤筋动骨。那么有没有一种方法，可以只需要写新的日志，而日志的目录，或是文档结构可以自动更新呢？

于是现在就到了介绍Jekyll的时间啦！

Jekyll是一个静态博客网站生成器，只要经过一定的配置，服务器就可以根据配置去解析文件夹里的文件，帮你生成博客目录页面，还能应用各个模块的模板，快速组合成一个好看的页面。

其实除了Jekyll之外还有其他的静态博客生成器，但是我不知为啥被Jekyll这个名字吸引了，所以就选用了这个。其实我根本没有看过《化身博士》(Dr Jekyll and Mr Hyde)呢。。。

大部分的Jekyll教程都会说需要在电脑本地安装Ruby，然后gem install Jekyll，以实现在电脑本地也可以预览最终效果，但是不知为啥我的电脑好不容易装好了Ruby，却怎么都装不上Jekyll，导致我只能push上Github之后才能在Github上直接看到效果。

如果大家有兴趣，可以参照<a href='https://segmentfault.com/a/1190000012468796' target='_blank'>这篇文章</a>。

就算没有安装Jekyll的运行环境，只要我们把文件配置好，上到Github之后照样能运行。

大家可能会担心Jekyll的配置会很复杂，不过这种担心完全是不必要的，网上有很多Jekyll框架模板可以免费下载使用，挑选模板<a href='http://jekyllthemes.org' target='_blank'>看这里</a>。

我选中的这个和Jekyll的名字非常搭，它叫“Hydejack”，是很简洁的左右两栏布局，整体颜色是非常沉静的绿色，决定用它之后，我就点进它的主题页面，点“download”下载文件包，解压缩，全部放进电脑本地的 username.github.io 那个repo里面，然后就需要开始修改配置。

Hydejack里面需要修改的配置文件是\_config.yml，里面可以设置你的个人站点的站点名、个人简介、你想展示的社交网站账号、Google Analytics账号设置，等等。

总的来说就是声明这个网站为你所有的配置。

然后你可以修改about.md来配置个人介绍页，再到\_featured_tags文件夹下配置文章标签，最后就是按照格式添加markdown格式的日志文章进入\_posts这个文件夹，命名规则为 year-month-day-article-name.md。

markdown语法介绍<a href='http://xianbai.me/learn-md' target='_blank'>看这里</a>。

每次新增文章之后，都可以按照 save -> commit -> push 的方式将你的新文章推送到github上，这样别人就能通过访问 username.github.io 来看到你的新日志啦。

<h3 id="static-blog-03">买个高大上的域名咋样？</h3>

当我已经有了github给的二级域名以后，不禁心想，如果我还可以有一个自己的域名，像什么txxbxx.com啦，qx.com啦，bxxdx.com啦，要是我也有一个这样的域名指向我的博客那该多好啊。

既然github提供免费绑定域名的服务，我何不买一个来试试？

说干就干，我开始百度/google 购买域名的方式和步骤，最终决定一件事，不要墙内的域名提供商，包括马云爸爸的阿里云。

墙这个事啊，我们控制不了，但是我自己的日常生活和工作都很受墙的影响，所以真的是希望尽量远离。

假设你是在阿里云上买空间，那么在绑定域名的时候，阿里云会要求你一定要使用备案过的域名，而备案的步骤看得人眼晕，且每一步都是奔着查水表来的。

既然github没有这些查水表的要求，而我也不是非要用阿里云不可，那就还是另外看看别的服务吧。

然后就是境外的域名提供商了，搜索结果里排名第一的是godaddy，以前我也有听说过，感觉是个可靠的选择，于是就注册，选定域名，购买，绑定信用卡。最后的结果是，域名的首年费用是8港币，第二年六十多港币，我以七十多块港币买下了我名字的拼音的.com域名——houzhenni.com的两年的使用权。

域名买好了，得绑定到username.github.io这个repo上才行。

其实如果这个repo不是直接用你的二级域名，那么你的其他repo还能用别的域名，但是一旦将二级域名的repo绑定了之后，则所有其他的repo都会自动使用这个域名了。

域名绑定主机的步骤：

* Github方面

    * 在username.github.io这个repo的外层文件夹里新建一个叫作“CNAME”的没有扩展名的文件，里面只写一行内容，就是你的域名去掉“http://”的后面的部分。

* Godaddy方面

    * 可以参考<a href="https://www.zhihu.com/question/31377141" target="_blank">这篇知乎问答</a>    
    核心思想就是在github设置了CNAME之后，也要在godaddy上设置DNS解析，添加“A name”、“@”等等记录指向github。

设置好之后，没一会就能用域名访问了。

<h3 id="static-blog-04">域名只能用http访问怎么办？</h3>

<h3 id="static-blog-05">做个有心人，用Google Analytics分析你的网站</h3>

<h3 id="static-blog-06">静态博客没有自带的评论系统怎么办？</h3>

<h3 id="static-blog-07">disqus被墙了怎么办？</h3>

<h3 id="static-blog-08">有网站了还想要自己域名的邮箱怎么整？</h3>

待续。。。
