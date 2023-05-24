<template>
  <div class="home-category">
    <template v-for="(item, index) in homeCategories" :key="index">
      <div class="category-item">
        <img :src="item.subPictureUrl" alt="" />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import useCategory from "@/stores/modules/home/homeCategory";
  import { storeToRefs } from "pinia";

  const homeCategoriesStore = useCategory();
  homeCategoriesStore.fetchHomeGategories();
  const { homeCategories } = storeToRefs(homeCategoriesStore);
</script>

<style scoped>
  .home-category {
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    /* flex-wrap: nowrap; */
    overflow-x: auto;
    height: 70px;
    scrollbar-width: none;
  }
  .home-category::-webkit-scrollbar {
    display: none;
  }
  .home-category img {
    width: 2.4rem;
  }
  .category-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 76px;
    flex-shrink: 0;
    text-align: center;
  }
  .text {
    margin-top: 5px;
    font-size: 12px;
  }
</style>
