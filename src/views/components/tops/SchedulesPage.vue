<template>
  <FadeInOnScroll>
    <div class="mt-24 mx-10 mb-40">
      <div class="mb-10">
        <p class="text-2xl text-center">今週のスケジュール</p>
        <div class="border-b-2 border-site-base-pink"></div>
      </div>
      <div class="mt-4">
        <div v-if="isSchedulePresent">
          <div v-for="(schedule, index) in schedules" :key="index" class="mt-6">
            <span
              class="shiho-color mr-2"
              v-if="memberIsShiho(schedule.members)"
              >◆{{ schedule.members }}</span
            >
            <span
              class="kyoko-color mr-2"
              v-if="memberIsKyoko(schedule.members)"
              >◆{{ schedule.members }}</span
            >
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
import axios, { AxiosResponse } from "axios";
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default defineComponent({
  components: { FadeInOnScroll },
  data() {
    return {
      schedules: [] as any[],
    };
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "https://shihonet-api-29ca225d2dcb.herokuapp.com/";

    // 開始日を今日に設定
    const startDate = new Date().toISOString().split("T")[0];

    // 終了日を一週間後に設定
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const formattedEndDate = endDate.toISOString().split("T")[0];

    axios
      .get("/api/schedules", {
        params: {
          member_pattern_number: 3,
          started_date: startDate,
          ended_date: formattedEndDate,
        },
      })
      .then((response: AxiosResponse) => {
        this.schedules = response.data.schedules;
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  },
  computed: {
    isSchedulePresent(): boolean {
      return !!this.schedules && this.schedules.length > 0;
    },
  },
  methods: {
    memberIsShiho(members: string): boolean {
      return members === "加藤";
    },
    memberIsKyoko(members: string): boolean {
      return members === "齊藤";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #333333;
}
</style>