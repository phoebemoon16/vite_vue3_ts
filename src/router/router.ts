/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:31:41
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 15:41:07
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import route from "./config/index";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/layout/index.vue"),
    children: route,
  },
];

console.log(routes, "routes");
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
