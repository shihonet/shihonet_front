<template>
  <FadeInOnScroll>
    <div class="my-40 mx-10">
      <TitlePart title="Schedules" />

      <div v-if="isLoading">
        <WaitingForLoading />
      </div>

      <div v-else class="mt-4">
        <div v-if="isSchedulePresent">
          <div v-for="(schedule, index) in schedules" :key="index" class="mt-6">
            <span class="text-site-color mr-2">◆</span>
            <span
              >{{ schedule.startedDate }}【{{ schedule.categoryName }}】</span
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

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useTopSchedulesStore } from '@/stores/topSchedulesStore';
import { TitlePart, FadeInOnScroll, WaitingForLoading } from "@/views/components/common";

const topSchedulesStore = useTopSchedulesStore();

const schedules = computed(() => topSchedulesStore.getSchedules);
const isSchedulePresent = computed(() => topSchedulesStore.getIsSchedulePresent);
const isLoading = computed(() => topSchedulesStore.getIsLoading);

onMounted(() => {
  topSchedulesStore.requestGetTopSchedules();
});
</script>
