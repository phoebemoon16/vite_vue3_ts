<!--
 * @Author: wanghh
 * @Date: 2022-03-31 15:27:53
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 17:09:32
 * @Description: 
-->
<template>
  <div>{{ mainStore.name }}</div>
  登录页面
  <button @click="testPro">测试button请求</button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useMainStore } from "@/store/main";
import { onMounted } from "@vue/runtime-core";
// import loginApi from "@/service/api/login/login";
const mainStore = useMainStore();

// type GreetFunction = (a: string) => void;

const api: any = inject("$api");

console.log(api, "api0-0-");
function testPro() {
  api.login({ userName: "111", passWord: 122 });
}
</script>
