<!--
 * @Author: wanghh
 * @Date: 2022-05-17 09:28:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-18 09:21:00
 * @Description: 
-->
<script setup lang="ts">
import Son from "./Son.vue";
import { ref } from "vue";

defineProps({
  parentObj: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const msg = ref<string>("我是孩子组件的msg");

//defineEmits 类型定义
const emits = defineEmits<{
  (e: "change", daya: string): void;
}>();

const change = () => {
  emits("change", "value from children");
};

defineExpose({
  msg,
});
</script>

<template>
  <div>
    孩子组件哦:{{ parentObj.name }}
    <a-button type="primary" @click="change">像父组件去触发</a-button>
  </div>
  <Son />
</template>

<style lang="less" scoped></style>
