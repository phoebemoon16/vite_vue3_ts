/*
 * @Author: wanghh
 * @Date: 2022-05-30 16:16:48
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-30 16:19:36
 * @Description:
 * 使用就可以用 const { data, error } = useFetch
 * 同理 axios也可以用hook的形式
 */
// fetch.js
import { ref } from "vue";

export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);

  // fetch 返回的数据 需要去反序列化一下
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}
