<template>
  <div class="details" ref="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <template v-if="houseDetailsStore.house">
      <house-swipe :house="houseDetailsStore.house" ref="swipe" />
      <house-info :house="houseDetailsStore.house" ref="info" />
      <house-facility :house="houseDetailsStore.house" ref="facility" />
      <house-landlord :house="houseDetailsStore.house" ref="landlord" />
      <house-comment :house="houseDetailsStore.house" ref="comment" />
      <house-map :house="houseDetailsStore.house" ref="map" />
      </template>
    <!-- 标签 -->
    <div class="vant-tab" :v-show="isTab">
      <van-tabs 
      @click-tab="scrollToContent()" 
      v-model:active="active"
      v-show="isTab">
        <van-tab title="概览" ></van-tab>
        <van-tab title="设施" ></van-tab>
        <van-tab title="房东" ></van-tab>
        <van-tab title="点评" ></van-tab>
        <van-tab title="周边" ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
  import HouseSwipe from "./cpns/HouseSwipe.vue";
  import HouseInfo from "./cpns/HouseInfo.vue";
  import HouseLandlord from "./cpns/HouseLandlord.vue";
  import HouseFacility from "./cpns/HouseFacility.vue";
  import HouseComment from "./cpns/HouseComment.vue";
  import HouseMap from "./cpns/HouseMap.vue"
  import router from "@/router";
  import useHouseDetailsStore from "@/stores/modules/house/houseDetails";
  import { useRoute } from "vue-router";
  import useScroll from "@/hooks/useScroll";
  import { ref, onMounted, computed, getCurrentInstance } from "vue";
import { watch } from "vue";
  const onClickLeft = () => {
    router.back();
  };
  const route = useRoute();
  const houseDetailsStore = useHouseDetailsStore();
  houseDetailsStore.fetchHouseDetails(route.params.id);

  // tab出现处理
  const detail = ref();
  const { scrollTop } = useScroll(detail);
  const isTab = computed(() => {
    return scrollTop.value > 300;
  });
  const active = ref(4)
  // 滚动tab-bar显示处理
  // 获取相关组件
  const info = ref(null);
  const facility = ref(null);
  const landlord = ref(null);
  const comment = ref(null);
  const map = ref(null);
  // 点击tab栏滚动到相应位置
  const cpnsArr = [info, facility, landlord, comment, map]

  let isClick = false
  let currentTop = -1
  const scrollToContent = () => {
        let top = cpnsArr[active.value].value.$el.offsetTop
        if(active.value != 0) {
            top -= 39
        }

        isClick = true
        currentTop = top
       detail.value.scrollTo({ 
        top,
        behavior: "smooth"
       });
    };
    
  // 滚动，切换到相应的bar
    watch(scrollTop,(newvalue) => {
    const value = cpnsArr.map((item, index) => {
      console.log(currentTop + "c")
      console.log(newvalue + "n")
      if(currentTop === newvalue) isClick = false
      if(isClick) return

        if(index != 0) {
         return item.value.$el.offsetTop - 44
        } else {
         return item.value.$el.offsetTop
        }
    })
      for(let i = 0; i < value.length; i++) {
          if(value[i] >= newvalue) {
            active.value = i - 1
            break;
          }
      }
      })
</script>

<style scoped>
  .details {
    background-color: #f1f3f5;
    height: 100vh;
    overflow-y: auto;
  }
  .vant-tab {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
</style>
