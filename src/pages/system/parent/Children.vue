<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:28:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-08-11 14:30:29
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
}
defineProps<Props>();

// js用法
/*
defineProps({
  title: String,
  parentObj: Object
})
*/
const msg = ref<string>("我是孩子组件的msg");

//defineEmits 类型定义
const emits = defineEmits<{
  (e: "change", daya: string): void;
}>();

const change = () => {
  emits("change", "value from children");
};

// 暴露出msg 父组件可以通过ref去接收
defineExpose({
  msg,
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
