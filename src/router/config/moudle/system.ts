/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-17 10:21:42
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
    ],
  },
};
