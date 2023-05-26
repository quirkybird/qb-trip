<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="item">
      <div
        :class="['tab-bar-item', { 'active-view': currentIndex === index }]"
        @click="toggleView(index, item)"
      >
        <i :class="[item.icon]"></i>
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import tabBarData from "@/assets/data/tabBarData";
  import { watch } from "vue";
  import { computed } from "vue";
  import { ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  const router = useRouter();
  // view的当前索引
  let currentIndex = ref(0);
  function toggleView(index, item) {
    currentIndex.value = index;
    router.push(item.path);
  }
//   监听路由的变化，来设置currentIndex
  const route = useRoute();
  watch(route, (newValue) => {
    const routeIndex = tabBarData.findIndex(
        (item) => item.path === newValue.path
      );
      if (routeIndex === -1) return;
      currentIndex.value = routeIndex
  })
  
</script>

<style scoped>
  .tab-bar {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid rgb(228, 225, 225);
    display: flex;
    height: 60px;
  }
  .iconfont {
    font-size: 28px;
  }
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }
  .active-view {
    color: var(--primary-color);
  }
</style>
