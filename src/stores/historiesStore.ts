import { defineStore } from "pinia";
import axios from "axios";
import { Schedule, ApiResponseSchedule } from "@/types/schedulesTypes";

export const useHistoriesStore = defineStore("histories", {
  state: () => ({
    histories: [] as Schedule[],
    isLoading: false,
    availableYears: [2024, 2023, 2022, 2021, 2020, 2019],
    selectedYear: 2024,
  }),

  getters: {
    getHistories: (state): Schedule[] => state.histories,

    getAvailableYears: (state) => state.availableYears,

    getSelectedYear: (state) => state.selectedYear,

    getIsLoading: (state) => state.isLoading,
  },


  actions: {
    async requestGetHistories() {
      this.isLoading = true;
      try {
        const response = await axios.get("/api/histories", {
          params: {
            year: this.selectedYear,
          },
        });
        this.histories = response.data.histories.map((history: ApiResponseSchedule): Schedule => {
          return {
            name: history.name,
            urlPath: history.url_path,
            startedDate: history.started_date,
            categoryName: history.category_name,
          };
        });
      } catch (error) {
        // error handling
      } finally {
        this.isLoading = false;
      }
    },

    async setYear(year: number) {
      this.selectedYear = year;
      await this.requestGetHistories();
    },
  },
});
