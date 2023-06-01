<template>
  <div class="details" ref="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <template v-if="houseDetailsStore.house">
      <house-swipe :house="houseDetailsStore.house" />
      <house-info :house="houseDetailsStore.house" />
      <house-facility :house="houseDetailsStore.house" />
      <house-landlord :house="houseDetailsStore.house" />
      <house-comment :house="houseDetailsStore.house" />
    </template>
    <!-- 标签 -->
    <div class="vant-tab" :v-show="isTab">
      <van-tabs @click-tab="onClickTab" v-show="isTab">
      <van-tab title="概览"></van-tab>
      <van-tab title="设施"></van-tab>
      <van-tab title="房东"></van-tab>
      <van-tab title="点评"></van-tab>
      <van-tab title="周边"></van-tab>
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
  import router from "@/router";
  import useHouseDetailsStore from "@/stores/modules/house/houseDetails";
  import { useRoute } from "vue-router";
  import useScroll from "@/hooks/useScroll";
  import { ref } from "vue";
import { computed } from "vue";
  const onClickLeft = () => {
    router.back();
  };
  const route = useRoute();
  const houseDetailsStore = useHouseDetailsStore();
  houseDetailsStore.fetchHouseDetails(route.params.id);

  // tab出现处理
  const detail = ref();
  const { scrollTop } = useScroll(detail);
  const isTab = computed(() =>{
   return scrollTop.value > 300
  })
// 
  const sectionEls = ref({})
  const names = computed(() => {
    return Object.keys(sectionEls.value)
  })

  const getSectionRef = (value) => {
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
  }
  // 标签点击事件
  function onClickTab() {
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let instance = el.offsetTop
    if(index !== 0) {
      instance = instance - 44
    }

  detail.value.scrollTo({
    top: instance,
    behavior: "smooth"
  })
}
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
  }
</style>
