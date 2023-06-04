<template>
  <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
  <van-overlay :show="mainStore.isLoadingShow"
   @click="mainStore.isLoadingShow = false" >
   <div class="wrapper" @click.stop>
    <van-loading type="spinner" size="50px"/>
  </div>
   </van-overlay>
  <tab-bar v-if="!route.meta.hideTabBar"/>
</template>

<script setup>
  import tabBar from "@/components/tab-bar/tabBar.vue"
  import {useRoute} from "vue-router"
  import useMainStore from "./stores/modules/mian";
  const mainStore = useMainStore()
  const route = useRoute()
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 120px;
    background-color: #fff;
  }
</style>