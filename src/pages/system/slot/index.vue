<!--
 * @Author: wanghh
 * @Date: 2022-05-30 11:38:01
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-01 17:18:11
 * @Description:
-->
<script setup lang="ts">
import layout from "./Layout.vue";
import "./index.css";

import { ref, reactive, computed } from "vue";

const count = ref(1);
const isActive = ref(true);
const errorClass = ref("text-danger");
// style 响应式对象
const styleObject = reactive({
  color: "green",
  fontSize: "16px",
});

// 计算属性
const doundCount = computed(() => {
  return count.value * 2;
});
</script>
<template>
  slot学习
  <span>行内元素的水平居中</span>
  <div class="singal"></div>
  <div class="singal2"></div>
  <layout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </layout>

  <div class="bfc bfc1"></div>
  <div class="bfc"></div>
  <!-- 动态class isActive为true的时候样式为active -->
  <div :class="{ active: isActive }">active active</div>
  <div :class="[errorClass]">error calss</div>
  <!-- 动态style styleObject -->
  <div :style="styleObject">style object</div>
  {{ doundCount }}
</template>
