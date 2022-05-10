/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-10 11:32:06
 * @Description:
 */
export default {
  sort: 2,
  route: {
    path: "/system",
    name: "System",
    meta: {
      title: "系统页面",
    },
    component: () => import("@/pages/system/Framework.vue"),
  },
};
