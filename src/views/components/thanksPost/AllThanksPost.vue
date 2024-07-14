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
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mt-10"
        @click="requestGetRandomBlogs"
      >
        画像ガチャを回す
      </button>
      <div v-else>
        <p class="text-center text-[16px]">↓ 本日感謝を捧げる加藤史帆ちゃんはこちら ↓</p>
        <div class="flex justify-center mt-8">
          <img :src="imageUrl" class="w-[300px]" />
        </div>
        <div class="flex justify-center mt-4 mx-6">
          <a :href="blogUrl" target="_blank">
            <div class="border-2 border-site-color hover:text-gray-400 py-2 px-4 rounded-lg">
              <p class="text-[12px] text-gray-500">{{ publishedAt }}</p>
              <p class="text-[16px]">{{ title }}</p>
            </div>
          </a>
        </div>
        <p class="text-center mt-10 text-[12px]">上の画像をコピーまたは保存して、ポストしよう！</p>
        <div class="flex justify-center mt-4">
          <PostX :link=postLink />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";
import PostX from "@/views/components/common/PostX.vue";
import { useRandomBlogsStore } from "@/stores/randomBlogsStore";

export default defineComponent({
  components: { WaitingForLoading, PostX },
  setup() {
    const randomBlogsStore = useRandomBlogsStore();

    return {
      title: computed(() => randomBlogsStore.getTitle),
      publishedAt: computed(() => randomBlogsStore.getPublishedUrl),
      blogUrl: computed(() => randomBlogsStore.getBlogUrl),
      imageUrl: computed(() => randomBlogsStore.getImageUrl),
      isLoading: computed(() => randomBlogsStore.getIsLoading),
      isClickedButton: computed(() => randomBlogsStore.getIsClickedButton),
      requestGetRandomBlogs: randomBlogsStore.requestGetRandomBlogs, // NOTE: 関数そのものを取得している
      postLink: computed(() => randomBlogsStore.getPostLink()), // NOTE: 関数を呼び出して値を返している
    };
  }
});
</script>
