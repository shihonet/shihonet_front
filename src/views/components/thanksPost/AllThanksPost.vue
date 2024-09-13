<template>
  <div class="mt-2 text-site-color font-extrabold text-center text-[16px]">
    <p>今日もアイドルでいてくれてありがとう</p>
    <p>ジェネレーター</p>
  </div>
  <div class="mt-6 text-gray-500 font-light text-center text-[12px]">
    <p>懐かしい過去のブログから加藤史帆さん画像が厳選され、</p>
    <p>毎日加藤史帆さんへの感謝をポストできます！</p>
  </div>
  <div class="mt-12">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else>
      <BaseButton v-if="!hasClickedButton" @click="requestGetRandomBlogs">
        画像ガチャを回す
      </BaseButton>
      <div v-else>
        <p class="text-center text-[16px]">
          ↓ 本日感謝を捧げる加藤史帆さんはこちら ↓
        </p>
        <div class="flex justify-center mt-8">
          <img :src="imageUrl" class="w-[300px]" />
        </div>
        <div class="flex justify-center mt-4 mx-6">
          <RouterLink :to="`/blogs/${id}`">
            <div
              class="border-2 border-site-color hover:text-gray-400 py-2 px-4 rounded-lg"
            >
              <p class="text-[12px] text-gray-500">{{ publishedAt }}</p>
              <p class="text-[16px]">{{ title }}</p>
            </div>
          </RouterLink>
        </div>
        <p class="text-center mt-10 text-[12px]">
          上の画像をコピーまたは保存して、ポストしよう！
        </p>
        <div class="flex justify-center mt-4">
          <PostX :link="postLink" />
        </div>
        <div class="mt-10 flex items-center justify-center">
          <div
            @click="retryGacha"
            class="bg-white font-bold py-3 px-6 rounded-full border border-gray-500 hover:opacity-80 hover:cursor-pointer"
          >
            罪ながらもう一度
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  BaseButton,
  WaitingForLoading,
  PostX,
} from "@/views/components/common";
import { useRandomBlogsStore } from "@/stores/randomBlogsStore";

const randomBlogsStore = useRandomBlogsStore();

const id = computed(() => randomBlogsStore.getId);
const title = computed(() => randomBlogsStore.getTitle);
const publishedAt = computed(() => randomBlogsStore.getPublishedUrl);
const imageUrl = computed(() => randomBlogsStore.getImageUrl);
const isLoading = computed(() => randomBlogsStore.getIsLoading);
const hasClickedButton = computed(() => randomBlogsStore.getHasClickedButton);

const requestGetRandomBlogs = async () => {
  randomBlogsStore.setHasClickedButton(false);
  await randomBlogsStore.requestGetRandomBlogs();
}

const postLink = computed(() => randomBlogsStore.getPostLink()); // NOTE: 関数を呼び出して値を返している

const retryGacha = () => {
  randomBlogsStore.setHasClickedButton(false);
  window.scrollTo(0, 0);
  window.location.reload();
};
</script>
