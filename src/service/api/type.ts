/*
 * @Author: wanghh
 * @Date: 2022-03-31 16:02:59
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 16:03:00
 * @Description:
 */
export interface ILoginParams {
  userName: string;
  passWord: string | number;
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>;
}
