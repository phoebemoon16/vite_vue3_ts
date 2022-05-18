/*
 * @Author: wanghh
 * @Date: 2022-05-17 08:38:01
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-17 09:23:06
 * @Description: 用于指令的自动聚焦 每个页面仅有一个
 */
import { Directive } from "vue";
import type { DirectiveBinding } from "vue";

export const focus: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.focus();
  },
};
