/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-08 17:57:00
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@api": path.resolve(__dirname, "src/service/api"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://10.1.100.42:99", //实际请求地址
        changeOrigin: true,
        ws: false,
      },
      "/view": {
        target:
          "http://10.16.108.72/accessory/2021/11/01/898a5095-c14d-47ee-ba91-86b0b8f804e3.xlsx", //实际请求地址
        changeOrigin: true,
        ws: false,
        rewrite: (path) => path.replace(/^\/view/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/assets/style/mian.sass"',
      },
      scss: {
        charset: false,
      },
    },
  },
  build: {
    minify: false,
    // 取消计算文件大小，加快打包速度
    reportCompressedSize: false,
    sourcemap: true,
    // assetsDir: 'static/img',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
