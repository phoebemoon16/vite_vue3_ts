<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:28:46
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 10:06:39
 * @Description: 
-->
<template>孙子组件哦 {{ value.name }} {{ value2.name }}</template>

<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import { ParentObjType } from "../../../types/ProvideTypes";
import { ref, computed } from "vue";

// 无defalut
const value = inject<ParentObjType>("parent");

// defalut
const value2 = inject<ParentObjType>("parent2", {
  name: "defalueValue",
});

const count = ref<number>(1);

const plusOne = computed<number>(() => count.value + 1);

console.log(plusOne.value, "son component "); // 2
</script>

<style lang="less" scoped></style>
