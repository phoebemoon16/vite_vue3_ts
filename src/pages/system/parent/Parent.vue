<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:27:06
 * @LastEditors: wanghh
 * @LastEditTime: 2022-08-11 11:43:15
 * @Description: 
-->

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { provide } from "@vue/runtime-core";

import { ParentObjType } from "../../../types/ProvideTypes";
import Children from "./Children.vue";
import BroChildren from "./BroChildren.vue";

// 获取子组件暴露出来的变量
const children = ref<any>(null);

const parentObj: ParentObjType = {
  name: "我是从父组件传过去的值",
};

const parentObj2: ParentObjType = {
  name: "我是从父组件传过去的对象2",
};

let childrenValue = ref<string>("00");

provide("parent", parentObj);
provide("parent2", parentObj2);

const handleChange = (value: string) => {
  console.log(value, "value9090");
  childrenValue.value = value;
};

// 处理兄弟组件的值 borChildren的值
const borChildren = ref<any>(null);

const handleEvent = () => {
  borChildren.value.handleChangeMsg("父组件通过defineExpose");
};

onMounted(() => {
  // 通过ref获取组件的值
  console.log(children.value.msg, "children");
  console.log(borChildren.value.msg, "borChildren");
});
</script>

<template>
  <div>父级组件哦 {{ childrenValue }}</div>
  <a-button @click="handleEvent">触发兄弟孩子组件的方法</a-button>
  <Children
    ref="children"
    :parentObj="parentObj"
    :title="'test title 传递'"
    @change="handleChange"
  />
  <div></div>
  <BroChildren ref="borChildren" title="attrs获取">
    <div>默认插槽</div>
    <template v-slot:footer> footer操作 </template>
  </BroChildren>
</template>

<style lang="less" scoped></style>
