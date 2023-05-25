import { getHomeList } from "@/service/module/home/homeList";
import { defineStore } from "pinia";
import { actionSheetProps } from "vant";

const useHomeListStore = defineStore("homeList", {
    state: () => ({
        houseData: []
    }),
    actions: {
        async fetchHouseData(currentPage) {
            const res = await getHomeList(currentPage)
            this.houseData.push(...res.data)
        }
    }
})
export default useHomeListStore