/*
 * @Author: wanghh
 * @Date: 2022-03-31 16:20:08
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-10 17:30:10
 * @Description:
 */
import { defineStore } from "pinia";
import { store } from "@/store";
import { multiType } from "./types";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
    router: [],
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
    updateRouter(router: any) {
      this.router = router;
    },
    addMultiTags(items: multiType) {
      this.multiTags.push(items);
    },
  },
});

export function useMainStoreHook() {
  return useMainStore(store);
}
