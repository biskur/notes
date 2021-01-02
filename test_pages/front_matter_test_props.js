import projectConfig from '/notes/pagic.config.js';
export default {
    'prev': null,
    'next': null,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "prml/front_matter.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/front_matter_test.html",
    'title': "Front matter test",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter test\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter test\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "biskur",
    'contributors': [
        "biskur"
    ],
    'date': "2021-01-02T09:02:07.000Z",
    'updated': "2021-01-02T16:52:11.000Z",
    'excerpt': "This is a front matter test page. The front matter content outputPath: test_pages/front_matter_test.html title: Front matter test toc: null prev: null next: null ",
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
