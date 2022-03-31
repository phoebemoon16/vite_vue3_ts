/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:31:41
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 15:22:09
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"), // 注意这里要带上 文件后缀.vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
