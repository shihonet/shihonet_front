<template>
  <FadeInOnScroll>
    <div class="mt-40 mb-10 mx-10">
      <title-part :title="title" :border-class="borderClass" :textColorClass="textColorClass"/>
    </div>
  </FadeInOnScroll>
  <div class="mx-2 mt-2">
    <div v-for="(blog, index) in blogs" :key="index" class="mt-6">
      <FadeInOnScroll>
        <div class="relative">
          <img :src="blog.thumbnail_image_url" class="rounded-lg">
          <a :href="'https://www.hinatazaka46.com' + blog.url_path">
            <div class="absolute bottom-0 left-0 right-0 bg-kyoko-color bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <div class="text-[12px] font-extrabold">{{ blog.published_at }}</div>
              <div class="text-[16px] font-extrabold">{{ blog.title }}</div>
            </div>
          </a>
        </div>
      </FadeInOnScroll>
    </div>
  </div>
  <FadeInOnScroll>
    <div class="mt-10">
      <router-link to="/kyoko/blogs">
        <MoreView :borderClass="'border-kyoko-color'"/>
      </router-link>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import axios from 'axios';
import {defineComponent} from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import MoreView from "@/views/components/common/MoreView.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: {TitlePart, MoreView, FadeInOnScroll},
  data() {
    return {
      blogs: [] as any[],
      title: "BLOG",
      borderClass: "border-kyoko-color",
      textColorClass: "kyoko-color"
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-29ca225d2dcb.herokuapp.com/';
    axios.get('/api/blogs', {
      params: {
        member: 'kyoko',
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

</style>
