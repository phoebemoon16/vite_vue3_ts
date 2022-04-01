/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:55
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 14:27:26
 * @Description:
 */
export default {
  sort: 1,
  route: {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"), // 注意这里要带上 文件后缀.vue
  },
};
