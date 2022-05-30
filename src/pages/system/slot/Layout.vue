<!--
 * @Author: wanghh
 * @Date: 2022-05-30 15:48:06
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-30 15:51:30
 * @Description: out
-->
<script setup lang="ts"></script>
<template>
  <!-- layout 布局学习 -->
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
