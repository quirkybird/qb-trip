import { defineStore } from "pinia";
import { getCityAll } from "@/service";

const useCityStore = defineStore("city", {
    // 箭头函数简写，返回一个数组字面量
    state: () => ({
        allCities: {}
    }),
    actions: {
       async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})

export default useCityStore