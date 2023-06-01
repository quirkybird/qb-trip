<template>
  <div class="home" ref="home">
    <search-bar v-show="isTargetSrcoll" />
    <home-nav-bar />
    <home-search-box/>
    <home-gategory/>
    <home-list/>
  </div>
</template>

<script setup>
import { ref,onMounted,watch } from "vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import HomeNavBar from "./cnps/HomeNavBar.vue";
import HomeSearchBox from "./cnps/HomeSearchBox.vue"
import HomeGategory from "./cnps/HomeGategory.vue";
import HomeList from "./cnps/HomeList.vue";
import  useScroll from "@/hooks/useScroll"
import useHomeListStore from "@/stores/modules/home/homeList";
import { computed } from "vue";
  const homeListStore = useHomeListStore()
  const home = ref()
  let isTargetSrcoll = ref(false)
    // 滚动到底部
    let currentPage = 1
    const { isReachBottom, scrollTop }  = useScroll(home)
    watch( isReachBottom, (newValue) => {
        if(newValue) {
            currentPage++
            homeListStore.fetchHouseData(currentPage)
            .then(() => isReachBottom.value = false)
        }
    
    watch(scrollTop, (newValue) => {
      isTargetSrcoll.value =  (newValue >= 450 ? true : false)
    })


    // search-bar显示时机
  //   isTargetSrcoll = computed(() => {
  //     return scrollTop.value >= 450;
  // })
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
