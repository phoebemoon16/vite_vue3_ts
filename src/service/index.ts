/*
 * @Author: wanghh
 * @Date: 2022-04-01 16:22:33
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-02 09:23:23
 * @Description:
 */

interface ApiModule {
  [key: string]: Function;
}

interface ApiParams {
  name: string;
  length: number;
  default: ApiModule;
}
interface Files {
  [key: string]: ApiParams;
}

let apiMoudle: ApiModule = {};
let files: Files = import.meta.globEager("./api/**/*.ts");

for (const path in files) {
  Object.assign(apiMoudle, files[path].default);
}

console.log(apiMoudle, "files89");
// console.log(modules, files, "files9090");

export default { ...apiMoudle };
