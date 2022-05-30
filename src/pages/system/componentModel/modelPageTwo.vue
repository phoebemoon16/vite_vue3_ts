<!--
 * @Author: wanghh
 * @Date: 2022-05-30 11:38:01
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-30 15:37:33
 * @Description:https://v3.cn.vuejs.org/guide/component-basics.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model
-->
<script setup lang="ts">
import { computed } from "@vue/reactivity";

let props = defineProps({
  modelValue: String,
  str: String,
});
const emmits = defineEmits(["update:modelValue", "update:str"]);

// 普通组件的set get
const propsMessage = computed({
  // 获取到从父组件传来的值
  get: () => {
    return props.modelValue;
  },
  // 提交到父组件数据
  set: (val) => {
    emmits("update:modelValue", val);
  },
});

const propsMessageStr = computed({
  // 获取到从父组件传来的值
  get: () => {
    return props.str;
  },
  // 提交到父组件数据
  set: (val) => {
    emmits("update:str", val);
  },
});
// 与propsMessage的computed效果是一样的
//  <input
//       :value="modelValue"
//       @input="$emit('update:modelValue', $event.target.value)"
//     >
</script>
<template>
  <h3>子组件222控制父组件的input的输入框</h3>
  <input type="text" v-model="propsMessage" />
  <input type="text" v-model="propsMessageStr" />
</template>
