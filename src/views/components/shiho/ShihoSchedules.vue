<template>
  <FadeInOnScroll>
    <div class="my-40 mx-10">
      <title-for-shiho :title="pageTitle"/>
      <div class="mt-4">
        <div v-if="isSchedulePresent">
          <div v-for="(schedule, index) in schedules" :key="index" class="mt-6">
            <span class="shiho-color mr-2">◆{{ schedule.members }}</span>
            <span>{{ schedule.started_date }}【{{ schedule.category_name }}】</span>
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
import axios from 'axios';
import {defineComponent} from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitleForShiho from "@/views/components/common/TitleForShiho.vue";

export default defineComponent({
  components: {FadeInOnScroll, TitleForShiho},
  data() {
    return {
      schedules: [] as any[],
      pageTitle: "SCHEDULE"
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-29ca225d2dcb.herokuapp.com/';

    // 開始日を今日に設定
    const startDate = new Date().toISOString().split('T')[0];

    axios.get('/api/schedules', {
      params: {
        member_pattern_number: 1,
        started_date: startDate,
        ended_date: '2100-01-01',
        limit: 5
      },
    })
        .then(response => {
          this.schedules = response.data.schedules;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },
  computed: {
    isSchedulePresent(): boolean {
      return !!this.schedules && this.schedules.length > 0;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
