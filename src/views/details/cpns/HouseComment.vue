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
          <!-- <div class="commentTags">
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
          </div> -->
          <div class="comment-details">
            <div class="user-info clearfix">
              <div class="user-left">
                <img :src="commentData.comment.userAvatars" alt="" class="avatar">
                <div>
                <span>{{ commentData.comment.userName }}</span>
                <img :src="commentData.comment?.memberLevelIcon" alt="" class="menber-level">
                <div class="check-in-date-location font-grey">{{ commentData.comment.checkInDate }}入住</div></div>
              </div>
              <!-- <div class="user-right">
                <div class="house-score-overall">{{ commentData.comment.overall }}.0</div>
                <van-rate
                  :model-value="Number(commentData?.comment.overall)"
                  size="10px"
                  color="#ffd21e"
                  :allow-half="true"
                  :readonly="true"
                />
              </div> -->
            </div>
            <!-- <div class="score-tags">
              <tempalte v-for="tag in commentData?.comment.scoreTags">
                <div class="tags-item"> {{ tag.title }}</div>
              </tempalte>
            </div> -->
            <div class="comment-content">
              {{ commentData?.comment.commentDetail }}
            </div>
            <!-- <div class="picture-list">
              <template v-for="pic in commentData?.comment.pictureList">
                <img :src="pic.url" alt="" >
              </template>
            </div> -->
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

  /* 详细评论 */
  .comment-details {
    background-color: #f7f9fb;
    border-radius: 6px;
  }
  .user-info {
    padding: 15px 0;
  }
  .user-left {
    float: left;
    display: flex;

  }
  .avatar {
    width: 30px;
    border-radius: 50%;
  }
  .menber-level {
    height: 16px;
  }
  .user-right {
    float: right;
    text-align: end;
  }

  .score-tags {
    display: flex;
  }
  .tags-item {
    padding: 0 5px;
  }
  .comment-content {
    padding: 10px 0;
  }
  .picture-list img {
    padding: 0 2px;
    width: 80px;
    border-radius: 5px;
    height: 80px;
  }
</style>
