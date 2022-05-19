<!--
 * @Author: wanghh
 * @Date: 2022-05-19 08:38:06
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 09:41:05
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";

const open = ref<Boolean>(false);
const handleOpen = () => {
  open.value = true;
};
</script>

<template>
  <div class="title">
    <span
      >teleport 允许我们去向组件DOM内去插入一块组件模板， to属性
      是要插入的DOM的选择器</span
    >
  </div>
  <a-button @click="handleOpen">打开teleport</a-button>
  <!-- <Teleport to="body"> -->
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
  <!-- </Teleport> -->
</template>

<style scoped>
.title {
  margin: 10px;
  width: 98%;
  min-height: 50px;
  border: 1px solid #ccc;
  background-image: linear-gradient(0deg, #fff, #f3f5f8);
  border: 2px solid #fff;
}
.modal {
  background-image: linear-gradient(0deg, #ccc, #f3f5f8);
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
