<template>
  <div class="house-comment">
    <details-section header-value="房客点评" :footer-value="commentTotalStr">
      <template #content>
        <div class="comment">
          <div class="score clearfix">
            <div class="left">
              <div class="overall">
                {{ commentData.overall }}
                <div class="overall-bottom"></div>
              </div>
              <div class="sub-overall">
                <div>{{ commentData.scoreTitle }}</div>
                <div class="font-grey">{{ commentData.totalCount }}条评价</div>
                <van-rate
                  :model-value="Number(commentData?.overall)"
                  size="10px"
                  color="#ffd21e"
                  :allow-half="true"
                  :readonly="true"
                />
              </div>
            </div>
            <div class="right">
              <template
                v-for="(focus, index) in commentData.subScoresFocus"
                :key="index"
              >
                <div class="sub-scores-focus" v-if="index <= 2">
                  <div>{{ focus.text }}</div>
                  <div>{{}}</div>
                </div>
              </template>
            </div>
          </div>
          <div class="commentTags">
            <template
              v-for="(tag, index) in commentData.commentTagVo"
              :key="index"
            >
              <div
                class="tag"
                :style="{ color: tag.color, background: tag.backgroundColor }"
              >
                {{ tag.text }}
              </div>
            </template>
          </div>
        </div>
      </template>
    </details-section>
  </div>
</template>

<script setup>
  import DetailsSection from "@/components/details-section/DetailsSection.vue";
  import { computed } from "vue";
  const props = defineProps({
    house: {
      type: Object,
      default: () => ({}),
    },
  });

  const commentData = computed(
    () => props.house.mainPart.dynamicModule.commentModule
  );

  const commentTotalStr = `查看全部${commentData.value.totalCount}条评价`;
</script>

<style scoped>
  .house-comment {
    transform: translateY(30px);
  }
  .score {
    padding: 12px 0;
  }
  .left {
    float: left;
    display: flex;
  }
  .right {
    float: right;
    margin-right: 10px;
  }
  .sub-scores-focus {
    display: flex;
  }
  .overall {
    font-size: 48px;
    font-weight: 600;
    position: relative;
    z-index: 10;
  }
  .overall-bottom {
    position: absolute;
    height: 8px;
    width: 100%;
    bottom: 8px;
    border-radius: 5px;
    z-index: -1;
    background-image: linear-gradient(
      90deg,
      rgb(75, 166, 248),
      rgb(0, 111, 178)
    );
  }
  .sub-overall {
    padding: 4px;
  }
  .commentTags {
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    text-align: center;
    border-radius: 2px;
    padding: 4px;
    margin: 4px;
  } 
  .font-grey {
    color: var(--grey-font-color);
  }
</style>
