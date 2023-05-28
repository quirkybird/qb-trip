<template>
  <div class="house-swipe">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" lazy-render>
      <!-- <van-swipe-item v-for="image in houseImages" :key="image">
        <img :src="image" />
      </van-swipe-item> -->
    </van-swipe>

    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
  import useHouseDetailsStore from "@/stores/modules/house/houseDetails";
  import { storeToRefs } from "pinia";
  // const  props = defineProps({
  //   house: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  // });
  // console.log(props.house)
  const houseDetailsStore = useHouseDetailsStore();
  const { house } = storeToRefs(houseDetailsStore);
  // console.log(house.value)
  // const houseImages = props.house.mainPart.topModule.housePicture.housePics
</script>

<style scoped></style>
