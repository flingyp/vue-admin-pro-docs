/**
 * VitePress的配置文件
 */

import { defineConfig } from "vitepress";

const VitePressConfig = defineConfig({
  base: "/vue-admin-pro-docs/",
  title: "Vue Admin Rro",
  description: "基于Vue3 + TypeScript + NaiveUI等技术栈搭建的通用后台系统",
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
    docsRepo: "flingyp/vue-admin-pro", // 定义顶部最右侧GitHub仓库网址
    repoLabel: "GitHub",
    // 顶部导航栏
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "系统权限",
        link: "/routePermissionMenu/",
      },
      {
        text: "相关链接",
        items: [
          {
            text: "项目源码",
            link: "https://github.com/flingyp/vue-admin-pro",
          },
          {
            text: "预览地址",
            link: "http://yyblog.top/vue-admin-pro",
          },
          {
            text: "文档源码",
            link: "https://github.com/flingyp/vue-admin-pro-docs",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: [
            {
              text: "介绍",
              link: "/guide/",
            },
            {
              text: "快速上手",
              link: "/guide/started",
            },
          ],
        },
      ],
      "/routePermissionMenu/": [
        {
          text: "系统权限",
          children: [
            {
              text: "介绍",
              link: "/routePermissionMenu/",
            },
            {
              text: "路由篇",
              link: "/routePermissionMenu/router",
            },
            {
              text: "权限篇",
              link: "/routePermissionMenu/permission",
            },
            {
              text: "菜单篇",
              link: "/routePermissionMenu/menu",
            },
          ],
        },
      ],
    },
  },
  markdown: {
    toc: { includeLevel: [1, 2, 3] },
  },
});

export default VitePressConfig;
