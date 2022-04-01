/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 14:27:33
 * @Description:
 */
export default {
  sort: 2,
  route: {
    path: "/system",
    name: "System",
    component: () => import("@/pages/system/Framework.vue"),
  },
};
