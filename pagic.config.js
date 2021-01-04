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
                link: 'prml/README.md',
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
                    'prml/ch14.md',
                ],
            },
        ],
    },
    tools: {
        editOnGitHub: true,
        backToTop: true,
    },
    port: 8000,
};
