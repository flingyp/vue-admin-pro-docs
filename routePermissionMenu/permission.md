# 权限

在 `src/globalConfig.ts` 文件中我们可以配置 **RouteHandleConfig** 字段，来决定由哪一部分来进行系统权限控制

## 前端控制

如果系统由前端控制路由，那么需要在路由表中的 meta 中 **permission** 字段设置对应权限标识。

在用户进行登录进入系统时，会调用 **userInfo()** 接口，应该在此接口返回该用户的 **permissions** 字段。 具体详解可以在本地将项目跑起来，根据自己的需求来进行修改逻辑。

```typescript
/**
 * 用户是否有权限根据 *:*:* 结构去判断
 * (* 代表任何权限， 一般第一个代表系统，第二个代表系统模块，第三个代表具体的模块业务)
 * 例如：sys:user:update： 可以解读为用户模块更新权限）
 */
export const asyncRouters: SysTyping.RouteStruct[] = [
  {
    path: "/permission",
    name: "Permission",
    component: Layout,
    meta: {
      title: "菜单权限控制",
      icon: "icon-park-outline:permissions",
      permission: ["sys:root:*", "sys:user:*"],
    },
    children: [
      {
        path: "root",
        name: "RootPermission",
        component: () => import("@/views/permissions/RootPermission.vue"),
        meta: {
          title: "超级管理员可见",
          icon: "icon-park-outline:permissions",
          permission: ["sys:root:*"],
        },
      },
      {
        path: "user",
        name: "UserPermission",
        component: () => import("@/views/permissions/UserPermission.vue"),
        meta: {
          title: "普通用户可见",
          icon: "icon-park-outline:permissions",
          permission: ["sys:user:*"],
        },
      },
      {
        path: "com",
        name: "ComPermission",
        component: () => import("@/views/permissions/ComPermission.vue"),
        meta: {
          title: "超级管理员、普通用户可见",
          icon: "icon-park-outline:permissions",
          permission: ["sys:root:*", "sys:user:*"],
        },
      },
      {
        path: "button",
        name: "ButtonPermission",
        component: () => import("@/views/permissions/ButtonPermission.vue"),
        meta: {
          title: "按钮权限控制",
          icon: "icon-park-outline:permissions",
          permission: ["sys:root:*", "sys:user:*"],
        },
      },
    ],
  },
];
```

## 后端控制

如果系统由后端控制路由，那么系统就会忽略 **asyncRouter** 异步路由表定义的路由。

所有异步路由信息应和后端对接，可以参考 `mock/system/User.ts` 中的用户路由的数据结构和后端对接，再做对应的逻辑改动。

## 按钮权限控制

按钮的权限控制系统中主要是通过使用了一个自定义指令 `v-button-permission` 来控制按钮的显示和异常
