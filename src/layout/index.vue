<!--
 * @Author: wanghh
 * @Date: 2022-04-01 11:31:52
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-10 17:53:07
 * @Description: 
-->
<template>
  <header id="header"><div class="right"></div></header>
  <main>
    <aside>
      <div v-for="route in store.router" :key="route.path" class="route">
        <router-link
          :to="route.path"
          class="route-link"
          @click="tagOnClick(route)"
        >
          {{ route.meta.title }}</router-link
        >
        <div v-if="route.children">
          <div
            v-for="childreRoute in route.children"
            :key="childreRoute.path"
            class="child-route"
          >
            <router-link
              :to="childreRoute.path"
              class="route-link"
              @click="tagOnClick(childreRoute)"
            >
              {{ childreRoute.meta.title }}</router-link
            >
          </div>
        </div>
      </div>
    </aside>
    <content>
      <!-- breadCrumb 面包屑 -->
      <div class="breadCrumb">
        <span v-for="(item, index) in route.matched" :key="item.path">
          <span>{{ item.meta.title }}</span>
          <span v-show="index !== route.matched.length - 1" class="gap">/</span>
        </span>
      </div>
      <!-- tags 可供展示的tags -->
      <div class="multi-tags">
        <div
          class="multi-tags-items"
          v-for="(item, index) in store.multiTags"
          :key="index"
          @click="routePush(item.path)"
        >
          {{ item.meta.title }}
          <span class="icon">*</span>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </content>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMainStore } from "@/store/main";
import { useRoute, useRouter } from "vue-router";

const store = useMainStore();
const route = useRoute();
const router = useRouter();
const routes = router.options.routes;

// 左侧点击菜单
function tagOnClick(items: any) {
  useMainStore().addMultiTags(items);
  console.log(useMainStore().multiTags, "items");
}

//  点击multiple
function routePush(path: string) {
  router.push({ path: path });
}

onMounted(() => {
  console.log(store.router, store.multiTags, "store.multiTags");
});
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  background-color: #f5f5f5;
  .right {
    float: right;
    border-radius: 25px;
    margin-right: 20px;
    height: 40px;
    width: 40px;
    background-color: #d9afd9;
    background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  }
}
main {
  display: flex;
  height: 100vh;
  aside {
    width: 10%;
    background-color: #dcdcdc;

    .route {
      margin-left: 20px;
      margin-top: 20px;
      color: #fff;
      .route-link {
        text-decoration: none;
        color: #3f3f3f;
      }
      .child-route {
        padding: 5px 0px;
        margin-left: 10px;
      }
    }
  }
  content {
    width: 90%;
    .breadCrumb {
      text-align: left;
      padding: 0px 20px;
      background-color: #8bc6ec;
      background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
      .gap {
        padding: 0px 10px;
      }
    }
    .multi-tags {
      padding: 10px 0px;
      background-color: #f5f5f5;
      .multi-tags-items {
        display: inline-block;
        border: 1px solid #ccc;
        padding: 0px 10px;
        margin: 0px 10px;
        cursor: pointer;
      }
    }
    .content {
      text-align: center;
      background-color: #fff;
    }
  }
}
</style>
