import projectConfig from '/notes/pagic.config.js';
export default {
    'prev': {
        "text": "Introduction",
        "link": "introduction/index.html"
    },
    'next': {
        "text": "引言",
        "link": "prml/ch01.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "prml/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "prml/index.html",
    'title': "模式识别与机器学习(Pattern Recognition and Machine Learning)",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>模式识别与机器学习(Pattern Recognition and Machine Learning)</h1>\n<h2 id="%E7%9B%AE%E5%BD%95">目录<a class="anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<ol>\n<li><a href="./ch01.html">Introduction - 引言</a></li>\n<li><a href="./ch02.html">Probability Distributions - 概率分布</a></li>\n<li><a href="./ch03.html">Linear Models for Regression - 线性回归模型</a></li>\n<li><a href="./ch04.html">Linear Models for Classification - 线性分类模型</a></li>\n<li><a href="./ch05.html">Neural Networks - 神经网络</a></li>\n<li><a href="./ch06.html">Kernel Methods - 核方法</a></li>\n<li><a href="./ch07.html">Sparse Kernel Machines - 稀疏核机</a></li>\n<li><a href="./ch08.html">Graphical Models - 图模型</a></li>\n<li><a href="./ch09.html">Mixture Models and EM - 混合模型与期望最大化</a></li>\n<li><a href="./ch10.html">Approximate Inference - 近似推断</a></li>\n<li><a href="./ch11.html">Sampling Methods - 抽样方法</a></li>\n<li><a href="./ch12.html">Continuous Latent Variables - 连续潜变量</a></li>\n<li><a href="./ch13.html">Sequential Data - 顺序模型</a></li>\n<li><a href="./ch14.html">Combining Models - 组合模型</a></li>\n</ol>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6A21\u5F0F\u8BC6\u522B\u4E0E\u673A\u5668\u5B66\u4E60(Pattern Recognition and Machine Learning)"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%9B%AE%E5%BD%95">目录<a class="anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<ol>\n<li><a href="./ch01.html">Introduction - 引言</a></li>\n<li><a href="./ch02.html">Probability Distributions - 概率分布</a></li>\n<li><a href="./ch03.html">Linear Models for Regression - 线性回归模型</a></li>\n<li><a href="./ch04.html">Linear Models for Classification - 线性分类模型</a></li>\n<li><a href="./ch05.html">Neural Networks - 神经网络</a></li>\n<li><a href="./ch06.html">Kernel Methods - 核方法</a></li>\n<li><a href="./ch07.html">Sparse Kernel Machines - 稀疏核机</a></li>\n<li><a href="./ch08.html">Graphical Models - 图模型</a></li>\n<li><a href="./ch09.html">Mixture Models and EM - 混合模型与期望最大化</a></li>\n<li><a href="./ch10.html">Approximate Inference - 近似推断</a></li>\n<li><a href="./ch11.html">Sampling Methods - 抽样方法</a></li>\n<li><a href="./ch12.html">Continuous Latent Variables - 连续潜变量</a></li>\n<li><a href="./ch13.html">Sequential Data - 顺序模型</a></li>\n<li><a href="./ch14.html">Combining Models - 组合模型</a></li>\n</ol>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li></ol></nav>'
        } }),
    'author': "biskur",
    'contributors': [
        "biskur"
    ],
    'date': "2021-01-02T16:52:11.000Z",
    'updated': "2021-01-04T16:14:46.000Z",
    'excerpt': "目录 1. Introduction - 引言 2. Probability Distributions - 概率分布 3. Linear Models for Regression - 线性回归模型 4. Linear Models for Classification - 线性分类模型 5. Neural Networks - 神经网络 6. Kernel Meth...",
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
        }
    ]
};
