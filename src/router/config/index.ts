/*
 * @Author: wanghh
 * @Date: 2022-03-31 14:52:05
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-10 11:28:35
 * @Description:
 */
import { RouteRecordRaw } from "vue-router";
import { useMainStoreHook } from "@/store/main";

interface RouteModules {
  sort: number;
  route: RouteRecordRaw;
}

interface GlobEagerMoudle {
  default: RouteModules;
}

interface Files {
  [key: string]: GlobEagerMoudle;
}

let modules: RouteModules[] = [];
let files: Files = import.meta.globEager("./moudle/*.ts");
// let filesGlobal = import.meta.glob("./moudle/*.ts");
for (const path in files) {
  modules.push(files[path].default);
}

modules.sort((a: RouteModules, b: RouteModules) => a.sort - b.sort);

const route = modules.map((item: RouteModules) => item.route);

// console.log(modules, files, "files9090");
useMainStoreHook().updateRouter(route);
export default route;
