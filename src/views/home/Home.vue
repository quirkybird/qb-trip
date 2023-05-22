<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <span class="city" @click="selectCity">北京</span>
      <div class="position" @click="getCurrentPosition">
        <span class="text">我的位置</span>
        <i class="iconfont icon-location"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HomeNavBar from './cnps/HomeNavBar.vue';
  import {useRouter} from 'vue-router'
  const router = useRouter()
  // 选择城市
  function selectCity() {
    router.push("./city")
  }
  function getCurrentPosition() {
    // 获取当前位置的API 三个参数 success error options
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords
        console.log('Your current position is:');
        console.log('Longitude: ' + crd.longitude);
        console.log('Latitude : ' + crd.latitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    },
      (err) => {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    },
    {
        enableHighAccuracy: false,
        timeout: 5000,
    }
    )
  }
</script>

<style scoped>
.banner img {
  width: 100vw;
}
.location {
  height: 40px;
  padding: 0 26px;
  display: flex;
  align-items: center;
}
.city {
  flex: 1;
}
.position .text {
  margin-right: 12px;
}
.position {
  display: flex;
  align-items: center;
}
.icon-location {
  font-size: 24px;
  color: var(--primary-color);
}
</style>
