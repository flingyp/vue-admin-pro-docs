/**
 * VitePress的配置文件
 */

import { defineConfig } from "vitepress";

const VitePressConfig = defineConfig({
  base: "/vitepress-basic-docs/",
  title: "Basic Docs",
  description: "基于 Vitepress 搭建的项目文档框架",
  themeConfig: {
    logo: "/docs-logo.png", // 定义顶部最左侧Logo
    docsRepo: "flingyp/vitepress-basic-docs", // 定义顶部最右侧GitHub仓库网址
    repoLabel: "GitHub",
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
  },
});

export default VitePressConfig;

// const VitePressConfig: UserConfig = {
//   // 基础路径
//   base: "/vitepress-basic-docs/",
//   title: "Basic Docs",
//   description: "基于 Vitepress 搭建的项目文档框架",
//   themeConfig: {
//     darkMode: true,
//     repo: "honghuangdc/soybean-admin",
//     logo: "/docs-logo.png",
//     docsBranch: "main",
//     editLinks: true,
//     editLinkText: "为此页提供修改建议",
//     nav: [
//       { text: "指引", link: "/guide/" },
//       { text: "规范", link: "/standard/" },
//       { text: "教程", link: "/tutorial/" },
//       {
//         text: "相关链接",
//         items: [
//           {
//             text: "预览地址",
//             link: "https://soybean.pro",
//           },
//           {
//             text: "项目源码",
//             link: "https://github.com/honghuangdc/soybean-admin",
//           },
//           {
//             text: "文档源码",
//             link: "https://github.com/honghuangdc/soybean-admin-docs",
//           },
//           {
//             text: "更新日志",
//             link: "https://github.com/honghuangdc/soybean-admin/blob/main/CHANGELOG.md",
//           },
//         ],
//       },
//       {
//         text: "赞助",
//         link: "/other/donate",
//       },
//     ],
//     sidebar: {
//       "/tutorial/": [
//         {
//           text: "教程",
//           children: [
//             {
//               text: "开始",
//               link: "/tutorial/",
//             },
//             {
//               text: "安装教程",
//               link: "/tutorial/install",
//             },
//             {
//               text: "iconify图标使用方法",
//               link: "/tutorial/iconify",
//             },
//           ],
//         },
//       ],
//       "/standard/": [
//         {
//           text: "规范",
//           children: [
//             {
//               text: "开始",
//               link: "/standard/",
//             },
//             {
//               text: "目录规范",
//               link: "/standard/category",
//             },
//             {
//               text: "命名规范",
//               link: "/standard/name",
//             },
//             {
//               text: "css规范",
//               link: "/standard/css",
//             },
//             {
//               text: "ts规范",
//               link: "/standard/ts",
//             },
//             {
//               text: "vue规范",
//               link: "/standard/vue",
//             },
//           ],
//         },
//       ],
//       "/": [
//         {
//           text: "指引",
//           children: [
//             {
//               text: "介绍",
//               link: "/guide/introduction",
//             },
//             {
//               text: "开始",
//               link: "/guide/",
//             },
//             {
//               text: "项目配置",
//               link: "/guide/settings",
//             },
//             {
//               text: "路由",
//               link: "/guide/router",
//             },
//             {
//               text: "菜单",
//               link: "/guide/menu",
//             },
//             {
//               text: "权限",
//               link: "/guide/auth",
//             },
//           ],
//         },
//       ],
//     },
//   },
// };
