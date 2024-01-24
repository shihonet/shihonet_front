<template>
  <FadeInOnScroll>
    <div class="my-40 mx-10">
      <TitlePart
        :title="title"
        :border-class="borderClass"
        :textColorClass="textColorClass"
      />

      <div v-if="isLoading">
        <WaitingForLoading />
      </div>

      <div v-else class="mt-4">
        <div v-if="isSchedulePresent">
          <div v-for="(schedule, index) in schedules" :key="index" class="mt-6">
            <span class="text-site-color mr-2">◆</span>
            <span
              >{{ schedule.started_date }}【{{ schedule.category_name }}】</span
            >
            <a :href="'https://www.hinatazaka46.com' + schedule.url_path">
              <p class="mt-2">{{ schedule.name }}</p>
            </a>
          </div>
        </div>
        <div v-else>
          <div>
            <p>今週のスケジュールはありません</p>
          </div>
        </div>
      </div>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { WaitingForLoading, TitlePart, FadeInOnScroll },
  data() {
    return {
      isLoading: false,
      schedules: [] as any[],
      title: "Schedules",
      borderClass: "border-top-color",
      textColorClass: "top-color",
    };
  },
  created() {
    this.requestGetSchedules();
  },
  methods: {
    requestGetSchedules() {
      this.isLoading = true;
      // 開始日を今日に設定
      const startDate = new Date().toISOString().split("T")[0];

      axios
          .get("/api/schedules", {
            params: {
              started_date: startDate,
              ended_date: "2100-01-01",
              limit: 5,
            },
          })
          .then((response) => {
            this.schedules = response.data.schedules;
            this.isLoading = false;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    },
  },
  computed: {
    isSchedulePresent(): boolean {
      return !!this.schedules && this.schedules.length > 0;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>