/*
 * @Author: wanghh
 * @Date: 2024-05-22 14:53:22
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-22 15:13:55
 * @Description:
 */
import { ref } from "vue";
import { useEventListener } from "./event.js";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
    console.log(event.pageX, event.pageY);
  });

  return { x, y };
}
