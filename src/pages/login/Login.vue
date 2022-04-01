<!--
 * @Author: wanghh
 * @Date: 2022-03-31 15:27:53
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 17:35:05
 * @Description: 
-->
<template>
  <div>{{ mainStore.name }}</div>
  登录页面
  <button @click="testPro">测试button请求</button>
</template>

<script setup lang="ts">
// provide inject 可以设置全局引入
// import { inject } from "vue";
// const api: any = inject("$api");
import { useMainStore } from "@/store/main";
import loginApi from "@api/login";
const mainStore = useMainStore();

// type GreetFunction = (a: string) => void;
function testPro() {
  loginApi.login({ userName: "111", passWord: 122 });
}
</script>
