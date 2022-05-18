<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:28:46
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-17 16:50:07
 * @Description: 
-->
<template>孙子组件哦 {{ value.name }} {{ value2.name }}</template>

<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import { ParentObjType } from "../../../types/ProvideTypes";

const value: ParentObjType = inject("parent") as ParentObjType;

const value2: ParentObjType = inject("parent2", { name: "defalueValue" });
</script>

<style lang="less" scoped></style>
