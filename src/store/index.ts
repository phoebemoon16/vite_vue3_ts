/*
 * @Author: wanghh
 * @Date: 2022-05-10 11:12:57
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-10 11:14:06
 * @Description:
 */
import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
