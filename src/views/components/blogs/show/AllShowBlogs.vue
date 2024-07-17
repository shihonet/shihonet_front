<template>
  <FadeInOnScroll class=" mt-10 mx-6">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else>
      <p class="text-2xl font-bold">{{ blog.title }}</p>
      <p class="mt-2 text-[12px] text-gray-400 flex justify-end">{{ blog.publishedAt }}</p>
      <p class="mt-6 whitespace-break-spaces" v-html="formattedContent"></p>
      <hr class="my-16">
      <p class="text-[12px] text-gray-400 flex justify-center">画像一覧（{{ blog.imageUrls?.length }}枚）</p>
      <div v-for="(image, index) in blog.imageUrls" :key="index" class="mt-2 mb-5 mx-4">
        <img :src="image" class="w-full" />
      </div>
      <div class="mt-16 flex justify-end">
        <a :href="blog.blogUrl" class="text-blue-500 underline" target="_blank">公式ブログ ＞</a>
      </div>
    </div>
    <div class="mt-20 flex items-center justify-center">
      <RouterLink
        to="/blogs"
        class="bg-white font-bold py-3 px-6 rounded-full border border-gray-500 hover:opacity-80"
      >
        一覧へ戻る
      </RouterLink>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType } from "vue";
import WaitingForLoading from "@/views/components/common/WaitingForLoading.vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { useBlogShowStore } from "@/stores/blogShowStore";

export default defineComponent({
  components: { WaitingForLoading, FadeInOnScroll },
  props: {
    id: {
      type: Number as PropType<number>,
      default: 0,
      required: true,
    },
  },
  setup(props) {
    const blogShowStore = useBlogShowStore();

    onMounted(() => {
      blogShowStore.requestFetchBlog(props.id);
    });

    // テキスト中のURLをリンクに変換する
    const formatContent = (content: string): string => {
      if (!content) return '';
      const urlRegex = /((https?:\/\/[^\s]+))/g;
      return content.replace(urlRegex, '<a href="$1" target="_blank" class="text-blue-500 underline break-all">$1</a>');
    };

    return {
      blog: computed(() => blogShowStore.getBlog),
      isLoading: computed(() => blogShowStore.getIsLoading),
      formattedContent: computed(() => formatContent(blogShowStore.getBlog.content)),
    };
  },
});
</script>
