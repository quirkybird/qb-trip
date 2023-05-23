import { defineStore } from "pinia";
import { getCityAll } from "@/service";

const useCityStore = defineStore("city", {
    // 箭头函数简写，返回一个数组字面量
    state: () => ({
        allCities: {},
        currentCity: {
            cityId: 48,
            cityName: "北京"
        }
    }),
    actions: {
       async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})

export default useCityStore