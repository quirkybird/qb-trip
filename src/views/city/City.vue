<template>
  <div class="city-list">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        show-action
        @cancel="cancelClick"
        shape="round"
      />
      <van-tabs v-model:active="active">
        <template v-for="(item, key) in allCities" :key="key">
          <van-tab :title="item.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(item, key, index) in allCities" :key="index">
      <city-group :group-data="item" v-show="key === active"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { ref, computed } from "vue";
  import { storeToRefs } from "pinia";
  import useCityStore from "@/stores/modules/city";
  import CityGroup from "./cpns/CityGroup.vue"
  const router = useRouter();
  const searchValue = ref("");
  // 取消后返回首页

  function cancelClick() {
    router.back();
  }

  // tab的切换
  const active = ref(0);

  const cityStore = useCityStore();
  cityStore.fetchAllCitiesData();
  const { allCities } = storeToRefs(cityStore);

  //目的：想要获得对应标签数据库内容
  // 使用组件库搜索框组件 name属性绑定key值，使currentGroup在切换标签时动态改变
  // 难点，用computed实现currentGroup响应式
  const currentGroup = computed(() => allCities.value[active.value]);

  /**
   * 这个地方发送网络请求有两个缺点：
   * 1.如果网络请求太多，那么组件中存在太多数据处理逻辑
   * 2.如果有很多子组件，那么就需要将数据传递过去（Props）
   */
  // 数据请求
  // const allCityData = ref({})
  // getCityAll().then((res) => {
  //   allCityData.value = res.data
  // })
</script>

<style scoped>
  .city-list {
    --van-tabs-line-height: 30px;
  }
  .top {
    position: relative;
    z-index: 2;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
</style>
