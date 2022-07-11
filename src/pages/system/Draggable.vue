<!--
 * @Author: wanghh
 * @Date: 2022-07-11 08:44:50
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-11 17:27:59
 * @Description:
-->
<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import { ref } from "vue";

const list = ref([
  { name: "111" },
  { name: "222" },
  { name: "333" },
  { name: "444" },
]);

const list2 = ref([{ name: "211" }]);
function log() {}
</script>
<template>
  可拖拽组件
  <div class="drag">
    <VueDraggableNext
      class="dragArea list-group1"
      v-model="list"
      :group="{ name: 'people', pull: 'clone', put: false }"
      ghost-class="ghost"
      :sort="false"
      @change="log"
    >
      <div
        class="list-group-item drag1"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </VueDraggableNext>

    <h3>Draggable 2</h3>
    <VueDraggableNext
      class="dragArea list-group2"
      :list="list2"
      group="people"
      :sort="false"
      @change="log"
    >
      <div
        class="list-group-item drag2"
        v-for="element in list2"
        :key="element.name"
      >
        <div class="drag2-content">
          <span>{{ element.name }}</span>
          <span class="icon">*</span>
        </div>
      </div>
    </VueDraggableNext>
  </div>
</template>
<style lang="scss" scoped>
.drag {
  // display: flex;
  text-align: center;
  .dragArea {
    display: flex;
    // align-items: center;
    justify-content: center;
    margin: 20px 0px;
  }
}

.list-group-item {
  border: 1px solid #ccc;
  padding: 5px 5px;
  width: 50px;
  cursor: move;
}
.drag2 {
  width: 60px;
  margin: 0 10px;
  .drag2-content {
    // display: flex;
    // // align-items: center;
    // justify-content: space-between;
  }
  .icon {
    display: none;
  }
  .icon:hover {
    display: block;
  }
}
.drag2:hover .icon {
  display: inline;
  margin-left: 10px;
}
</style>
>
