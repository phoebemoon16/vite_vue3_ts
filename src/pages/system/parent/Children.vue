<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:28:36
 * @LastEditors: wanghh
 * @LastEditTime: 2023-11-03 10:00:41
 * @Description: 
-->
<script setup lang="ts">
import Son from "./Son.vue";
import { ref } from "vue";
import { ParentObjType } from "../../../types/ProvideTypes";

// props的ts类型检查
interface Props {
  parentObj: ParentObjType;
  title: string;
  value: [];
}
defineProps<Props>();

// type GreetFunction<> = (a: void) => Array;

// js用法
/*
defineProps({
  title: String,
  parentObj: Object
})
*/
const msg = ref<string>("我是孩子组件的msg");
const msgModal = ref<string>("通过MOdal的InstanceType调用获取到的msg");
//defineEmits 类型定义 吧msg传递过去
const emits = defineEmits<{
  (e: "change", value: string): void;
}>();

const change = () => {
  emits("change", "我是从子组件传来替换父组件的value");
};

// 暴露出msg 父组件可以通过ref去接收
defineExpose({
  msg,
  msgModal,
});
</script>

<template>
  <div>
    孩子组件哦:{{ parentObj.name }} {{ title }} --- tans by father
    <a-button type="primary" @click="change">像父组件去触发</a-button>
  </div>
  <Son />
</template>

<style lang="less" scoped></style>
