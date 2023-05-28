<template>
  <div class="search-bar">
    <div class="left">
      <div class="stay"><span class="text">住</span>{{ startDateStr }}</div>
      <div class="leave"><span class="text">离</span>{{ endDateStr }}</div>
    </div>
    <div class="right">
      <div class="search-box">关键字/位置/民宿名</div>
      <span class="search-icon"><i class="">dada</i></span>
    </div>
  </div>
</template>

<script setup>
  import useMainStore from '@/stores/modules/mian';
  import { computed,ref } from "vue"
  import { formatMonthDay } from '@/utils/format_date';
import { storeToRefs } from 'pinia';
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
      const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
      const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<style scoped>
  .text {
    color: var(--grey-font-color);
  }
  .search-bar {
    z-index: 10;
    height: 40px;
    padding: 10px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
  .left,
  .right {
    background-color: #f2f4f6;
    border-radius: 5px;
  }
  .left {
    flex: 1;
    text-align: center;
    padding: 5px;
  }
  .right {
    margin-left: 1px;
    flex: 3;
  }
  .stay .leave {
    margin: 2px;
  }
  .search-box {
    padding-left: 10px;
    line-height: 40px;
    float: left;
    color: var(--grey-font-color);
  }
  .search-icon {
    float: right;
  }
</style>
