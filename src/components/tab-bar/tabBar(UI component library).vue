<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="var(--primary-color)">
      <template v-for="item in tabBarData" :key="item">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <i :class="[item.icon]"></i>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabBarData";
import { ref } from "vue";
let currentIndex = ref(0);
</script>

<style scoped>
    /* 局部定义一个变量，只对当前作用域有效 */
    /* --van-tabbar-item-font-size: 25px !important; */
    .iconfont {
        font-size: 28px;
    }
    /* :deep 可以让当前css的样式穿透到子组件中 */
    /* :deep(.van-tabbar-item__icon) {
        font-size: px;
    } */
</style> 
