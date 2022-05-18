<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:27:06
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-18 09:24:00
 * @Description: 
-->

<script setup lang="ts">
import Children from "./Children.vue";
import BroChildren from "./BroChildren.vue";
import { ref, onMounted } from "vue";
import { provide } from "@vue/runtime-core";
import { ParentObjType } from "../../../types/ProvideTypes";

// 获取子组件暴露出来的变量
const children = ref<any>(null);
const borChildren = ref<any>(null);

const parentObj: ParentObjType = {
  name: "parent传过来的值",
};

const parentObj2: ParentObjType = {
  name: "parent传过来的值222",
};

let childrenValue = ref<string>("00");
provide("parent", parentObj);
provide("parent2", parentObj2);

const handleChange = (value: string) => {
  console.log(value, "value9090");
  childrenValue.value = value;
};

const handleEvent = () => {
  borChildren.value.handleChangeMsg("父组件通过defineExpose");
};
onMounted(() => {
  console.log(children.value.msg, "children");
  console.log(borChildren.value.msg, "borChildren");
});
</script>

<template>
  <div>父级组件哦 {{ childrenValue }}</div>
  <a-button @click="handleEvent">触发兄弟孩子组件的方法</a-button>
  <Children ref="children" :parentObj="parentObj" @change="handleChange" />
  <div></div>
  <BroChildren ref="borChildren" />
</template>

<style lang="less" scoped></style>
