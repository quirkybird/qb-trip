<template>
  <div class="search-box">
    <!-- banner -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <!-- 位置信息 -->
    <div class="location grey-bottom-line">
      <span class="city" @click="selectCity">{{ currentCity.cityName }}</span>
      <div class="position" @click="getCurrentPosition">
        <span class="text">我的位置</span>
        <i class="iconfont icon-location"></i>
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="date-range grey-bottom-line">
      <div class="date-info" @click="showCalendar = true">
        <div class="start">
          <span class="grey-text">入住</span>
          <span class="date">{{ startDate }}</span>
        </div>
        <span>至</span>
        <div class="end">
          <span class="grey-text">离店</span>
          <span class="date">{{ endDate }}</span>
        </div>
      </div>
      <div class="stay-time">共{{ diffCount }}晚</div>
    </div>
    <!-- 相关信息 -->
    <div class="describe-info grey-bottom-line">
      <span class="grey-text">价格不限</span>
      <span class="grey-text">人数不限</span>
    </div>
    <!-- 关键字/位置/民宿名 -->
    <div class="recommend grey-bottom-line">
      <span class="grey-text">关键字/位置/民宿名</span>
    </div>
    <!-- 热门建议 -->
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索框 -->
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
    <!-- 日历，做日期选择 -->
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      :round="false"
      :formatter="formatter"
      @confirm="onConfirm"
    />
  </div>
</template>

<script setup>
  import useCityStore from "@/stores/modules/city";
  import useHotSuggestStore from "@/stores/modules/home/hotSuggest";
  import { useRouter } from "vue-router";
  import { formatMonthDay, getDiffDays } from "@/utils/format_date";
  import { ref } from "vue";
  import { storeToRefs } from "pinia";
  const router = useRouter();
  // 选择城市
  function selectCity() {
    router.push("./city");
  }
  // 获取选取后对应的城市
  const cityStore = useCityStore();
  const currentCity = cityStore.currentCity;
  function getCurrentPosition() {
  // 获取当前位置的API 三个参数 success error options
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log("Longitude: " + crd.longitude);
        console.log("Latitude : " + crd.latitude);
        console.log("More or less " + crd.accuracy + " meters.");
      },
      (err) => {
        console.warn("ERROR(" + err.code + "): " + err.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
      }
    );
  }

  //   是否显示选择日期模块
  const showCalendar = ref(false);

  //时间的格式化处理
  const nowDate = new Date();
  const startDate = ref(formatMonthDay(nowDate));
  const newDate = nowDate.setDate(nowDate.getDate() + 1);
  const endDate = ref(formatMonthDay(newDate));
  //日期选择模块
  const diffCount = ref(1);
  //确认选择
  const onConfirm = (value) => {
    const selectStartDate = value[0];
    const selectEndDate = value[1];
    startDate.value = formatMonthDay(selectStartDate);
    endDate.value = formatMonthDay(selectEndDate);
    diffCount.value = getDiffDays(selectStartDate, selectEndDate);
    showCalendar.value = false;
  };
  //   内容格式化
  const formatter = (day) => {
    if (day.type === "start") {
      day.bottomInfo = "入住";
    } else if (day.type === "end") {
      day.bottomInfo = "离店";
    }
    return day;
  };

  //   热门建议
  const hotSuggestStore = useHotSuggestStore();
  hotSuggestStore.fetchHotSuggestData();
  const { hotSuggests } = storeToRefs(hotSuggestStore);

  // 开始搜索
  const searchBtnClick = () => {
    router.push({
      path: "/search",
      query: {
          startDate:startDate.value,
          endDate: endDate.value,
      }
    }) 
  }
</script>

<style scoped>
  .search-box {
    --van-calendar-popup-height: 100%;
  }
  /* banner样式 */
  .banner img {
    width: 100vw;
  }
  /* 位置信息样式 */
  .location {
    font-size: 16px;
    height: 40px;
    padding: 5px 26px;
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
  /* 日期范围样式 */
  .date-range {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 26px;
  }
  .date-info {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .start,
  .end,
  .stay-time {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .date {
    font-size: 16px;
    font-weight: 600;
  }
  /* 一些描述信息 */
  .describe-info,
  .recommend {
    padding: 10px 26px;
  }
  .describe-info {
    display: flex;
    justify-content: space-between;
  }
  .grey-text {
    color: var(--grey-font-color);
  }

  .hot-suggest {
    padding: 10px 26px;
    display: flex;
    flex-wrap: wrap;
  }
  .hot-suggest .item {
    padding: 5px;
    margin: 4px;
    border-radius: 12px;
  }

  /* 开始搜索按钮 */
  .search-btn {
    padding: 5px 26px;
  }
  .search-btn .btn {
    width: 100%;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, rgb(75, 166, 248), rgb(0, 111, 178));
  }
</style>
