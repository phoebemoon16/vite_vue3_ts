/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-09-29 10:09:33
 * @Description:
 */
export default {
  sort: 2,
  route: {
    path: "/system",
    name: "System",
    meta: {
      title: "系统模块",
    },
    component: () => import("@/layout/ParentLayout.vue"),
    children: [
      {
        path: "/systemPage",
        name: "SystemPage",
        meta: {
          title: "系统页面",
        },
        component: () => import("@/pages/system/Framework.vue"),
      },
      {
        path: "/parent",
        name: "Parent",
        meta: {
          title: "父页面",
        },
        component: () => import("@/pages/system/parent/Parent.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/useFunction",
        name: "UseFunction",
        meta: {
          title: "辅助函数",
        },
        component: () => import("@/pages/system/use/UseFunction.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/reactive",
        name: "Reactive",
        meta: {
          title: "响应式对比ref",
        },
        component: () => import("@/pages/reactivity/Ref.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/teleport",
        name: "Teleport",
        meta: {
          title: "TeleportApi",
        },
        component: () => import("@/pages/system/TeleportAPI.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/model",
        name: "Model",
        meta: {
          title: "自定义组件使用Model",
        },
        component: () => import("@/pages/system/componentModel/index.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/slot",
        name: "Slot",
        meta: {
          title: "插槽试用",
        },
        component: () => import("@/pages/system/slot/index.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/upload",
        name: "Upload",
        meta: {
          title: "上传控件",
        },
        component: () => import("@/pages/system/Upload.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/draggable",
        name: "Draggable",
        meta: {
          title: "可拖拽组件",
        },
        component: () => import("@/pages/system/Draggable.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/effect",
        name: "Effect",
        meta: {
          title: "副作用",
        },
        component: () => import("@/pages/system/Effect.vue"), // 注意这里要带上 文件后缀.vue
      },
    ],
  },
};
