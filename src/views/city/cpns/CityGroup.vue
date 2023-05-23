<template>
  <div class="city-group">
    <!-- 城市索引 -->
    <van-index-bar :sticky-offset-top="Number('-1')" :index-list= "indexList">
      <!-- 热门城市展示 -->
      <van-index-anchor index="热门城市" />
      <div class="hot-cities">
        <template v-for="(item, index) in groupData.hotCities">
          <div class="city" @click="clickHotCity(item)">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData['cities']" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index) in group['cities']" :key="index">
          <van-cell :title="city.cityName" @click="clickHotCity(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useCityStore from "@/stores/modules/city";
import { useRouter } from 'vue-router'
const router = useRouter()
const cityStore = useCityStore()
// 定义props
 const props =  defineProps({
    groupData: {
      type: Object,
      default: () => ({}),
    },
  });
  // 右侧索引
 const indexList = computed(() => {
   const indexList =  props.groupData.cities.map(item => item.group)
    indexList.unshift('#')
    return indexList

  })
  // 热门城市点击回退
  const clickHotCity = (city) => {
    // 获取城市数据
    cityStore.currentCity = city
    // 返回上一级
    router.back()
  }
</script>

<style scoped>
  .hot-cities {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap:wrap;
    padding: 10px;
    padding-right: 25px;
  }
  .city {
    height: 28px;
    width: 70px;
    border-radius: 10px;
    text-align: center;
    line-height: 28px;
    margin: 5px 0;
    color: #ffffff;
    background-color: rgb(65, 135, 242, 0.7);
  }
</style>
