/*
 * @Author: wanghh
 * @Date: 2022-05-30 16:16:48
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-22 15:18:50
 * @Description:
 * 使用就可以用 const { data, error } = useFetch
 * 同理 axios也可以用hook的形式
 *
 */
// fetch.js
import { ref, watchEffect, toValue } from "vue";

// 此方法只会执行一次fetch 就结束了 如果想url变了就执行一次呢？就需要用到 watchEffect
// export function useFetch(url: string) {
//   const data = ref(null);
//   const error = ref(null);

//   // fetch 返回的数据 需要去反序列化一下
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err));

//   return { data, error };
// }

export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);

  // fetch 返回的数据 需要去反序列化一下
  const fetchData = () => {
    // reset state
    data.value = null
    error.value = null

    /**
     * 它的设计目的是将 ref 或 getter 规范化为值。如果参数是 ref，它会返回 ref 的值；如果参数是函数，它会调用函数并返回其返回值。
     * 否则，它会原样返回参数。它的工作方式类似于 unref()，但对函数有特殊处理。
     *  */ 
    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  };
  watchEffect(() => {
    fetchData();
  });
  return { data, error };
}
