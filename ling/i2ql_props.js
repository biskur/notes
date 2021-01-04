import projectConfig from '/notes/pagic.config.js';
export default {
    'prev': {
        "text": "南吳韻母",
        "link": "ling/shi2013.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "ling/i2ql.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "ling/i2ql.html",
    'title': "计量语言学导论",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>计量语言学导论</h1>\n<h2 id="%E4%B8%89%E5%A4%A7%E7%B1%BB%E5%AE%9A%E5%BE%8B">三大类定律<a class="anchor" href="#%E4%B8%89%E5%A4%A7%E7%B1%BB%E5%AE%9A%E5%BE%8B">§</a></h2>\n<ul>\n<li>分布律：语言结构在系统中的定量描述</li>\n<li>函数律：语言结构及其属性之间的关系</li>\n<li>演化律：语言性质变化的动力学模型</li>\n</ul>\n<h2 id="%E8%AE%A1%E9%87%8F%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%AE%9A%E5%BE%8B">计量语言学定律<a class="anchor" href="#%E8%AE%A1%E9%87%8F%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%AE%9A%E5%BE%8B">§</a></h2>\n<p>Zipf秩频分布律，高频幂律+低频比例(组合数学?)</p>\n<p>Menzerath结构长度律，幂*指数</p>\n<p>Piotrowski语言演化律，对率</p>\n<p>词长分布律，xx泊松分布，Zipf-Alekseev模型</p>\n<p>词长词频的协同语言模型，幂律</p>\n<p>词长与多义度，幂律</p>\n<p>多义度与同义度，幂律</p>\n<p>词长与同义度，幂*指数</p>\n<p>频次与多文度，幂*指数</p>\n<p>Frumkina文本块分布律，负超几何</p>\n<h2 id="%E5%8D%8F%E5%90%8C%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%85%AC%E7%90%86">协同语言学公理<a class="anchor" href="#%E5%8D%8F%E5%90%8C%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%85%AC%E7%90%86">§</a></h2>\n<p>语言是一个自组织和自调节的系统，是一个特殊的动态适应系统</p>\n<p>变量：长度L、频度F、多义度PS、同义度SN、多文度PT、词汇量LS、音素数PN</p>\n<h2 id="%E8%AF%AD%E8%A8%80%E7%9A%84%E5%A4%8D%E6%9D%82%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B">语言的复杂网络模型<a class="anchor" href="#%E8%AF%AD%E8%A8%80%E7%9A%84%E5%A4%8D%E6%9D%82%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B">§</a></h2>\n<p>图、节点、边、向、权</p>\n<p>节点度、度分布、小世界属性、相关性、中心性/中心势</p>\n<p>度分布一般满足幂律分布，称作无标度网络</p>\n<h2 id="%E7%96%91%E9%97%AE">(疑问)<a class="anchor" href="#%E7%96%91%E9%97%AE">§</a></h2>\n<ol>\n<li>幂律、泊松分布是常见的数据规律，计量语言学定律反映的是真实的语言规律还是人类社会、心理行为在语言上的投射？</li>\n<li>协同模型、复杂网络模型长于分类，但对语言本质规律有无建树？</li>\n<li>协同模型、复杂网络模型还是在系统论角度下的描述，在计量语言学历史上地位如何？</li>\n</ol>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8BA1\u91CF\u8BED\u8A00\u5B66\u5BFC\u8BBA"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%B8%89%E5%A4%A7%E7%B1%BB%E5%AE%9A%E5%BE%8B">三大类定律<a class="anchor" href="#%E4%B8%89%E5%A4%A7%E7%B1%BB%E5%AE%9A%E5%BE%8B">§</a></h2>\n<ul>\n<li>分布律：语言结构在系统中的定量描述</li>\n<li>函数律：语言结构及其属性之间的关系</li>\n<li>演化律：语言性质变化的动力学模型</li>\n</ul>\n<h2 id="%E8%AE%A1%E9%87%8F%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%AE%9A%E5%BE%8B">计量语言学定律<a class="anchor" href="#%E8%AE%A1%E9%87%8F%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%AE%9A%E5%BE%8B">§</a></h2>\n<p>Zipf秩频分布律，高频幂律+低频比例(组合数学?)</p>\n<p>Menzerath结构长度律，幂*指数</p>\n<p>Piotrowski语言演化律，对率</p>\n<p>词长分布律，xx泊松分布，Zipf-Alekseev模型</p>\n<p>词长词频的协同语言模型，幂律</p>\n<p>词长与多义度，幂律</p>\n<p>多义度与同义度，幂律</p>\n<p>词长与同义度，幂*指数</p>\n<p>频次与多文度，幂*指数</p>\n<p>Frumkina文本块分布律，负超几何</p>\n<h2 id="%E5%8D%8F%E5%90%8C%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%85%AC%E7%90%86">协同语言学公理<a class="anchor" href="#%E5%8D%8F%E5%90%8C%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%85%AC%E7%90%86">§</a></h2>\n<p>语言是一个自组织和自调节的系统，是一个特殊的动态适应系统</p>\n<p>变量：长度L、频度F、多义度PS、同义度SN、多文度PT、词汇量LS、音素数PN</p>\n<h2 id="%E8%AF%AD%E8%A8%80%E7%9A%84%E5%A4%8D%E6%9D%82%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B">语言的复杂网络模型<a class="anchor" href="#%E8%AF%AD%E8%A8%80%E7%9A%84%E5%A4%8D%E6%9D%82%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B">§</a></h2>\n<p>图、节点、边、向、权</p>\n<p>节点度、度分布、小世界属性、相关性、中心性/中心势</p>\n<p>度分布一般满足幂律分布，称作无标度网络</p>\n<h2 id="%E7%96%91%E9%97%AE">(疑问)<a class="anchor" href="#%E7%96%91%E9%97%AE">§</a></h2>\n<ol>\n<li>幂律、泊松分布是常见的数据规律，计量语言学定律反映的是真实的语言规律还是人类社会、心理行为在语言上的投射？</li>\n<li>协同模型、复杂网络模型长于分类，但对语言本质规律有无建树？</li>\n<li>协同模型、复杂网络模型还是在系统论角度下的描述，在计量语言学历史上地位如何？</li>\n</ol>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%B8%89%E5%A4%A7%E7%B1%BB%E5%AE%9A%E5%BE%8B">三大类定律</a></li><li><a href="#%E8%AE%A1%E9%87%8F%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%AE%9A%E5%BE%8B">计量语言学定律</a></li><li><a href="#%E5%8D%8F%E5%90%8C%E8%AF%AD%E8%A8%80%E5%AD%A6%E5%85%AC%E7%90%86">协同语言学公理</a></li><li><a href="#%E8%AF%AD%E8%A8%80%E7%9A%84%E5%A4%8D%E6%9D%82%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B">语言的复杂网络模型</a></li><li><a href="#%E7%96%91%E9%97%AE">(疑问)</a></li></ol></nav>'
        } }),
    'author': "biskur",
    'contributors': [
        "biskur"
    ],
    'date': "2021-01-04T17:11:54.000Z",
    'updated': null,
    'excerpt': "三大类定律 - 分布律：语言结构在系统中的定量描述 - 函数律：语言结构及其属性之间的关系 - 演化律：语言性质变化的动力学模型 计量语言学定律 Zipf秩频分布律，高频幂律+低频比例(组合数学?) Menzerath结构长度律，幂*指数 P...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "prml/index.html",
            "children": [
                {
                    "text": "引言",
                    "link": "prml/ch01.html",
                    "pagePath": "prml/ch01.md"
                },
                {
                    "text": "概率分布",
                    "link": "prml/ch02.html",
                    "pagePath": "prml/ch02.md"
                },
                {
                    "text": "线性回归模型",
                    "link": "prml/ch03.html",
                    "pagePath": "prml/ch03.md"
                },
                {
                    "text": "线性分类模型",
                    "link": "prml/ch04.html",
                    "pagePath": "prml/ch04.md"
                },
                {
                    "text": "神经网络",
                    "link": "prml/ch05.html",
                    "pagePath": "prml/ch05.md"
                },
                {
                    "text": "核方法",
                    "link": "prml/ch06.html",
                    "pagePath": "prml/ch06.md"
                },
                {
                    "text": "稀疏核机",
                    "link": "prml/ch07.html",
                    "pagePath": "prml/ch07.md"
                },
                {
                    "text": "图模型",
                    "link": "prml/ch08.html",
                    "pagePath": "prml/ch08.md"
                },
                {
                    "text": "混合模型与期望最大化",
                    "link": "prml/ch09.html",
                    "pagePath": "prml/ch09.md"
                },
                {
                    "text": "近似推断",
                    "link": "prml/ch10.html",
                    "pagePath": "prml/ch10.md"
                },
                {
                    "text": "抽样方法",
                    "link": "prml/ch11.html",
                    "pagePath": "prml/ch11.md"
                },
                {
                    "text": "连续潜变量",
                    "link": "prml/ch12.html",
                    "pagePath": "prml/ch12.md"
                },
                {
                    "text": "顺序模型",
                    "link": "prml/ch13.html",
                    "pagePath": "prml/ch13.md"
                },
                {
                    "text": "组合模型",
                    "link": "prml/ch14.html",
                    "pagePath": "prml/ch14.md"
                }
            ],
            "pagePath": "prml/README.md",
            "text": "模式识别与机器学习(Pattern Recognition and Machine Learning)"
        },
        {
            "link": "ling/index.html",
            "children": [
                {
                    "text": "A Course in Phonetics",
                    "link": "ling/acip.html",
                    "pagePath": "ling/acip.md"
                },
                {
                    "text": "南吳韻母",
                    "link": "ling/shi2013.html",
                    "pagePath": "ling/shi2013.md"
                },
                {
                    "text": "计量语言学导论",
                    "link": "ling/i2ql.html",
                    "pagePath": "ling/i2ql.md"
                }
            ],
            "pagePath": "ling/README.md",
            "text": "语言学文献阅读摘记"
        }
    ]
};
