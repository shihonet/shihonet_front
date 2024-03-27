<template>
  <div class="mt-2 text-site-color font-extrabold text-center text-[16px]">
    <p>今日もアイドルでいてくれてありがとう</p>
    <p>ジェネレーター</p>
  </div>
  <div class="mt-6 text-gray-500 font-light text-center text-[12px]">
    <p>懐かしい過去のブログから加藤史帆ちゃん画像が厳選され、</p>
    <p>毎日加藤史帆ちゃんへの感謝をポストできます！</p>
  </div>
  <div class="mt-12">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else class="flex items-center justify-center">
      <button
        v-if="!isClickedButton"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"
        @click="requestGetBlogImage()"
      >
        画像ガチャを回す
      </button>
      <div v-else>
        <p class="text-center text-[16px]">↓ 本日感謝を捧げる加藤史帆ちゃんはこちら ↓</p>
        <div class="flex justify-center mt-8">
          <img :src="blog.imageUrl" class="w-[300px]" />
        </div>
        <div class="flex justify-center mt-4 mx-6">
          <a :href="blog.url" target="_blank">
            <div class="border-2 border-site-color hover:text-gray-400 py-2 px-4 rounded-lg">
              <p class="text-[12px] text-gray-500">{{ blog.publishedAt }}</p>
              <p class="text-[16px]">{{ blog.title }}</p>
            </div>
          </a>
        </div>
        <p class="text-center mt-10 text-[12px]">上の画像をコピーまたは保存して、ポストしよう！</p>
        <div class="flex justify-center mt-4">
          <PostX
            link="https://twitter.com/intent/tweet?text=%E4%BB%8A%E6%97%A5%E3%82%82%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%81%A7%E3%81%84%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%A6%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%0A%23%E6%97%A5%E5%90%91%E5%9D%8246%20%23%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%20%F0%9F%90%BB%0A%23shihonet"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";
import PostX from "@/views/components/common/PostX.vue";

interface BlogImageRandom {
  title: string;
  publishedAt: string;
  memberName: string;
  url: string;
  imageUrl: string;
}

export default defineComponent({
  components: { PostX, WaitingForLoading },
  data() {
    return {
      blog: {
        title: "",
        publishedAt: "",
        memberName: "",
        url: "",
        imageUrl: "",
      } as BlogImageRandom,
      isLoading: false,
      isClickedButton: false,
    };
  },
  methods: {
    requestGetBlogImage() {
      this.isLoading = true;
      axios
        .get("/api/blog_random")
        .then((response) => {
          const data = response.data;
          this.blog = {
            title: data.title,
            publishedAt: data.published_at,
            memberName: data.member_name,
            url: data.url,
            imageUrl: data.image_url,
          };
          this.isLoading = false;
          this.isClickedButton = true;
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
