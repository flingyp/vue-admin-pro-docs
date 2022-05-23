# 快速上手

## IDE 准备

### 插件篇

推荐使用 VsCode 编辑器来进行 Vue3 的开发，下面则是项目当中会常用到的插件

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vuu3 开发必备
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标显示
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - 文件路径提示
- [WindiCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - WindiCSS 提示
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码错误校验
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 高亮 .ENV 文件
- [TODO Highlight](https://github.com/wayou/vscode-todo-highlight) - 注释高亮标记

### 代码片段篇

推荐在开发当中，在 VsCode 中配置属于自己的代码片段

注：也可以根据自己想法自定义代码片段，推荐一个生成代码 body 的网站：[snippet-generator](https://snippet-generator.app/)

```json
{
  "单文件组件模板": {
    "scope": "",
    "prefix": "base-v3",
    "body": [
      "<template>",
      "  <div>",
      "    <!-- 内容 -->",
      "  </div>",
      "</template>",
      "",
      "<script setup lang=\"ts\">",
      "import {} from \"vue\";",
      "</script>",
      "",
      "<style scoped></style>",
      ""
    ],
    "description": "代码片段：单文件组件"
  }
}
```

## 启动

```bash
# 克隆代码
git clone https://github.com/flingyp/vue-admin-pro.git

# 安装依赖
pnpm install

# 本地运行
pnpm run dev:mock # 启用 mock 模式

# 项目打包
pnpm run build
pnpm run build:mock # 启用 mock 模式
```
