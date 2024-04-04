import { defineStore } from "pinia";
import axios from "axios";
import { Schedule, ApiResponseSchedule } from "@/types/schedulesTypes";

export const useTopSchedulesStore = defineStore("topSchedules", {
  state: () => ({
    schedules: [] as Schedule[],
    isSchedulePresent: false,
    isLoading: false,
  }),

  getters: {
    getSchedules: (state): Schedule[] => state.schedules,

    getIsSchedulePresent: (state) => state.isSchedulePresent,

    getIsLoading: (state) => state.isLoading,
  },

  actions: {
    async requestGetTopSchedules() {
      try {
        const response = await axios.get("/api/schedules", {
          params: {
            started_date: new Date().toISOString().split("T")[0],
            ended_date: "2100-01-01",
            limit: 5,
          },
        });
        this.schedules = response.data.schedules.map((schedule: ApiResponseSchedule): Schedule => {
          return {
            name: schedule.name,
            urlPath: schedule.url_path,
            scheduleDate: schedule.schedule_date,
            categoryName: schedule.category_name,
          };
        });
        this.isSchedulePresent = this.schedules.length > 0;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
