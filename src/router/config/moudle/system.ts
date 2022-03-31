/*
 * @Author: wanghh
 * @Date: 2022-03-30 15:42:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 14:45:28
 * @Description:
 */
export default {
  route: {
    path: "/system",
    name: "System",
    component: () => import("@/pages/system/Framework.vue"),
  },
};
