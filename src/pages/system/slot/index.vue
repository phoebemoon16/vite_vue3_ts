<!--
 * @Author: wanghh
 * @Date: 2022-05-30 11:38:01
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-30 15:51:50
 * @Description:
-->
<script setup lang="ts">
import layout from "./Layout.vue";
</script>
<template>
  slot学习

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
</template>
