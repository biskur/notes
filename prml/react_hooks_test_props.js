import projectConfig from '/notes/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
export default {
    'prev': {
        "text": "Front matter test",
        "link": "test_pages/front_matter_test.html"
    },
    'next': {
        "text": "Foo",
        "link": "folder/foo.html"
    },
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
                            'prml/markdown_test.md',
                            'prml/front_matter.md',
                            'prml/react_hooks_test.tsx'
                        ],
                        link: 'prml/README.md'
                    },
                    {
                        children: [
                            'folder/foo.md',
                            {
                                link: 'folder/bar.md',
                                text: 'Custom sidebar text'
                            }
                        ],
                        text: 'Folder'
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
