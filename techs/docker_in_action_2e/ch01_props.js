import projectConfig from '/notes/pagic.config.js';
export default {
    'prev': {
        "text": "前言",
        "link": "techs/docker_in_action_2e/index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "techs/docker_in_action_2e/ch01.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "techs/docker_in_action_2e/ch01.html",
    'title': "序言",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>序言</h1>\n<p>自2013年开始参与Docker和容器社区以来，Docker已经走过了很长的路。而自2016年Jeff发布本书第一版以来，Docker也发生了一些意想不到的变化。值得庆幸的是，大部分面向用户的界面和核心概念都以向后兼容的方式被保留了下来。本书前三分之二的内容只需要对新增功能或关闭的问题进行更新。正如预期的那样，上一版的第3部分需要全面重写。自上一本书出版以来，我们已经看到了在编排、应用连接、专有云容器产品、多容器应用打包和函数即服务平台方面的进展。本版重点介绍使用Docker容器的基本概念和实践，并避免使用快速变化的技术来补充Docker。</p>\n<p>最大的变化是几种容器编排器的开发和采用。容器编排器的主要目的是在主机集群上运行以服务为模型的应用程序。Kubernetes是这些编排器中最著名的一种，已经得到了大量的采用，并获得了各大技术厂商的支持。云原生计算基金会就是围绕这个项目成立的，如果你问他们，“云原生”应用就是为部署在Kubernetes上而设计的。但重要的是，不要太过纠结于营销或具体的编排技术。本书没有涉及Kubernetes，原因有二。</p>\n<p>虽然Kubernetes包含在Docker for Desktop中，但是它庞大，而且处于不断变化之中。永远不可能在少数章节中，甚至在一本不到400页的书中深入地介绍。网上有大量优秀的资源，也有关于Kubernetes的精彩出版书籍。我们希望在本书中专注于大的理念——服务编排，而不至于在细枝末节中迷失方向。</p>\n<p>其次，Docker搭载Swarm集群和编排。这个系统对于小型集群，或者边缘计算环境中的集群来说是绰绰有余的。大量的组织每天都在愉快地使用Swarm。Swarm对于同时开始使用编排和容器的人来说非常好。大多数工具和想法都可以轻松地从容器延续到服务。应用程序开发人员可能会从这种方法中受益最大。系统管理员或集群运营人员可能会感到失望，或者会发现Swarm满足他们的需求。但是，我们不确定他们是否能找到一个长篇的书面资源来满足他们的需求。</p>\n<p>接下来最大的变化是，如今Docker无处不在。Docker for Desktop很好地集成在苹果和微软操作系统上使用。它向用户隐藏了底层虚拟机。在大多数情况下，这是一个成功；在macOS上，体验几乎是无缝的。在Windows上，至少在几分钟内，事情似乎很顺利。Windows用户将处理一个令人生畏的配置变化，从企业防火墙、激进的防病毒配置、shell偏好和几个层次的间接性。这种变化使得为Windows提供书面内容成为不可能。任何这样的尝试都会在材料投入生产之前就已经过时了。出于这个原因，我们再次将包含的语法和系统特定材料限制在Linux和macOS上。读者可能会发现所有的例子都能在他们的环境中运行，但我们不能保证它们会或合理地帮助指导故障排除工作。</p>\n<p>接下来，让一个安装了Docker的互联网虚拟机变得微不足道。每一个主要的和次要的云提供商都提供了这样的服务。出于这个原因，我们已经删除了与Docker Machine和安装Docker有关的材料。我们相信，我们的读者将能够找到最适合他们选择的平台的安装说明。而如今，他们甚至可能会跳过这一步，采用AWS ECS等众多容器优先的云平台之一。本书不会涉及这些平台。它们各有特色，难以综合讨论。而且它们都在采用故事和文档方面付出了巨大的努力。</p>\n<p>最后，容器和网络有一段复杂的历史。在过去的几年里，随着服务网状平台和其他补充技术的出现，这个故事变得更加复杂了一些。服务网状结构是一个由应用感知的智能管道组成的平台，开箱即提供微服务网络的最佳实践。它们使用代理来提供点对点加密、认证、授权、断路器和高级请求路由。本书中介绍的容器网络基础知识应该证明对理解和评估服务网状技术是有用的。</p>\n<p>本书旨在深入介绍使用Docker的基础知识。读者可能不会学到他们在日常应用这项技术时所需要的一切。但他们将拥有所需的基本技能，以更快地学习高级主题，并进一步推进这些追求。我们祝愿你在那些容器化的事业中好运。</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/notes/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5E8F\u8A00"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>自2013年开始参与Docker和容器社区以来，Docker已经走过了很长的路。而自2016年Jeff发布本书第一版以来，Docker也发生了一些意想不到的变化。值得庆幸的是，大部分面向用户的界面和核心概念都以向后兼容的方式被保留了下来。本书前三分之二的内容只需要对新增功能或关闭的问题进行更新。正如预期的那样，上一版的第3部分需要全面重写。自上一本书出版以来，我们已经看到了在编排、应用连接、专有云容器产品、多容器应用打包和函数即服务平台方面的进展。本版重点介绍使用Docker容器的基本概念和实践，并避免使用快速变化的技术来补充Docker。</p>\n<p>最大的变化是几种容器编排器的开发和采用。容器编排器的主要目的是在主机集群上运行以服务为模型的应用程序。Kubernetes是这些编排器中最著名的一种，已经得到了大量的采用，并获得了各大技术厂商的支持。云原生计算基金会就是围绕这个项目成立的，如果你问他们，“云原生”应用就是为部署在Kubernetes上而设计的。但重要的是，不要太过纠结于营销或具体的编排技术。本书没有涉及Kubernetes，原因有二。</p>\n<p>虽然Kubernetes包含在Docker for Desktop中，但是它庞大，而且处于不断变化之中。永远不可能在少数章节中，甚至在一本不到400页的书中深入地介绍。网上有大量优秀的资源，也有关于Kubernetes的精彩出版书籍。我们希望在本书中专注于大的理念——服务编排，而不至于在细枝末节中迷失方向。</p>\n<p>其次，Docker搭载Swarm集群和编排。这个系统对于小型集群，或者边缘计算环境中的集群来说是绰绰有余的。大量的组织每天都在愉快地使用Swarm。Swarm对于同时开始使用编排和容器的人来说非常好。大多数工具和想法都可以轻松地从容器延续到服务。应用程序开发人员可能会从这种方法中受益最大。系统管理员或集群运营人员可能会感到失望，或者会发现Swarm满足他们的需求。但是，我们不确定他们是否能找到一个长篇的书面资源来满足他们的需求。</p>\n<p>接下来最大的变化是，如今Docker无处不在。Docker for Desktop很好地集成在苹果和微软操作系统上使用。它向用户隐藏了底层虚拟机。在大多数情况下，这是一个成功；在macOS上，体验几乎是无缝的。在Windows上，至少在几分钟内，事情似乎很顺利。Windows用户将处理一个令人生畏的配置变化，从企业防火墙、激进的防病毒配置、shell偏好和几个层次的间接性。这种变化使得为Windows提供书面内容成为不可能。任何这样的尝试都会在材料投入生产之前就已经过时了。出于这个原因，我们再次将包含的语法和系统特定材料限制在Linux和macOS上。读者可能会发现所有的例子都能在他们的环境中运行，但我们不能保证它们会或合理地帮助指导故障排除工作。</p>\n<p>接下来，让一个安装了Docker的互联网虚拟机变得微不足道。每一个主要的和次要的云提供商都提供了这样的服务。出于这个原因，我们已经删除了与Docker Machine和安装Docker有关的材料。我们相信，我们的读者将能够找到最适合他们选择的平台的安装说明。而如今，他们甚至可能会跳过这一步，采用AWS ECS等众多容器优先的云平台之一。本书不会涉及这些平台。它们各有特色，难以综合讨论。而且它们都在采用故事和文档方面付出了巨大的努力。</p>\n<p>最后，容器和网络有一段复杂的历史。在过去的几年里，随着服务网状平台和其他补充技术的出现，这个故事变得更加复杂了一些。服务网状结构是一个由应用感知的智能管道组成的平台，开箱即提供微服务网络的最佳实践。它们使用代理来提供点对点加密、认证、授权、断路器和高级请求路由。本书中介绍的容器网络基础知识应该证明对理解和评估服务网状技术是有用的。</p>\n<p>本书旨在深入介绍使用Docker的基础知识。读者可能不会学到他们在日常应用这项技术时所需要的一切。但他们将拥有所需的基本技能，以更快地学习高级主题，并进一步推进这些追求。我们祝愿你在那些容器化的事业中好运。</p>'
        } }),
    'toc': null,
    'author': "biskur",
    'contributors': [
        "biskur"
    ],
    'date': "2021-01-07T15:17:01.000Z",
    'updated': null,
    'excerpt': "自2013年开始参与Docker和容器社区以来，Docker已经走过了很长的路。而自2016年Jeff发布本书第一版以来，Docker也发生了一些意想不到的变化。值得庆幸的是，大部分面向用户的界面和核心概念都以向后兼容的方式被保留了下来。本...",
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
