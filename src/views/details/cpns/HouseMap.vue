<template>
  <div class="house-map">
    <details-section header-value="位置" footer-value="查看更多位置周边">
      <template #content>
        <div class="map-container" ref="maps"></div>
      </template>
    </details-section>
  </div>
</template>

<script setup>
  import DetailsSection from "@/components/details-section/DetailsSection.vue";
  import { ref, onMounted, computed } from "vue";
  const props = defineProps({
    house: {
      type: Object,
      default: () => ({}),
    },
  });
  const position = computed(
    () => props.house.mainPart.dynamicModule.positionModule
  );
  const maps = ref(null);
  onMounted(() => {
    const map = new BMapGL.Map(maps.value);
    const point = new BMapGL.Point(
      position.value.longitude,
      position.value.latitude
    );
    let bPoint = [];
    //
    const convertor = new BMapGL.Convertor();
    var pointArr = [];
    pointArr.push(point);
    convertor.translate(pointArr, 1, 5, (data) => {
      bPoint = data.points[0];
      const myGeo = new BMapGL.Geocoder();
      myGeo.getLocation(bPoint, (res) => {
        console.log(res.address);
      });
      const marker = new BMapGL.Marker(bPoint);
      map.addOverlay(marker);
      map.centerAndZoom(bPoint, 15);
    });
  });
</script>

<style scoped>
 
  .map-container {
    height: 300px;
  }
</style>
