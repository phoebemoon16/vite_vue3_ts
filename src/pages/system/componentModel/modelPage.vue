<!--
 * @Author: wanghh
 * @Date: 2022-05-30 11:38:01
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-30 14:57:37
 * @Description:
-->
<script setup lang="ts">
import { computed } from "@vue/reactivity";

// defineProps<{ modelValue: string }>();
let props = defineProps<{ modelValue: string }>();
const emmits = defineEmits(["update:modelValue"]);

// 普通组件的set get
const propsMessage = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emmits("update:modelValue", val);
  },
});
</script>
<template>
  <h3>子组件控制父组件的input的输入框</h3>
  <input type="text" v-model="propsMessage" />
</template>
