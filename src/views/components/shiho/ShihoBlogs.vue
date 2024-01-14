<template>
  {{ blogs }}
</template>

<script lang="ts">
import {defineComponent} from "vue";
import api from '../../../api/$api.ts';

export const getBlogs = async () => {
  try {
    const res = await api.api.blogs.get(
        {
          body: {
            member: 'shiho'
          }
        });
    return {res, error: null};
  } catch (e) {
    return {res: null, error: e};
  }
};

export default defineComponent({
  data() {
    return {
      blogs: [] as any[]
    }
  },
  created() {
    this.blogs = getBlogs;
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #42b983;
}
</style>
