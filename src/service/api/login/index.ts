/*
 * @Author: wanghh
 * @Date: 2022-03-31 15:59:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 16:23:43
 * @Description:
 */
import http from "@/service/http";
import * as T from "./type";

const loginApi: T.ILoginApi = {
  login(params: T.ILoginParams) {
    return http.post("/login", params);
  },
};
export default loginApi;
