/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 16:05:23
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
