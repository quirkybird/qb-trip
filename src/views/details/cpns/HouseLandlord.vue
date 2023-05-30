<template>
  <div class="house-landlord">
        <details-section header-value="房东介绍" footer-value="查看房东主页">
            <template #content>
                <div class="landlord-info">
                    <div class="main">
                        <img :src="landlordData.topScroll" alt="">
                        <div class="info">
                            <img :src="landlordData.hotelLogo" alt="" class="pic">
                            <div>
                                <span class="hotel-name">{{ landlordData.hotelName }}</span><br />
                                <span>{{ hotelTags.join("|") }}</span>
                            </div>
                            <div class="landlord-btn">联系房东</div>
                        </div>
                    </div>
                    <div class="summary">
                        <template v-for="summary in landlordData.hotelSummary">
                            <div class="summary-item">
                                <span class="item">{{ summary.title }}</span>
                                <div class="introduction">{{ summary.introduction }}</div>
                                <span class="item">{{ summary.tip }}</span>
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
  const landlordData = computed(() => props.house.mainPart.dynamicModule.landlordModule)
  let str = ""
  const hotelTags = computed(() => 
  landlordData.value.hotelTags.map((item) => {
            return item.tagText.text
  }))
</script>

<style scoped>
    .house-landlord{
        transform: translateY(20px);
    }
    .main>img {
        width: 100%;
        border-radius: 5px;
    }
    .pic {
        width: 54px;
    }
    .info {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    }
    .hotel-name {
        font-size:16px;
        font-weight: 600;
    }
    .landlord-btn {
        color: #fff;
        align-self: center;
        padding: 5px;
        border-radius: 2px;
        background-image: linear-gradient(90deg, rgb(75, 166, 248), rgb(0, 111, 178));

    }
    .summary {
        display: flex;
        justify-content: space-between;
    }
    .summary-item {
        display: flex;
        flex-direction: column;
    }
    .introduction {
        font-size: 18px;
        font-weight: 600;
    }
</style>