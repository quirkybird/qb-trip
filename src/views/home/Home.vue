<template>
  <div class="home">
    <home-nav-bar />
    <home-search-box/>
    <home-gategory/>
  </div>
</template>

<script setup>
import HomeNavBar from "./cnps/HomeNavBar.vue";
import HomeSearchBox from "./cnps/HomeSearchBox.vue"
import HomeGategory from "./cnps/HomeGategory.vue";
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
