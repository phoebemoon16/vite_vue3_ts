/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-14 13:06:07
 * @Description:
 */
import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { setupStore } from "@/store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 全局引入模板;
// import api from "@/service/index";

const app = createApp(App);
app.use(router);
setupStore(app);
app.use(Antd);
// app.config.globalProperties.$api = api;
// app.provide("$api", api);
app.mount("#app");
