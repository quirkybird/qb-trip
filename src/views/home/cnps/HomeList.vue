<template>
  <div class="home-list">
  <span class="text">房间列表</span>
    <template v-for="(house, index) in houseData">
    <div class="list">
        <div class="house-img">
            <img :src="house.data.image?.url" alt="">
        </div>
        <div class="house-info">
            <div class="house-name">{{ house.data?.houseName }}</div>
            <van-rate 
            :model-value="Number(house.data?.commentScore)" 
            size="14px"
            color="#ffd21e"
            :allow-half="true" 
            :readonly="true"/>
            <div class="house-desc">{{ house.data?.summaryText }}</div>
            <div class="house-loc">{{ house.data?.location }}</div>
            <div class="price">
                <span>{{ house.data?.finalPrice }}</span>
            </div>
        </div>
  </div>
    </template>
    <!-- <button @click="moreHouseBtn">加载更多房屋资源</button> -->
  </div>
</template>

<script setup>
import useHomeListStore from "@/stores/modules/home/homeList";
  import { storeToRefs } from "pinia";
    // 获取请求数据
  const homeListStore = useHomeListStore();
  homeListStore.fetchHouseData(1);
  const { houseData } = storeToRefs(homeListStore)

    //加载更多
    // let currentPage = 1
    // const moreHouseBtn = () => {
    //     currentPage++;
    //     homeListStore.fetchHouseData(currentPage)
    // }

</script>

<style scoped>
    .text {
        font-size: 20px;
        font-weight: 600;
        padding: 0 16px;
    }
    .list {
        margin: 5px 16px;
        display: flex;
        justify-content: flex-start;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

    }
    .list img {
        width: 100px;
        border-radius: 5px;
    }
    .house-img {
        padding: 10px;
    }
    .house-info {
        position: relative;
        padding: 10px;
        width: 203.2px;
    }
    .house-info div {
        font-weight: 300;
    }
    .house-name {
        font-weight: 400;
    }
    .house-desc, .house-loc {
        color: var(--grey-font-color);
        padding: 2px;
    }
    .price {
        position: absolute;
        bottom: 10px;
        right: 8px;
    }
    .price span {
        float: right;
        font-size: 20px;
        font-weight: 400;
        color: var(--deep-blue-color);
    }
    .price span::before {
        content: "￥";
        font-size: 13px;
    }
    .price span::after {
        content: "起";
        font-size: 13px;
        padding: 3px;
    }

</style>