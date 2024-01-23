<template>
  <div class="mx-6">
    <div
      v-for="(histories_of_year, year) in histories"
      :key="year"
      class="mb-10"
    >
      <h1 class="text-[20px] font-extrabold text-site-color">
        ◆{{ year }}年
      </h1>
      <div class="flex">
        <div class="w-5">
          <div class="w-1 mx-auto h-full rounded-lg bg-gradient-to-b from-green-200 to-blue-200"></div>
        </div>

        <div class="w-full ml-2">
          <div
            v-for="(history, index) in histories_of_year"
            :key="index"
            class="mb-2"
          >
            <a :href="'https://www.hinatazaka46.com' + history.url_path">
              <p class="font-light text-site-color">
                {{ history.started_date }}【{{ history.category_name }}】
              </p>
              <p class="font-normal">{{ history.name }}</p>
            </a>
            <span class="block w-full border-b border-gray-200 my-1"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      histories: [] as any[],
    };
  },
  created() {
    axios
      .get("/api/histories", {
        params: {
          year: 2019,
        },
      })
      .then((response) => {
        this.histories = response.data.histories;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
