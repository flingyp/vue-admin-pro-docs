import{_ as n,c as s,o as a,a as t}from"./app.ab2b0fa7.js";const g='{"title":"\u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8DEF\u7531\u914D\u7F6E","slug":"\u8DEF\u7531\u914D\u7F6E"},{"level":2,"title":"\u65B0\u589E\u8DEF\u7531","slug":"\u65B0\u589E\u8DEF\u7531"},{"level":2,"title":"\u591A\u7EA7\u8DEF\u7531","slug":"\u591A\u7EA7\u8DEF\u7531"},{"level":2,"title":"\u65B0\u589E\u5185\u5916\u94FE","slug":"\u65B0\u589E\u5185\u5916\u94FE"}],"relativePath":"routePermissionMenu/router.md"}',p={},o=t(`<h1 id="\u8DEF\u7531" tabindex="-1">\u8DEF\u7531 <a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a></h1><p>\u7CFB\u7EDF\u4E00\u5171\u5206\u4E3A\u4E24\u79CD\u8DEF\u7531\uFF1A</p><p>\u5E38\u91CF\u8DEF\u7531\uFF08src/router/routers/constantRouters.ts\uFF09 \u5F02\u6B65\u8DEF\u7531\uFF08src/router/routers/asyncRouters.ts\uFF09</p><ul><li>\u6240\u6709\u4E0D\u9700\u8981\u5B9A\u4E49\u6743\u9650\uFF0C\u53EF\u516C\u5F00\u8BBF\u95EE\u7684\u8DEF\u7531\uFF0C\u53EF\u4EE5\u5728\u5E38\u91CF\u8DEF\u7531\u6587\u4EF6\u4E2D\u5B9A\u4E49</li><li>\u6240\u6709\u9700\u8981\u5B9A\u4E49\u6743\u9650\u7684\u8DEF\u7531\u9700\u8981\u5B9A\u4E49\u5728\u5F02\u6B65\u8DEF\u7531</li></ul><h2 id="\u8DEF\u7531\u914D\u7F6E" tabindex="-1">\u8DEF\u7531\u914D\u7F6E <a class="header-anchor" href="#\u8DEF\u7531\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u8DEF\u7531\u5B9A\u4E49\u90FD\u5FC5\u987B\u53C2\u7167 Vue Router \u7684 <a href="https://router.vuejs.org/zh/api/#routerecordraw" target="_blank" rel="noopener noreferrer">RouteRecordRaw</a> \u7C7B\u578B \u6765\u8FDB\u884C\u7684\uFF0C\u8FDB\u884C\u4E8C\u6B21\u7C7B\u578B\u5B9A\u4E49\u3002\u76EE\u7684\u53EA\u662F\u4E3A\u4E86\u51CF\u5C11\u5F00\u53D1\u8005\u5B9A\u4E49\u8DEF\u7531\u7684\u5B57\u6BB5\u3002</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteMeta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u8DEF\u7531\u7C7B\u578B</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> SysTyping <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteStruct</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
    redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> RouteStruct<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    meta<span class="token operator">?</span><span class="token operator">:</span> RouteMeta<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Vue Router \u63D0\u4F9B\u7684 <a href="https://router.vuejs.org/zh/guide/advanced/meta.html" target="_blank" rel="noopener noreferrer">\u8DEF\u7531\u5143\u4FE1\u606F Meta</a> \u4E5F\u8DB3\u591F\u6211\u4EEC\u53BB\u6269\u5C55\u529F\u80FD\u4E86\u3002</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;vue-router&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83DC\u5355\u6807\u9898</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83DC\u5355\u56FE\u6807</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u5728\u83DC\u5355</span>
    isShow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BBF\u95EE\u6B64\u8DEF\u7531\u9700\u8981\u7684\u6743\u9650</span>
    permission<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8DEF\u7531\u662F\u5426\u9700\u8981KeepAlive\uFF08\u9ED8\u8BA4true\uFF09</span>
    cache<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8DEF\u7531\u83DC\u5355\u5730\u5740\uFF1A \u7CFB\u7EDF\u94FE\u63A5 | \u5185\u94FE\u94FE\u63A5 | \u5916\u94FE\u94FE\u63A5</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;SYS_Link&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;Internal_Link&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;External_Link&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83DC\u5355\u6392\u5E8F\uFF08\u9ED8\u8BA4\u662F0\uFF09</span>
    sort<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u65B0\u589E\u8DEF\u7531" tabindex="-1">\u65B0\u589E\u8DEF\u7531 <a class="header-anchor" href="#\u65B0\u589E\u8DEF\u7531" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u6240\u6709\u5728\u540E\u53F0\u7CFB\u7EDF\u7684\u8DEF\u7531\u90FD\u662F\u57FA\u4E8E Layout \u53BB\u663E\u793A\u7684\uFF0C\u6240\u4EE5\u5982\u679C Children \u4E2D\u53EA\u5B58\u5728\u4E00\u4E2A\u5B50\u8DEF\u7531\u65F6\uFF0C\u90A3\u4E48\u83DC\u5355\u53EA\u4F1A\u663E\u793A\u5B50\u8DEF\u7531\uFF0C\u800C\u4E0D\u4F1A\u662F\u5D4C\u5957\u663E\u793A</p></div><p>\u793A\u4F8B\uFF1A</p><div class="language-typescript"><pre><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;AboutIndex&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/about/About.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E&#39;</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;cib:about-me&#39;</span><span class="token punctuation">,</span>
                sort<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">99</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u591A\u7EA7\u8DEF\u7531" tabindex="-1">\u591A\u7EA7\u8DEF\u7531 <a class="header-anchor" href="#\u591A\u7EA7\u8DEF\u7531" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u9700\u8981\u786E\u8BA4\u6DFB\u52A0\u7684\u6BCF\u4E00\u6761\u8DEF\u7531\u7684 name \u7684\u552F\u4E00\u7684\uFF0C\u4E0D\u7136\u51FA\u73B0\u5565\u95EE\u9898\u53EF\u5F97\u81EA\u5DF1\u627E Bug \u54E6 \u{1F604}\u{1F604}\u{1F604}</p></div><div class="language-typescript"><pre><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/multi&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Multi&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39; \u591A\u7EA7\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;octicon:multi-select-24&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;MultiFirst&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/common/multiLevelMenu/multiFirst/MultiFirstIndex.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u4E00\u7EA7\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;octicon:multi-select-24&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;MultiTwo&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> RouterViewCom<span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u4E8C\u7EA7\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;octicon:multi-select-24&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    path<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;MultiTwo_First&#39;</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/common/multiLevelMenu/multiTwo/MultiTwo_First.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                        title<span class="token operator">:</span> <span class="token string">&#39;\u5B50\u83DC\u53551&#39;</span><span class="token punctuation">,</span>
                        icon<span class="token operator">:</span> <span class="token string">&#39;octicon:multi-select-24&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    path<span class="token operator">:</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span>
                    name<span class="token operator">:</span> <span class="token string">&#39;MultiTwo_Second&#39;</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/common/multiLevelMenu/multiTwo/MultiTwo_Second.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                        title<span class="token operator">:</span> <span class="token string">&#39;\u5B50\u83DC\u53552&#39;</span><span class="token punctuation">,</span>
                        icon<span class="token operator">:</span> <span class="token string">&#39;octicon:multi-select-24&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u65B0\u589E\u5185\u5916\u94FE" tabindex="-1">\u65B0\u589E\u5185\u5916\u94FE <a class="header-anchor" href="#\u65B0\u589E\u5185\u5916\u94FE" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u8BBE\u7F6E\u4E3A\u5916\u94FE\u8FD8\u662F\u5185\u94FE\u4E3B\u8981\u901A\u8FC7 meta.link \u5B57\u6BB5\u3002 External_Link \u4EE3\u8868\u5916\u94FE Internal_Link \u4EE3\u8868\u5185\u94FE \u800C\u9ED8\u8BA4\u503C\u662F SYS_Link</p><p>\u76EE\u524D\u5904\u7406\u65B9\u5F0F\u662F\u5F15\u5165\u4E86\u4E00\u4E2A\u516C\u5171\u9875\u9762 IframeIndexVue\uFF08src/views/plugins/iframe/IframeIndex.vue\uFF09</p><p>\u6CE8\uFF1A\u5F53\u524D\u53EA\u662F\u4E3A\u4E86\u529F\u80FD\u7684\u5B9E\u73B0\uFF0C\u5B9E\u73B0\u7684\u65B9\u5F0F\u5E76\u4E0D\u597D\uFF0C\u65E5\u540E\u5E94\u8BE5\u4F1A\u6539\u52A8\uFF0C\u4F46\u662F\u73B0\u5728\u7684\u4EE3\u7801\u8FD8\u662F\u5F88\u5BB9\u6613\u8BFB\u61C2\u7684\u3002</p></div><div class="language-typescript"><pre><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Docs&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u76F8\u5173\u6587\u6863&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;iconoir:google-docs&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;naive&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;DocsNaiveUi&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> IframeIndexVue<span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;Naive UI \u6587\u6863&#39;</span><span class="token punctuation">,</span>
                link<span class="token operator">:</span> <span class="token string">&#39;External_Link&#39;</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">&#39;https://www.naiveui.com/zh-CN/os-theme&#39;</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:docsdotrs&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;VueAdminProDocs&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span> IframeIndexVue<span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;Vue Admin Pro&#39;</span><span class="token punctuation">,</span>
                link<span class="token operator">:</span> <span class="token string">&#39;Internal_Link&#39;</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">&#39;http://yyblog.top/vue-admin-pro-docs&#39;</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;material-symbols:docs-add-on&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),e=[o];function c(l,r,u,i,k,m){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
