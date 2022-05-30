<script setup lang="ts">
import modelPage from "@/pages/system/componentModel/modelPage.vue";
import modelPageTwo from "@/pages/system/componentModel/modelPageTwo.vue";
import { ref } from "vue";
let str = ref("111");
let str2 = ref("222");
</script>
<template>
  <h3>组件上使用v-model</h3>
  {{ str }} -- component1 {{ str2 }} ---component2
  <!-- 在子组件上使用v-model -->
  <modelPage v-model="str" />
  <!-- 一个组件上有多个model -->
  <modelPageTwo v-model:str="str" v-model="str2" />
  <!-- 类似于 <组件名 :model-value="property" @update:modelValue="emitEvent"> -->
  <!-- 当多个子组件上使用v-model时，可以在后面后缀方法 -->
  <!-- <child 
    v-model:custom="message"
    @update:custom="updateCustom"
    ></child> -->
</template>
