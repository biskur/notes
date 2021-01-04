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
    'title': "Pattern Recognition and Machine Learning",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pattern Recognition and Machine Learning</h1>\n<h2 id="toc">TOC<a class="anchor" href="#toc">§</a></h2>\n<ol>\n<li><a href="./ch01.html">Introduction - 引言</a></li>\n<li>Probability Distributions - 概率分布</li>\n<li>Linear Models for Regression - 线性回归模型</li>\n<li>Linear Models for Classification - 线性分类模型</li>\n<li>Neural Networks - 神经网络</li>\n<li>Kernel Methods - 核方法</li>\n<li>Sparse Kernel Machines - 稀疏核机</li>\n<li>Graphical Models - 图模型</li>\n<li>Mixture Models and EM - 混合模型与期望最大化</li>\n<li>Approximate Inference - 近似推断</li>\n<li>Sampling Methods - 抽样方法</li>\n<li>Continuous Latent Variables - 连续潜变量</li>\n<li>Sequential Data - 顺序模型</li>\n<li>Combining Models - 组合模型</li>\n</ol>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pattern Recognition and Machine Learning"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="toc">TOC<a class="anchor" href="#toc">§</a></h2>\n<ol>\n<li><a href="./ch01.html">Introduction - 引言</a></li>\n<li>Probability Distributions - 概率分布</li>\n<li>Linear Models for Regression - 线性回归模型</li>\n<li>Linear Models for Classification - 线性分类模型</li>\n<li>Neural Networks - 神经网络</li>\n<li>Kernel Methods - 核方法</li>\n<li>Sparse Kernel Machines - 稀疏核机</li>\n<li>Graphical Models - 图模型</li>\n<li>Mixture Models and EM - 混合模型与期望最大化</li>\n<li>Approximate Inference - 近似推断</li>\n<li>Sampling Methods - 抽样方法</li>\n<li>Continuous Latent Variables - 连续潜变量</li>\n<li>Sequential Data - 顺序模型</li>\n<li>Combining Models - 组合模型</li>\n</ol>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#toc">TOC</a></li></ol></nav>'
        } }),
    'author': "biskur",
    'contributors': [
        "biskur"
    ],
    'date': "2021-01-02T16:52:11.000Z",
    'updated': "2021-01-04T15:55:35.000Z",
    'excerpt': "TOC 1. Introduction - 引言 2. Probability Distributions - 概率分布 3. Linear Models for Regression - 线性回归模型 4. Linear Models for Classification - 线性分类模型 5. Neural Networks - 神经网络 6. Kernel Metho...",
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
                    "text": "Markdown test",
                    "link": "prml/markdown_test.html",
                    "pagePath": "prml/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "prml/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "prml/react_hooks_test.html",
                    "pagePath": "prml/react_hooks_test.tsx"
                }
            ],
            "pagePath": "prml/README.md",
            "text": "Pattern Recognition and Machine Learning"
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        }
    ]
};
