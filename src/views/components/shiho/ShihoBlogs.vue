<template>
  <FadeInOnScroll>
    <div class="mt-40 mb-10 mx-10">
      <title-for-shiho :title="pageTitle"/>
    </div>
  </FadeInOnScroll>
  <div class="mx-2 mt-2">
    <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
      <FadeInOnScroll>
        <figure class="transition-all duration-300 cursor-pointer hover:grayscale-0">
          <img :src="blog.thumbnail_image_url" class="rounded-lg">
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <div class="">{{ blog.published_at }}</div>
            <div class="">{{ blog.title }}</div>
          </figcaption>
        </figure>
      </FadeInOnScroll>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import {defineComponent} from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitleForShiho from "@/views/components/common/TitleForShiho.vue";

export default defineComponent({
  components: {TitleForShiho, FadeInOnScroll},
  data() {
    return {
      blogs: [] as any[],
      pageTitle: "BLOG"
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-29ca225d2dcb.herokuapp.com/';
    axios.get('/api/blogs', {
      params: {
        member: 'shiho',
        limit: 3
      }
    })
        .then(response => {
          this.blogs = response.data.blogs;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #42b983;
}
</style>
