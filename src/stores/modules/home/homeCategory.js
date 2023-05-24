import { defineStore } from "pinia";
import { getHomeCategory } from "@/service/module/home/homeCategory";

const useCategory = defineStore("category", {
    state: () => ({
        homeCategories: []
    }),
    actions: {
        async fetchHomeGategories() {
            const res = await getHomeCategory()
            this.homeCategories = res.data
        }
    }
})

export default useCategory