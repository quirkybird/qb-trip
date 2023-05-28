import { defineStore } from "pinia"

const startDate = new Date()
const endDate = new Date()
endDate.setDate(endDate.getDate() + 1);
const useMainStore = defineStore("mainStore", {
    state: () => ({
        token: "",
        startDate,
        endDate,
        isLoadingShow: false
    }) 
})

export default useMainStore