<template>
  <div class="mx-6">
    <FadeInOnScroll>
      <h1 class="text-[20px] font-extrabold text-site-color">
        ◆
        <select v-model="selectedYear" @change="handleYearChange" id="year" class="w-24">
        <option v-for="year in availableYears" :key="year" :value="year">
          {{ year }}年
        </option>
      </select>の活動
      </h1>
    </FadeInOnScroll>

    <div class="flex mt-2">
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

export default defineComponent({
  components: { FadeInOnScroll },
  data() {
    return {
      histories: [] as any[],
      availableYears: [2019, 2020, 2021, 2022, 2023, 2024],
      selectedYear: 2024,
    };
  },
  created() {
    this.handleYearChange();
  },
  methods: {
    handleYearChange() {
      axios
        .get("/api/histories", {
          params: {
            year: this.selectedYear,
          },
        })
        .then((response) => {
          this.histories = response.data.histories;
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
