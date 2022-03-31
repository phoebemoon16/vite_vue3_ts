/*
 * @Author: wanghh
 * @Date: 2022-03-31 16:20:08
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 16:20:09
 * @Description:
 */
import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
  }),
});
