<!--
 * @Author: wanghh
 * @Date: 2022-04-01 11:31:52
 * @LastEditors: wanghh
 * @LastEditTime: 2022-04-01 16:25:23
 * @Description: 
-->
<template>
  <header id="header">布局设计</header>
  <main>
    <aside></aside>
    <content><router-view></router-view></content>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  height: 50px;
  background-color: #c6c6c6;
}
main {
  display: flex;
  height: 100vh;
  aside {
    width: 15%;
    background-color: #cfcfcf;
  }
  content {
    width: 85%;
    text-align: center;
    background-color: #fff;
  }
}
</style>
