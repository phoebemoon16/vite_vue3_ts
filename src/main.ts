/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-02 09:00:04
 * @Description:
 */
import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
// 全局引入模板;
// import api from "@/service/index";

const app = createApp(App);
app.use(router);
app.use(createPinia());
// app.config.globalProperties.$api = api;
// app.provide("$api", api);
app.mount("#app");
