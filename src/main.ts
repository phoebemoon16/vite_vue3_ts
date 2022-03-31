/*
 * @Author: wanghh
 * @Date: 2022-03-31 11:39:34
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 15:27:24
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
