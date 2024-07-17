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
    <div v-else>
      <BaseButton v-if="!isClickedButton" @click="requestGetRandomBlogs">
        画像ガチャを回す
      </BaseButton>
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

<script setup lang="ts">
import { computed } from "vue";
import { BaseButton, WaitingForLoading, PostX } from "@/views/components/common";
import { useRandomBlogsStore } from "@/stores/randomBlogsStore";

const randomBlogsStore = useRandomBlogsStore();

const title = computed(() => randomBlogsStore.getTitle);
const publishedAt = computed(() => randomBlogsStore.getPublishedUrl);
const blogUrl = computed(() => randomBlogsStore.getBlogUrl);
const imageUrl = computed(() => randomBlogsStore.getImageUrl);
const isLoading = computed(() => randomBlogsStore.getIsLoading);
const isClickedButton = computed(() => randomBlogsStore.getIsClickedButton);
const requestGetRandomBlogs = randomBlogsStore.requestGetRandomBlogs; // NOTE: 関数そのものを取得している
const postLink = computed(() => randomBlogsStore.getPostLink()); // NOTE: 関数を呼び出して値を返している
</script>
