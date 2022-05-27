/*
 * @Author: wanghh
 * @Date: 2022-05-26 09:23:00
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-26 15:08:37
 * @Description:
 */
import { ref } from "vue";

function genRandomName() {
  return Math.random() + "";
}

export const useName = () => {
  const name = ref<string>(genRandomName());
  const setName = (v: string) => {
    console.log(v, "ccc");
    name.value = v;
  };
  return {
    name,
    setName,
  };
};
