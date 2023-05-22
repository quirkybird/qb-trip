<template>
  <van-index-bar>
        <template v-for="(group, index) in groupData['cities']" :key="index">
          <van-index-anchor :index="group.group" />
          <template v-for="(city, index) in group['cities']" :key="index">
            <van-cell :title="city.cityName" />
          </template>
        </template>
      </van-index-bar>
</template>

<script setup>
    defineProps({
        groupData: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style scoped>

</style>