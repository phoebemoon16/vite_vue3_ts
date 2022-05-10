/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:55
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-10 15:33:32
 * @Description:
 */
export default {
  sort: 1,
  route: {
    path: "/loginModule",
    name: "LoginModule",
    meta: {
      title: "登录模块",
    },
    component: () => import("@/layout/ParentLayout.vue"),
    // 注意这里要带上 文件后缀.vue
    children: [
      {
        path: "/resist",
        name: "Resist",
        meta: {
          title: "注册页面",
        },
        component: () => import("@/pages/login/Resist.vue"), // 注意这里要带上 文件后缀.vue
      },
      {
        path: "/login",
        name: "Login",
        meta: {
          title: "登录页面",
        },
        component: () => import("@/pages/login/Login.vue"),
      },
    ],
  },
};
