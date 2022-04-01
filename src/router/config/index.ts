/*
 * @Author: wanghh
 * @Date: 2022-03-31 14:52:05
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 14:57:36
 * @Description:
 */
let modules: any = [];
let files: any = import.meta.globEager("./moudle/*.ts");
// let filesGlobal = import.meta.glob("./moudle/*.ts");
for (const path in files) {
  modules.push(files[path].default);
}

modules.sort((a: any, b: any) => a.sort - b.sort);

const route = modules.map((item: any) => item.route);

// console.log(modules, files, "files9090");

export default route;
