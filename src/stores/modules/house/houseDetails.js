import { defineStore } from "pinia";

import { getHouseDtails } from "@/service/module/home/houseDetails";

const useHouseDetailsStore = defineStore("DetailsStore", {
  state: () => ({
    house: null,
  }),
  actions: {
    async fetchHouseDetails(houseId) {
      const res = await getHouseDtails(houseId);
      this.house = res.data;
    },
  },
});
export default useHouseDetailsStore;
