<!--
 * @Author: wanghh
 * @Date: 2022-09-29 09:56:43
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-22 15:13:10
 * @Description: 监听和副作用监听 watch EffectWatch
-->
<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from "vue";
import { useMouse } from "./hook/mouse.js";

const { x, y } = useMouse();

const count = ref<number>(1);
const handleAdd = () => {
  count.value = count.value + 1;
};

const countChange = ref<String>("");
const countChange2 = ref<String>("");

// 只有count变化的时候才会执行回调
watch(count, (count, prevCount) => {
  let sting = `现在的count为：${count}, 之前的count为${prevCount}`;
  console.log("watch:", sting);
  countChange.value = sting;
  /* ... */
});

// 会立即执行一次回调
watchEffect(() => console.log("watchEffect:", count.value));

interface Person {
  name: string;
  age: number;
}
const person: Person = reactive({ name: "", age: 18 });

// 监听对象
watchEffect(() => console.log("watchEffect:", person));
// watch(person, (person, prevPerson) => {
//   console.log(person, "person");
// });
/*** * watch vs watchEffect 1. 参数不同，如果你想要知道之前的值，就可以用watch
2. 执行情况不同，watchEffect是立即执行 **/
</script>

<style lang="less" scoped></style>

<template>
  <div>搞清楚监听之间的区别{{ count }}</div>
  <!-- hook返回的x y本身就是带响应式的 -->
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <a-button @click="handleAdd">add</a-button>
  <div>{{ countChange }}</div>
  <!-- 注意要使用v-model:value 否则v-model不生效 -->
  <!-- 对于原生的控件是可以直接使用v-model的 但是类似UI的二次封装组件需要v-model:value -->
  <a-input v-model:value="person.name"></a-input>
  {{ person }}

  <input v-model="person.age" />
</template>
