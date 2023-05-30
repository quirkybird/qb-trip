<template>
  <div class="details">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <template v-if="houseDetailsStore.house">
        <house-swipe :house="houseDetailsStore.house" />
        <house-info :house="houseDetailsStore.house" />
        <house-facility :house="houseDetailsStore.house"/>
        <house-landlord :house="houseDetailsStore.house"/>
    </template>
  </div>
</template>

<script setup>
  import HouseSwipe from "./cpns/HouseSwipe.vue";
  import HouseInfo from "./cpns/HouseInfo.vue";
  import HouseLandlord from "./cpns/HouseLandlord.vue";
  import HouseFacility from "./cpns/HouseFacility.vue";
  import router from "@/router";
  import useHouseDetailsStore from "@/stores/modules/house/houseDetails";
  import { useRoute } from "vue-router";
  const onClickLeft = () => {
    router.back();
  };
  const route = useRoute();
  const houseDetailsStore = useHouseDetailsStore();
  houseDetailsStore.fetchHouseDetails(route.params.id);
  
</script>

<style scoped>
  .details {
    background-color: #f1f3f5;
    height: 100vh;
    overflow-y: auto;
  }
</style>
