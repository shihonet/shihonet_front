<template>
  <p>{{ blogs }}</p>
</template>

<script lang="ts">
import axios from "axios";

import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    member: {
      type: String as PropType<string>,
    },
  },
  data() {
    return {
      blogs: [] as any[],
    };
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "https://shihonet-api-29ca225d2dcb.herokuapp.com/";
    axios
      .get("/api/blogs", {
        params: {
          member: this.member,
          page: 1,
          limit: 15,
        },
      })
      .then((response) => {
        this.blogs = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
