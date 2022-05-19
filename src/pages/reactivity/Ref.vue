<!--
 * @Author: wanghh
 * @Date: 2022-05-18 15:36:07
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 10:00:30
 * @Description: 
-->
<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";

const refCount = ref<number>(0);

interface ReactiveObj {
  count: number;
}
const reaCount: ReactiveObj = reactive({ count: 1 });

const handleAdd = () => {
  refCount.value = refCount.value + 1;
};

const handleReaAdd = () => {
  reaCount.count = reaCount.count + 1;
};

watchEffect(() => {
  console.log(reaCount.count, refCount.value, "number2.value");
});
</script>

<template>
  <h2>ref vs reactive</h2>
  <div>
    {{ refCount }}
  </div>
  <a-button @click="handleAdd">增加refcount</a-button>

  <div>
    {{ reaCount.count }}
  </div>
  <a-button @click="handleReaAdd">增加reactive</a-button>
</template>

<style lang="less" scoped></style>
