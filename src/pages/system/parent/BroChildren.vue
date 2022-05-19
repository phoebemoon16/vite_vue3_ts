<!--
 * @Author: wanghh
 * @Date: 2022-05-18 09:10:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 10:20:45
 * @Description: 
-->
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useAttrs, useSlots } from "vue";

// 辅助函数 attrs slots 获取父组件的attrs
const attrs = useAttrs();

// 获取父组件使用的插槽
const slots = useSlots();

console.log(attrs, "attrs");

const msg = ref<string>("我是兄弟孩子组件的msg");

const handleChangeMsg = (v: string) => {
  msg.value = v;
};

const number2 = ref<number>(0);

const handleAdd = () => {
  number2.value = number2.value + 1;
};
// 监听方法
watchEffect(() => {
  if (number2.value === 1) {
    console.log(msg.value, number2.value, "监听兄弟组件穿多来的值");
  }
  console.log(number2.value, "number2.value");
});

// 暴露变量
defineExpose({
  msg,
  handleChangeMsg,
});
</script>

<template>
  我是兄弟孩子组件哦 ==> {{ msg }}
  <slot></slot>
  <slot name="footer"></slot>
  <a-button @click="handleAdd"> 修改监听的值 </a-button>
</template>

<style lang="less" scoped></style>
