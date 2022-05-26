import{_ as n,c as t,o as a,a as s}from"./app.ab2b0fa7.js";const h='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"IDE \u51C6\u5907","slug":"ide-\u51C6\u5907"},{"level":3,"title":"\u63D2\u4EF6\u7BC7","slug":"\u63D2\u4EF6\u7BC7"},{"level":3,"title":"\u4EE3\u7801\u7247\u6BB5\u7BC7","slug":"\u4EE3\u7801\u7247\u6BB5\u7BC7"},{"level":2,"title":"\u542F\u52A8","slug":"\u542F\u52A8"}],"relativePath":"guide/started.md"}',e={},o=s(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><h2 id="ide-\u51C6\u5907" tabindex="-1">IDE \u51C6\u5907 <a class="header-anchor" href="#ide-\u51C6\u5907" aria-hidden="true">#</a></h2><h3 id="\u63D2\u4EF6\u7BC7" tabindex="-1">\u63D2\u4EF6\u7BC7 <a class="header-anchor" href="#\u63D2\u4EF6\u7BC7" aria-hidden="true">#</a></h3><p>\u63A8\u8350\u4F7F\u7528 VsCode \u7F16\u8F91\u5668\u6765\u8FDB\u884C Vue3 \u7684\u5F00\u53D1\uFF0C\u4E0B\u9762\u5219\u662F\u9879\u76EE\u5F53\u4E2D\u4F1A\u5E38\u7528\u5230\u7684\u63D2\u4EF6</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Vue Language Features (Volar)</a> - Vuu3 \u5F00\u53D1\u5FC5\u5907</li><li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noopener noreferrer">Iconify IntelliSense</a> - Iconify \u56FE\u6807\u663E\u793A</li><li><a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> - \u6587\u4EF6\u8DEF\u5F84\u63D0\u793A</li><li><a href="https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense" target="_blank" rel="noopener noreferrer">WindiCSS Intellisense</a> - WindiCSS \u63D0\u793A</li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier - Code formatter</a> - \u4EE3\u7801\u683C\u5F0F\u5316</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">Eslint</a> - \u4EE3\u7801\u9519\u8BEF\u6821\u9A8C</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noopener noreferrer">DotENV</a> - \u9AD8\u4EAE .ENV \u6587\u4EF6</li><li><a href="https://github.com/wayou/vscode-todo-highlight" target="_blank" rel="noopener noreferrer">TODO Highlight</a> - \u6CE8\u91CA\u9AD8\u4EAE\u6807\u8BB0</li></ul><h3 id="\u4EE3\u7801\u7247\u6BB5\u7BC7" tabindex="-1">\u4EE3\u7801\u7247\u6BB5\u7BC7 <a class="header-anchor" href="#\u4EE3\u7801\u7247\u6BB5\u7BC7" aria-hidden="true">#</a></h3><p>\u63A8\u8350\u5728\u5F00\u53D1\u5F53\u4E2D\uFF0C\u5728 VsCode \u4E2D\u914D\u7F6E\u5C5E\u4E8E\u81EA\u5DF1\u7684\u4EE3\u7801\u7247\u6BB5</p><p>\u6CE8\uFF1A\u4E5F\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u60F3\u6CD5\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5\uFF0C\u63A8\u8350\u4E00\u4E2A\u751F\u6210\u4EE3\u7801 body \u7684\u7F51\u7AD9\uFF1A<a href="https://snippet-generator.app/" target="_blank" rel="noopener noreferrer">snippet-generator</a></p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;\u5355\u6587\u4EF6\u7EC4\u4EF6\u6A21\u677F&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;base-v3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  &lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;!-- \u5185\u5BB9 --&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;import {} from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;style scoped&gt;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EE3\u7801\u7247\u6BB5\uFF1A\u5355\u6587\u4EF6\u7EC4\u4EF6&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u514B\u9686\u4EE3\u7801</span>
<span class="token function">git</span> clone https://github.com/flingyp/vue-admin-pro.git

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">pnpm</span> <span class="token function">install</span>

<span class="token comment"># \u672C\u5730\u8FD0\u884C</span>
<span class="token function">pnpm</span> run dev:mock <span class="token comment"># \u542F\u7528 mock \u6A21\u5F0F</span>

<span class="token comment"># \u9879\u76EE\u6253\u5305</span>
<span class="token function">pnpm</span> run build
<span class="token function">pnpm</span> run build:mock <span class="token comment"># \u542F\u7528 mock \u6A21\u5F0F</span>
</code></pre></div>`,11),p=[o];function r(l,i,c,u,k,d){return a(),t("div",null,p)}var g=n(e,[["render",r]]);export{h as __pageData,g as default};
