import projectConfig from '/notes/pagic.config.js';
export default {
    'prev': {
        "text": "Foo",
        "link": "folder/foo.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "folder/bar.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "folder/bar.html",
    'title': "Bar",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Bar</h1>\n<p>The bar page.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Bar"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The bar page.</p>'
        } }),
    'toc': null,
    'author': "biskur",
    'contributors': [
        "biskur"
    ],
    'date': "2021-01-02T09:02:07.000Z",
    'updated': null,
    'excerpt': "The bar page.",
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
                    "text": "React hooks test",
                    "link": "prml/react_hooks_test.html",
                    "pagePath": "prml/react_hooks_test.tsx"
                }
            ],
            "pagePath": "prml/README.md",
            "text": "模式识别与机器学习(Pattern Recognition and Machine Learning)"
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
