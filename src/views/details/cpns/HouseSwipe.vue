<template>
  <div class="house-swipe">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" lazy-render class="swipe">
      <template v-for="image in houseImages" :key="image">
        <van-swipe-item>
          <img :src="image.url" class="pic"/>
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  computed;
  const props = defineProps({
    house: {
      type: Object,
      default: () => ({}),
    },
  });
  const houseImages = computed(() => {
    return props.house.mainPart.topModule.housePicture.housePics;
  });
</script>

<style scoped>
  .pic{
    width: 100%;
  }
</style>
