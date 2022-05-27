/*
 * @Author: wanghh
 * @Date: 2022-05-10 17:26:00
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-26 14:46:34
 * @Description:
 */
export type multiType = {
  path: string;
  parentPath?: string;
  name: string;
  meta: any;
  query?: object;
};

export type routeType = {
  path: string;
  parentPath?: string;
  name: string;
  meta: any;
  query?: object;
};
