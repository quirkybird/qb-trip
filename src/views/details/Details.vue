<template>
  <div class="details">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <house-swipe :house="houseDetailsStore.house" />
  </div>
</template>

<script setup>
  import HouseSwipe from "./cpns/HouseSwipe.vue";
  import router from "@/router";
  import useHouseDetailsStore from "@/stores/modules/house/houseDetails";
  import { useRoute } from "vue-router";
  const onClickLeft = () => {
    router.back();
  };
  const route = useRoute();
  const houseDetailsStore = useHouseDetailsStore();
  houseDetailsStore.fetchHouseDetails(route.params.id).then(() => console.log(houseDetailsStore.house));
</script>

<style scoped></style>
