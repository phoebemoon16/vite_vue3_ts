/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 15:48:51
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/assets/style/mian.sass"',
      },
    },
  },
});
