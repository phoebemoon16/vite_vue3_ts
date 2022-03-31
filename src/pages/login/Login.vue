<!--
 * @Author: wanghh
 * @Date: 2022-03-31 15:27:53
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 16:20:29
 * @Description: 
-->
<template>
  <div>{{ mainStore.name }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/page/store/mian";

const mainStore = useMainStore();
</script>
