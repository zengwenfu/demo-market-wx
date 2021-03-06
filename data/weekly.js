/**
 * Created by yeyuanqiong on 2017/12/3.
 */
module.exports = {
    "code": "0000",
    "msg": "",
    "data": {
        "_id": "5a115355aae9b127c7dc25e8",
        "isPublish": true,
        "num": "001",
        "createTime": "2017-11-19 17:48:05",
        "__v": 0,
        "updateTime": "2017-11-27 11:14:26",
        "summary": "本期为菲麦前端周刊的首刊，分类栏目包括：菲麦自研、踩坑笔记、实践指南、优化加速、前沿资讯以及思考感悟，在周刊类栏目算是比较多的，也许尚有不合理之处，请大家多多指正，希望可以汇聚更多的优异文章推送给大家",
        "publishTime": "2017-11-27 11:14:26",
        "columns": [
            {
                "_id": "5a115355aae9b127c7dc25eb",
                "name": "菲麦自研",
                "articles": [
                    {
                        "_id": "5a1b7d34697b175c1fa29770",
                        "summary": "时至今日，Js 的运行环境不再局限于浏览器，已经可以扩展到后台 Node，Native 端 RN/Weex，在这种情况下，我们需要将宿主和 Js 的东西剥离来看，Js 的归 Js 宿主的归宿主",
                        "author": "小虫巨蟹",
                        "url": "https://www.jianshu.com/p/21cbfae593d8",
                        "title": "Js 的多宿主时代"
                    },
                    {
                        "title": "event loop一篇文章足矣",
                        "url": "https://www.jianshu.com/p/de7aba994523",
                        "author": "sunny519111",
                        "summary": "Js 的执行环境是一个单线程，会按顺序执行代码，但是JavaScript又是可以异步，这两者感觉有冲突，但是本质上，如果理解浏览器的事件循环机制（event loop），就会觉得并不冲突",
                        "_id": "5a1b7d7a697b175c1fa29771"
                    }
                ]
            },
            {
                "_id": "5a115355aae9b127c7dc25ea",
                "name": "踩坑笔记",
                "articles": [
                    {
                        "title": "一次 H5 「保存页面为图片」 的踩坑之旅",
                        "url": "https://juejin.im/post/5a17c5e26fb9a04527254689",
                        "author": "丁香园F2E",
                        "summary": "网页保持为图片的基本过程，使用 html2canvas 来分析 html dom 将其转化为 canvas，再由 canvas 转化为图片，并通过链接完成下载",
                        "_id": "5a1a9d04697b175c1fa29763"
                    },
                    {
                        "title": "前端本地文件操作与上传",
                        "url": "https://juejin.im/post/5a193b4bf265da43052e528a",
                        "author": "人人网 FED",
                        "summary": "前端无法像原生APP一样直接操作本地文件，否则的话打开个网页就能把用户电脑上的文件偷光了，所以需要通过用户触发。结合 FormData 和 FileReader 可以很好的实现 ajax 文件上传功能",
                        "_id": "5a1a9e81697b175c1fa29764"
                    }
                ]
            },
            {
                "_id": "5a1b7dc5697b175c1fa29772",
                "name": "实践指南",
                "articles": [
                    {
                        "title": "如何实现H5小游戏—植物大战僵尸",
                        "url": "https://juejin.im/post/5a16431f6fb9a0451f309975?utm_source=gold_browser_extension",
                        "author": "弦云孤赫",
                        "summary": "植物大战僵尸这款经典游戏相信大家都玩过，最近我用原生JS+ES6语法，并通过canvas绘制的方式实现了这个游戏的一些基本功能，在这里我会介绍一下实现这个游戏的心路历程。",
                        "_id": "5a1b7e0d697b175c1fa29773"
                    },
                    {
                        "_id": "5a1b7ea1697b175c1fa29774",
                        "summary": "CSS3的动画相关的基础的属性基本都涉猎过了，个人认为，其中最复杂的是d:path()路径变形动画，超过3D，而位移、轨迹、旋转、缩放、斜切什么的，相对简单一些，但作为非动画设计师而言，灵活的掌握这些基本的动画加以无穷无尽的变换，就已经能做出很多华丽丽的效果了。",
                        "author": "泱泱",
                        "url": "https://juejin.im/post/5a150fc06fb9a0451e3f7042",
                        "title": "不炫技，SVG+CSS3 旋转动画属性就能实现的梦幻效果"
                    }
                ]
            },
            {
                "name": "优化加速",
                "_id": "5a1b7f47697b175c1fa29775",
                "articles": [
                    {
                        "_id": "5a1b7fa3697b175c1fa29776",
                        "summary": "chrome 和 Node.js 都使用了 V8 引擎，V8 引擎设计的初衷就是为了提高 JavaScript 的执行性能，作为前端工程师，应该懂点 V8 引擎，本文介绍了优化代码的一些方法，看看有没有帮助你的呢？\n",
                        "author": "春雪",
                        "url": "https://github.com/xitu/gold-miner/blob/master/TODO/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code.md",
                        "title": "JavaScript 如何工作：在 V8 引擎里 5 个优化代码的技巧"
                    }
                ]
            },
            {
                "_id": "5a115355aae9b127c7dc25e9",
                "name": "前沿资讯",
                "articles": [
                    {
                        "title": "AI 都会瞪你了，离杀你还会远么！？",
                        "url": "https://mp.weixin.qq.com/s?__biz=MzA5NDc1NzQ4MA==&mid=2653309126&idx=1&sn=55c0fc58ab659b77f4c2f3b6a7e46a18&chksm=8b9b5fc1bcecd6d780d1a5b8422889171eefe8d5e916e92f8ce6de695c1f1d24e1cd66933431&mpshare=1&scene=1&srcid=1126gVD6hqKQoXqKSrzHNAaI&pass_ticket=QbCHE98smG5dQgFETAgG%2FtHXhG6AZanxvNFpDNuO522l1s%2BD3%2Fu0x6YZB2wxwLuG#rd",
                        "author": "差评君",
                        "summary": "一个新生事物是需要野蛮生长的，但凡事总要有规矩。\n不然现在各大巨头公司还有各国分立各做各的，以后可能不通用不说，要是哪家一个不小心搞出来个天网，岂不是大家要一起坐核弹上天了？。。。",
                        "_id": "5a1ab1be697b175c1fa29768"
                    },
                    {
                        "_id": "5a1b80b9697b175c1fa29777",
                        "summary": "我们很高兴地宣布Angular 5.0.0——五角形甜甜圈发布啦！这又是一个主版本，包含新功能并修复了很多bug。它再次体现了我们把Angular做得更小、更快、更好用的一贯目标。",
                        "author": "为之漫笔 ",
                        "url": "http://www.zcfy.cc/article/version-5-0-0-of-angular-now-available-angular-blog-4494.html",
                        "title": "Angular 5.0.0来啦"
                    }
                ]
            },
            {
                "_id": "5a1b8199697b175c1fa29778",
                "name": "思考感悟",
                "articles": [
                    {
                        "title": "iOS开发者的大前端感悟：向前端说对不起",
                        "url": "https://juejin.im/post/5a1aa1adf265da43310d8677",
                        "author": "halohily",
                        "summary": "很多前端工程师会把自己比作“魔法师”，而对于JavaScript这门语言，我也想把它唤作一门“有魔力的语言”。因为这群有无限想法的人，真的在用它创造各种让你惊叹的事物。",
                        "_id": "5a1b81bc697b175c1fa29779"
                    }
                ]
            }
        ]
    }
}