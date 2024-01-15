<template>
  <FadeInOnScroll>
    <div class="mt-10 mb-10 mx-6">
      <title-part
        :title="title"
        :border-class="borderClass"
        :textColorClass="textColorClass"
      />
    </div>
  </FadeInOnScroll>
  <all-blogs :member="member" :bgBlogColor="bgBlogColor" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllBlogs from "@/views/components/blogs/AllBlogs.vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import TitlePart from "@/views/components/common/TitlePart.vue";

export default defineComponent({
  components: { TitlePart, FadeInOnScroll, AllBlogs },
  data() {
    return {
      member: "shiho",
      title: "#shihotalk",
      borderClass: "border-shiho-color",
      textColorClass: "shiho-color",
      bgBlogColor: "bg-shiho-blog-color",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
