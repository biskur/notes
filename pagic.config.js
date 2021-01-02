// import { React } from 'https://deno.land/x/pagic/mod.ts';
export default {
    srcDir: '.',
    exclude: ['LICENSE'],
    root: '/notes/',
    theme: 'docs',
    plugins: ['sidebar', 'prev_next'],
    title: 'Reading notes',
    description: 'Tracking what I am learning',
    // To use jsx syntax, please rename this file to pagic.config.tsx
    // head: <>
    //   <link rel="icon" type="image/png" href="/favicon.png" />
    //   <script src="/assets/custom.js" />
    // </>,
    nav: [
        {
            text: 'Docs',
            link: '/notes/introduction/index.html',
        },
        {
            text: 'About',
            link: '/notes/about/index.html',
            align: 'right',
        },
    ],
    github: 'https://github.com/biskur/notes',
    sidebar: {
        '/': [
            'introduction/README.md',
            {
                link: 'test_pages/README.md',
                children: ['test_pages/markdown_test.md', 'test_pages/front_matter.md', 'test_pages/react_hooks_test.tsx'],
            },
            {
                text: 'Folder',
                children: [
                    'folder/foo.md',
                    {
                        text: 'Custom sidebar text',
                        link: 'folder/bar.md'
                    }
                ]
            }
        ],
    },
    tools: {
        editOnGitHub: true,
        backToTop: true,
    },
    port: 8000,
};
