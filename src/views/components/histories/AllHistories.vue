<template>
  <div class="mx-6">
    <FadeInOnScroll>
      <div v-for="(history, index) in histories" :key="index" class="mt-6">
        <p>{{ history.name }}</p>
        <p>{{ history.started_date }}</p>
        <p>{{ history.category_name }}</p>
        <p></p>
      </div>
    </FadeInOnScroll>
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
