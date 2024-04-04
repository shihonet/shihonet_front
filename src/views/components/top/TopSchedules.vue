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
              >{{ schedule.scheduleDate }}【{{ schedule.categoryName }}】</span
            >
            <a :href="'https://www.hinatazaka46.com' + schedule.urlPath">
              <p class="mt-2">{{ schedule.name }}</p>
            </a>
          </div>
        </div>
        <div v-else>
          <p class="text-center mt-10 text-gray-400">今週のスケジュールはありません</p>
        </div>
      </div>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useTopSchedulesStore } from '@/stores/topSchedulesStore';
import TitlePart from "@/views/components/common/TitlePart.vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { TitlePart, WaitingForLoading, FadeInOnScroll },
  setup() {
    const topSchedulesStore = useTopSchedulesStore();

    onMounted(() => {
      topSchedulesStore.requestGetTopSchedules();
    });

    return {
      title: 'Schedules',
      borderClass: "border-top-color",
      textColorClass: "top-color",
      schedules: computed(() => topSchedulesStore.getSchedules),
      isSchedulePresent: computed(() => topSchedulesStore.getIsSchedulePresent),
      isLoading: computed(() => topSchedulesStore.getIsLoading),
    };
  }
});
</script>
