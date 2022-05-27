/*
 * @Author: wanghh
 * @Date: 2022-03-31 16:20:08
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-26 14:50:54
 * @Description:
 */
import { defineStore } from "pinia";
import { store } from "@/store";
import { multiType } from "./types";
import { RouteRecordRaw } from "vue-router";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
    router: <RouteRecordRaw[]>[],
    multiTags: [
      {
        path: "/",
        meta: {
          title: "首页",
        },
      },
    ],
  }),
  actions: {
    updateRouter(router: RouteRecordRaw[]) {
      this.router = router;
    },
    addMultiTags(items: multiType) {
      this.multiTags.push(items);
    },
    deleteMultiTags(type: string, num: number) {
      switch (type) {
        case "all":
          this.multiTags = [
            {
              path: "/",
              meta: {
                title: "首页",
              },
            },
          ];
          break;
        case "left":
          this.multiTags.splice(num + 1, this.multiTags.length);
          break;
        case "right":
          this.multiTags.splice(0, num);
          break;
      }
    },
  },
});

export function useMainStoreHook() {
  return useMainStore(store);
}
