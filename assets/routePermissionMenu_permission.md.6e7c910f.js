import{_ as n,c as s,o as a,a as t}from"./app.ab2b0fa7.js";const g='{"title":"\u6743\u9650","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u7AEF\u63A7\u5236","slug":"\u524D\u7AEF\u63A7\u5236"},{"level":2,"title":"\u540E\u7AEF\u63A7\u5236","slug":"\u540E\u7AEF\u63A7\u5236"}],"relativePath":"routePermissionMenu/permission.md"}',o={},p=t(`<h1 id="\u6743\u9650" tabindex="-1">\u6743\u9650 <a class="header-anchor" href="#\u6743\u9650" aria-hidden="true">#</a></h1><p>\u5728 <code>src/globalConfig.ts</code> \u6587\u4EF6\u4E2D\u6211\u4EEC\u53EF\u4EE5\u914D\u7F6E <strong>RouteHandleConfig</strong> \u5B57\u6BB5\uFF0C\u6765\u51B3\u5B9A\u7531\u54EA\u4E00\u90E8\u5206\u6765\u8FDB\u884C\u7CFB\u7EDF\u6743\u9650\u63A7\u5236</p><h2 id="\u524D\u7AEF\u63A7\u5236" tabindex="-1">\u524D\u7AEF\u63A7\u5236 <a class="header-anchor" href="#\u524D\u7AEF\u63A7\u5236" aria-hidden="true">#</a></h2><p>\u5982\u679C\u7CFB\u7EDF\u7531\u524D\u7AEF\u63A7\u5236\u8DEF\u7531\uFF0C\u90A3\u4E48\u9700\u8981\u5728\u8DEF\u7531\u8868\u4E2D\u7684 meta \u4E2D <strong>permission</strong> \u5B57\u6BB5\u8BBE\u7F6E\u5BF9\u5E94\u6743\u9650\u6807\u8BC6\u3002</p><p>\u5728\u7528\u6237\u8FDB\u884C\u767B\u5F55\u8FDB\u5165\u7CFB\u7EDF\u65F6\uFF0C\u4F1A\u8C03\u7528 <strong>userInfo()</strong> \u63A5\u53E3\uFF0C\u5E94\u8BE5\u5728\u6B64\u63A5\u53E3\u8FD4\u56DE\u8BE5\u7528\u6237\u7684 <strong>permissions</strong> \u5B57\u6BB5\u3002 \u5177\u4F53\u8BE6\u89E3\u53EF\u4EE5\u5728\u672C\u5730\u5C06\u9879\u76EE\u8DD1\u8D77\u6765\uFF0C\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u6765\u8FDB\u884C\u4FEE\u6539\u903B\u8F91\u3002</p><div class="language-typescript"><pre><code><span class="token comment">/**
 * \u7528\u6237\u662F\u5426\u6709\u6743\u9650\u6839\u636E *:*:* \u7ED3\u6784\u53BB\u5224\u65AD
 * (* \u4EE3\u8868\u4EFB\u4F55\u6743\u9650\uFF0C \u4E00\u822C\u7B2C\u4E00\u4E2A\u4EE3\u8868\u7CFB\u7EDF\uFF0C\u7B2C\u4E8C\u4E2A\u4EE3\u8868\u7CFB\u7EDF\u6A21\u5757\uFF0C\u7B2C\u4E09\u4E2A\u4EE3\u8868\u5177\u4F53\u7684\u6A21\u5757\u4E1A\u52A1)
 * \u4F8B\u5982\uFF1Asys:user:update\uFF1A \u53EF\u4EE5\u89E3\u8BFB\u4E3A\u7528\u6237\u6A21\u5757\u66F4\u65B0\u6743\u9650\uFF09
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> asyncRouters<span class="token operator">:</span> SysTyping<span class="token punctuation">.</span>RouteStruct<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/permission&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Permission&quot;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u5355\u6743\u9650\u63A7\u5236&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;icon-park-outline:permissions&quot;</span><span class="token punctuation">,</span>
      permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sys:root:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sys:user:*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;RootPermission&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/permissions/RootPermission.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u89C1&quot;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&quot;icon-park-outline:permissions&quot;</span><span class="token punctuation">,</span>
          permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sys:root:*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;UserPermission&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/permissions/UserPermission.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&quot;\u666E\u901A\u7528\u6237\u53EF\u89C1&quot;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&quot;icon-park-outline:permissions&quot;</span><span class="token punctuation">,</span>
          permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sys:user:*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;com&quot;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;ComPermission&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/permissions/ComPermission.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u7BA1\u7406\u5458\u3001\u666E\u901A\u7528\u6237\u53EF\u89C1&quot;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&quot;icon-park-outline:permissions&quot;</span><span class="token punctuation">,</span>
          permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sys:root:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sys:user:*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;ButtonPermission&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/permissions/ButtonPermission.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&quot;\u6309\u94AE\u6743\u9650\u63A7\u5236&quot;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">&quot;icon-park-outline:permissions&quot;</span><span class="token punctuation">,</span>
          permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sys:root:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sys:user:*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u540E\u7AEF\u63A7\u5236" tabindex="-1">\u540E\u7AEF\u63A7\u5236 <a class="header-anchor" href="#\u540E\u7AEF\u63A7\u5236" aria-hidden="true">#</a></h2><p>\u5982\u679C\u7CFB\u7EDF\u7531\u540E\u7AEF\u63A7\u5236\u8DEF\u7531\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u5C31\u4F1A\u5FFD\u7565 <strong>asyncRouter</strong> \u5F02\u6B65\u8DEF\u7531\u8868\u5B9A\u4E49\u7684\u8DEF\u7531\u3002</p><p>\u6240\u6709\u5F02\u6B65\u8DEF\u7531\u4FE1\u606F\u5E94\u548C\u540E\u7AEF\u5BF9\u63A5\uFF0C\u53EF\u4EE5\u53C2\u8003 <code>mock/system/User.ts</code> \u4E2D\u7684\u7528\u6237\u8DEF\u7531\u7684\u6570\u636E\u7ED3\u6784\u548C\u540E\u7AEF\u5BF9\u63A5\uFF0C\u518D\u505A\u5BF9\u5E94\u7684\u903B\u8F91\u6539\u52A8\u3002</p>`,9),e=[p];function c(u,i,r,l,k,q){return a(),s("div",null,e)}var d=n(o,[["render",c]]);export{g as __pageData,d as default};
