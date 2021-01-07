import projectConfig from '/notes/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "prml/react_hooks_test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "prml/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            branch: 'main',
            description: 'Tracking what I am learning',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'LICENSE',
                'dist'
            ],
            github: 'https://github.com/biskur/notes',
            include: undefined,
            nav: [
                {
                    link: '/notes/introduction/index.html',
                    text: 'Docs'
                },
                {
                    align: 'right',
                    link: '/notes/about/index.html',
                    text: 'About'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next'
            ],
            port: 8000,
            root: '/notes/',
            serve: false,
            sidebar: {
                '/': [
                    'introduction/README.md',
                    {
                        children: [
                            'prml/ch01.md',
                            'prml/ch02.md',
                            'prml/ch03.md',
                            'prml/ch04.md',
                            'prml/ch05.md',
                            'prml/ch06.md',
                            'prml/ch07.md',
                            'prml/ch08.md',
                            'prml/ch09.md',
                            'prml/ch10.md',
                            'prml/ch11.md',
                            'prml/ch12.md',
                            'prml/ch13.md',
                            'prml/ch14.md'
                        ],
                        link: 'prml/README.md'
                    },
                    {
                        children: [
                            'ling/acip.md',
                            'ling/shi2013.md',
                            'ling/i2ql.md'
                        ],
                        link: 'ling/README.md'
                    },
                    {
                        children: [
                            'techs/docker_in_action_2e/README.md',
                            'techs/docker_in_action_2e/ch01.md'
                        ],
                        text: 'Docker实战（第二版）'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: 'Reading notes',
            tools: {
                backToTop: true,
                editOnGitHub: true
            },
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "prml/react_hooks_test.html", pagePath: "prml/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
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
        },
        {
            "text": "Docker实战（第二版）",
            "children": [
                {
                    "text": "前言",
                    "link": "techs/docker_in_action_2e/index.html",
                    "pagePath": "techs/docker_in_action_2e/README.md"
                },
                {
                    "text": "序言",
                    "link": "techs/docker_in_action_2e/ch01.html",
                    "pagePath": "techs/docker_in_action_2e/ch01.md"
                }
            ]
        }
    ]
};
