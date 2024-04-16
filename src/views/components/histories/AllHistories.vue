<template>
  <div class="mx-6">
    <FadeInOnScroll>
      <h1 class="text-[20px] font-extrabold text-site-color">
        ◆<span class="mx-2 font-bold">Histories of</span>
        <select v-model="selectedYear" @change="setYear($event.target.value)" class="w-24">
          <option v-for="year in availableYears" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </h1>
    </FadeInOnScroll>

    <div v-if="isLoading">
      <WaitingForLoading />
    </div>

    <div v-else class="flex mt-2">
      <div class="w-5">
        <div
          class="w-1 mx-auto h-full rounded-lg bg-gradient-to-b from-blue-200 to-green-200"
        ></div>
      </div>

      <div class="w-full ml-2">
        <div v-for="(history, index) in histories" :key="index" class="mb-2">
          <FadeInOnScroll>
            <a :href="'https://www.hinatazaka46.com' + history.urlPath">
              <p class="font-light text-site-color">
                {{ history.startedDate }}【{{ history.categoryName }}】
              </p>
              <p class="font-normal">{{ history.name }}</p>
            </a>
            <span class="block w-full border-b border-gray-200 my-1"></span>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useHistoriesStore } from "@/stores/historiesStore";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { WaitingForLoading, FadeInOnScroll },
  setup() {
    const historiesStore = useHistoriesStore();

    onMounted(() => {
      historiesStore.requestGetHistories();
    });

    return {
      histories: computed(() => historiesStore.getHistories),
      isLoading: computed(() => historiesStore.getIsLoading),
      availableYears: computed(() => historiesStore.getAvailableYears),
      selectedYear: computed(() => historiesStore.getSelectedYear),
      setYear: historiesStore.setYear,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
