/*
 * @Author: wanghh
 * @Date: 2022-03-31 14:52:05
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 14:53:35
 * @Description:
 */
let modules: any = [];
const requireComponent = require.context("../module", true, /\.ts$/);
requireComponent.keys().forEach((fileName: string) => {
  const componentConfig = requireComponent(fileName);
  if (fileName.indexOf("index") == -1) {
    modules.push(componentConfig.default);
  }
});

modules.sort((a: any, b: any) => a.sort - b.sort);

const route = modules.map((item: any) => item.route);

export default route;
