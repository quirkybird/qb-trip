import { defineStore } from "pinia";
import { getHotSuggest } from "@/service";

const useHotSuggestStore = defineStore("hotSuggest", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggest();
      this.hotSuggests = res.data;
    },
  },
});

export default useHotSuggestStore