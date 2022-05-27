/*
 * @Author: wanghh
 * @Date: 2022-03-31 15:59:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 10:27:08
 * @Description:
 */
import http from "@/service/http";
import { ILoginParams, ILoginApi } from "./type";

const loginApi: ILoginApi = {
  login(params: ILoginParams) {
    return http.post("/login", params);
  },
};
export default loginApi;
