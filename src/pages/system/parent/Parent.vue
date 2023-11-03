<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:27:06
 * @LastEditors: wanghh
 * @LastEditTime: 2023-11-03 10:09:58
 * @Description: 
-->

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { provide } from "@vue/runtime-core";

import { ParentObjType } from "../../../types/ProvideTypes";
import Children from "./Children.vue";
import BroChildren from "./BroChildren.vue";

// 获取子组件暴露出来的变量

// 定义基本类型（值类型）变量：
let varisBasic = ref<Boolean>(true);

// 定义引用类型变量：reactive
interface Book {
  name: string;
  age: number;
}
const book: Book = reactive({
  name: "我的阿勒泰",
  age: 24,
});

// 组件模板类型 不能用any(非特殊情况下)
// InstanceType 工具类来获取真实的例类型

const childrenRef = ref<any>(null);
const childrenModel = ref<InstanceType<typeof Children>>(null);

const parentObj: ParentObjType = {
  name: "我是从父组件传过去的值",
};

const parentObj2: ParentObjType = {
  name: "我是从父组件传过去的对象2",
};

let childrenValue = ref<string>("我是父组件本来的value");

provide("parent", parentObj);
provide("parent2", parentObj2);

// 父组件接受children组件传来的参数;
const handleChange = (value: string) => {
  console.log(value, "value9090");
  childrenValue.value = value;
};

// 处理兄弟组件的值 borChildren的值
const borChildrenRef = ref<any>(null);

const handleEvent = () => {
  borChildrenRef.value.handleChangeMsg("父组件通过defineExpose");
};

onMounted(() => {
  // 通过ref获取组件的值
  console.log(
    childrenRef.value.msg,
    "直接通过ref获取到子组件expose出来的值--children"
  );
  // console.log(childrenModel.value.msgModal, "childrenModel");
  console.log(
    borChildrenRef.value.msg,
    "直接通过ref获取到子组件expose出来的值--BroChildren"
  );
});
</script>

<template>
  <div>父级组件哦 {{ childrenValue }}</div>
  <a-button @click="handleEvent">触发兄弟孩子组件的方法</a-button>
  <Children
    ref="childrenRef"
    :parentObj="parentObj"
    :title="'test title 传递'"
    @change="handleChange"
  />
  <div></div>
  <BroChildren ref="borChildrenRef" title="attrs获取">
    <div>父组件默认的插槽-- 子组件渲染</div>
    <template v-slot:footer> 父组件定义的footer操作 </template>
  </BroChildren>
</template>

<style lang="less" scoped></style>
