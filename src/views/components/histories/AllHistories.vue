<template>
  <div class="mx-6">
    <FadeInOnScroll>
      <h1 class="text-[20px] font-extrabold text-site-color">
        ◆<span class="mx-2 font-bold">Activities of</span>
        <select
          v-model="selectedYear"
          @change="handleYearChange"
          id="year"
          class="w-24"
        >
          <option v-for="year in availableYears" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </h1>
    </FadeInOnScroll>

    <div v-if="loading">
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
            <a :href="'https://www.hinatazaka46.com' + history.url_path">
              <p class="font-light text-site-color">
                {{ history.started_date }}【{{ history.category_name }}】
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
import axios from "axios";
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";

export default defineComponent({
  components: { WaitingForLoading, FadeInOnScroll },
  data() {
    return {
      loading: false,
      histories: [] as any[],
      availableYears: [2024, 2023, 2022, 2021, 2020, 2019],
      selectedYear: 2024,
    };
  },
  created() {
    this.handleYearChange();
  },
  methods: {
    handleYearChange() {
      this.loading = true;
      axios
        .get("/api/histories", {
          params: {
            year: this.selectedYear,
          },
        })
        .then((response) => {
          this.histories = response.data.histories;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
