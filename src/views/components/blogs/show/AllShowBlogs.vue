<template>
  <FadeInOnScroll class=" mt-10 mx-6">
    <div v-if="isLoading">
      <WaitingForLoading />
    </div>
    <div v-else>
      <p class="text-2xl font-bold">{{ blog.title }}</p>
      <p class="mt-2 text-gray-400">{{ blog.publishedAt }}</p>
      <p class="mt-2.5 whitespace-break-spaces">{{ blog.content }}</p>
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

    return {
      blog: computed(() => blogShowStore.getBlog),
      isLoading: computed(() => blogShowStore.getIsLoading),
    };
  },
});
</script>
