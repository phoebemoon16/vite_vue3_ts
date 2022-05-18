<!--
 * @Author: wanghh
 * @Date: 2022-05-18 09:10:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-18 09:26:07
 * @Description: 
-->
<template>我是兄弟孩子组件哦 ==> {{ msg }}</template>

<script setup lang="ts">
import { ref } from "vue";
const msg = ref<string>("我是兄弟孩子组件的msg");

const handleChangeMsg = (v: string) => {
  msg.value = v;
};

defineExpose({
  msg,
  handleChangeMsg,
});
</script>

<style lang="less" scoped></style>
