/*
 * @Author: wanghh
 * @Date: 2022-03-31 15:59:49
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 16:03:24
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
