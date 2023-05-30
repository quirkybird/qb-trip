<template>
  <div class="house-facility">
    <details-section header-value="房屋设施" footer-value="查看全部设施(箭头)">
      <template #content>
        <div class="facility">
          <template v-for="(group, index) in facilityData.houseFacilitys">
              <div
                class="facility-data"
                v-if="facilityData.facilitySort.includes(index)"
              >
                <div class="sort">
                    <img :src="group.icon" alt="">
                    {{ group.groupName }}</div>
                <div class="item">
                  <template v-for="item in group.facilitys.slice(0, 4)">
                    <div class="facility-item">{{ item.name }}</div>
                  </template>
              </div>
            </div>
          </template>
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
  const facilityData = computed(
    () => props.house.mainPart.dynamicModule.facilityModule.houseFacility
  );
</script>

<style scoped>
  .house-facility {
    transform: translateY(10px);
  }
  .facility {
    background-color: #f7f9fb;
    padding: 12px;
  }
  .facility-data {
    display: flex;
    padding-top: 20px;
  }
  .sort {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
  }
  .sort img {
    width: 20px;
  }
  .item {
    flex: 3;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .facility-item {
    flex-basis: 80px;
  }
</style>
