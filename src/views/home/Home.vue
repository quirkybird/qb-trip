<template>
  <div class="home" ref="home">
    <home-nav-bar />
    <home-search-box/>
    <home-gategory/>
    <home-list/>
  </div>
</template>

<script setup>
import { ref,onMounted,watch } from "vue";
import HomeNavBar from "./cnps/HomeNavBar.vue";
import HomeSearchBox from "./cnps/HomeSearchBox.vue"
import HomeGategory from "./cnps/HomeGategory.vue";
import HomeList from "./cnps/HomeList.vue";
import  useScroll from "@/hooks/useScroll"
import useHomeListStore from "@/stores/modules/home/homeList";
  const homeListStore = useHomeListStore()
  const home = ref()
  
  onMounted(() => {
    // 滚动到底部
    let currentPage = 1
    const { isReachBottom }  = useScroll(home.value)
    watch( isReachBottom, (newValue) => {
        if(newValue) {
            currentPage++
            homeListStore.fetchHouseData(currentPage)
            .then(() => isReachBottom.value = false)
        }
    })
  })
</script>

<style scoped>
.home {
  height: calc(100vh - 60px);
  overflow-y: auto;
}
.home::-webkit-scrollbar {
  display: none;
}
</style>
