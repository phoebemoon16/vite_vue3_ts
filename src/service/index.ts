/*
 * @Author: wanghh
 * @Date: 2022-04-01 16:22:33
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 17:11:55
 * @Description:
 */
let apiMoudle: any = {};
let files: any = import.meta.globEager("./api/**/*.ts");
// let filesGlobal = import.meta.glob("./moudle/*.ts");
for (const path in files) {
  Object.assign(apiMoudle, files[path].default);
}

console.log(apiMoudle, "files89");
// console.log(modules, files, "files9090");

export default { ...apiMoudle };
