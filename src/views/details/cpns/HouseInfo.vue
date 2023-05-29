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
    <div class="comment-brief">
      <span>{{ topModule.commentBrief.overall }}</span>
      <span>{{ topModule.commentBrief.scoreTitle }}</span>
      <span>{{ topModule.commentBrief.commentBrief }}</span>
      <span>{{ topModule.commentBrief.totalCount }}</span>
    </div>
    <div></div>
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
  .comment-brief {
    background-color: var(--grey-color);
    padding: 5px 2px;
    border-radius: 5px;
  }
</style>
