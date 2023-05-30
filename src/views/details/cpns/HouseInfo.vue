<template>
  <div class="house-infos section">
    <div class="house-name">{{ topModule.houseName }}</div>
    <div class="house-tag">
      <template v-for="(tag, index) in topModule.houseTags" :key="index">
        <div
          class="tag"
          v-if="tag.tagText"
          :style="{
            color: tag.tagText?.color,
            background: tag.tagText?.background?.color,
          }"
        >
          {{ tag.tagText.text }}
        </div>
      </template>
    </div>
    <div class="comment-brief clearfix">
      <div class="left">
        <span class="overall">{{ topModule.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ topModule.commentBrief.scoreTitle }}</span>
        <span class="comment">"{{ topModule.commentBrief.commentBrief }}"</span>
      </div>
      <div class="right">
        <span>{{ topModule.commentBrief.totalCount }}条评论(箭头)</span>
      </div>
    </div>
    <div class="location">
      <div class="loc-left">
        <div>{{ topModule.nearByPosition.address }}</div>
      </div>
      <div class="loc-right">地图•周边(箭头)</div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    house: {
      type: Object,
      default: () => ({}),
    },
  });

  const topModule = computed(() => props.house.mainPart.topModule);
</script>

<style scoped>
  .house-infos{
    background-color: #fff;
  }
  .house-name {
    font-size: 20px;
    font-weight: 700;
    /* letter-spacing: 0.1rem; */
    line-height: 24px;
    text-align: justify;
    color: #333;
  }
  .house-tag {
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0;
  }
  .tag {
    margin: 4px 4px;
    padding: 2px;
    border-radius: 2px;
    text-align: center;
    font-size: 12px;
  }
  .left {
    float: left;
    line-height: 1rem;
  }
  .overall {
    font-size: 20px;
  }
  .comment {
    font-weight: 300;
    font-size: 12px;
    padding: 0 0.4rem;
    color: var(--grey-font-color);
  }
  .right {
    float: right;
    color: var(--deep-blue-color);
    letter-spacing: 0.08rem;
  }
  .comment-brief {
    background-color: var(--grey-color);
    padding: 5px 10px;
    border-radius: 5px;
  }
  .location {
    background-color: var(--grey-color);
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 8px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .loc-left{
    flex: 1;
  }
  .loc-right {
    color: var(--deep-blue-color);
    font-weight: 400;
    padding-left: 20px;
  }
</style>
