/**
 * VitePress的配置文件
 */

import { defineConfig } from "vitepress";

const VitePressConfig = defineConfig({
  base: "/vitepress-basic-docs/",
  title: "Basic Docs",
  description: "基于 Vitepress 搭建的项目文档框架",
  head: [
    ["meta", { name: "author", content: "FlingYP" }],
    [
      "meta",
      {
        name: "keywords",
        content: "VitePress, Vue3, VuePress, Docs, Static Site",
      },
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/docs-logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/docs-logo.png", // 定义顶部最左侧Logo
    docsRepo: "flingyp/vitepress-basic-docs", // 定义顶部最右侧GitHub仓库网址
    repoLabel: "GitHub",
    // 顶部导航栏
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "相关链接",
        items: [
          {
            text: "文档源码",
            link: "https://github.com/flingyp/vitepress-basic-docs",
          },
          {
            text: "预览地址",
            link: "http://yyblog.top/vitepress-basic-docs",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "项目指南",
          children: [
            {
              text: "介绍",
              link: "/guide/index",
            },
            {
              text: "快速上手",
              link: "/guide/start",
            },
          ],
        },
      ],
    },
  },
  markdown: {
    toc: { includeLevel: [1, 2] },
  },
});

export default VitePressConfig;
