# 路由篇

系统一共分为两种路由：

常量路由（src/router/routers/constantRouters.ts）
异步路由（src/router/routers/asyncRouters.ts）

- 所有不需要定义权限，可公开访问的路由，可以在常量路由文件中定义
- 所有需要定义权限的路由需要定义在异步路由

## 路由配置

关于路由定义都必须参照 Vue Router 的 [RouteRecordRaw](https://router.vuejs.org/zh/api/#routerecordraw) 类型 来进行的，进行二次类型定义。目的只是为了减少开发者定义路由的字段。

```typescript
import { RouteMeta } from "vue-router";

// 路由类型
declare namespace SysTyping {
  interface RouteStruct {
    path: string;
    name?: string;
    component?: unknown;
    redirect?: string;
    children?: RouteStruct[];
    meta?: RouteMeta;
  }
}
```

Vue Router 提供的 [路由元信息 Meta](https://router.vuejs.org/zh/guide/advanced/meta.html) 也足够我们去扩展功能了。

```typescript
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // 菜单标题
    title?: string;
    // 菜单图标
    icon?: string;
    // 是否显示在菜单
    isShow?: boolean;
    // 访问此路由需要的权限
    permission?: string[];
    // 路由是否需要KeepAlive（默认true）
    cache?: boolean;
    // 路由菜单地址： 系统链接 | 内链链接 | 外链链接
    link?: "SYS_Link" | "Internal_Link" | "External_Link";
    // 菜单排序（默认是0）
    sort?: number;

    [key: string]: any;
  }
}
```

## 新增路由

::: warning
所有在后台系统的路由都是基于 Layout 去显示的，所以如果 Children 中只存在一个子路由时，那么菜单只会显示子路由，而不会是嵌套显示
:::

示例：

```typescript
{
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
        {
            path: '',
            name: 'AboutIndex',
            component: () => import('@/views/about/About.vue'),
            meta: {
                title: '关于',
                icon: 'cib:about-me',
                sort: -99
            }
        }
    ]
}
```

## 多级路由

::: warning
需要确认添加的每一条路由的 name 的唯一的，不然出现啥问题可得自己找 Bug 哦 😄😄😄
:::

```typescript
{
    path: '/multi',
    name: 'Multi',
    component: Layout,
    meta: {
        title: ' 多级菜单',
        icon: 'octicon:multi-select-24'
    },
    children: [
        {
            path: 'first',
            name: 'MultiFirst',
            component: () => import('@/views/common/multiLevelMenu/multiFirst/MultiFirstIndex.vue'),
            meta: {
                title: '一级菜单',
                icon: 'octicon:multi-select-24'
            }
        },
        {
            path: 'two',
            name: 'MultiTwo',
            component: RouterViewCom,
            meta: {
                title: '二级菜单',
                icon: 'octicon:multi-select-24'
            },
            children: [
                {
                    path: 'first',
                    name: 'MultiTwo_First',
                    component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwo_First.vue'),
                    meta: {
                        title: '子菜单1',
                        icon: 'octicon:multi-select-24'
                    }
                },
                {
                    path: 'two',
                    name: 'MultiTwo_Second',
                    component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwo_Second.vue'),
                    meta: {
                        title: '子菜单2',
                        icon: 'octicon:multi-select-24'
                    }
                }
            ]
        }
    ]
}
```

## 新增内外链

::: warning
设置为外链还是内链主要通过 meta.link 字段。 External_Link 代表外链 Internal_Link 代表内链 而默认值是 SYS_Link

目前处理方式是引入了一个公共页面 IframeIndexVue（src/views/plugins/iframe/IframeIndex.vue）

注：当前只是为了功能的实现，实现的方式并不好，日后应该会改动，但是现在的代码还是很容易读懂的。
:::

```typescript
{
    path: '/docs',
    name: 'Docs',
    component: Layout,
    meta: {
        title: '相关文档',
        icon: 'iconoir:google-docs'
    },
    children: [
        {
            path: 'naive',
            name: 'DocsNaiveUi',
            component: IframeIndexVue,
            meta: {
                title: 'Naive UI 文档',
                link: 'External_Link',
                url: 'https://www.naiveui.com/zh-CN/os-theme',
                icon: 'simple-icons:docsdotrs'
            }
        },
        {
            path: 'docs',
            name: 'VueAdminProDocs',
            component: IframeIndexVue,
            meta: {
                title: 'Vue Admin Pro',
                link: 'Internal_Link',
                url: 'http://yyblog.top/vue-admin-pro-docs',
                icon: 'material-symbols:docs-add-on'
            }
        }
    ]
}
```
