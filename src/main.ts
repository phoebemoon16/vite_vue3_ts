/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-27 09:33:29
 * @Description:
 */
import Vue from "vue";
import { createApp, Directive } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { setupStore } from "@/store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/style/mian.scss";
import "element-plus/dist/index.css";
// 全局引入模板;
// import api from "@/service/index";

const app = createApp(App);

// 自定义指令
import * as directives from "@/directives";
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.use(router);
setupStore(app);
app.use(Antd);
// app.config.globalProperties.$api = api;
// app.provide("$api", api);
app.mount("#app");
