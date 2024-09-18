<template>
  <Transition>
    <div
      v-if="show"
      class="max-w-[480px] fixed z-[9999] h-full bg-white flex justify-center items-center"
    >
      <img src="@/assets/images/shihonet_ogp.png" class="w-full" />
    </div>
  </Transition>

  <!--  <BaseModal> -->
  <!--    モーダル内部の要素 -->
  <!--  </BaseModal> -->

  <FadeInOnScroll>
    <img src="@/assets/images/top_image.png" />
  </FadeInOnScroll>

  <FadeInOnScroll>
    <div class="mt-40 mx-6">
      <ChangeFontToCaveat
        class="text-site-color text-center text-lg"
        :text="'Pick Up'"
      />
      <div class="flex justify-center mt-5">
        <img
          src="@/assets/images/graduation_message_ogp.jpg"
          class="w-full max-w-80 cursor-pointer"
          @click="toMessageFormPage"
        />
      </div>
    </div>
  </FadeInOnScroll>

  <TopProfiles class="mt-32" />
  <TopSchedules />
  <TopBlogs />
</template>

<script setup lang="ts">
import {
  ChangeFontToCaveat,
  FadeInOnScroll /**, BaseModal*/,
} from "@/views/components/common";
import { TopProfiles, TopBlogs, TopSchedules } from "@/views/components/top";
import { onMounted, ref } from "vue";

const show = ref(true);

const toMessageFormPage = () => {
  window.location.href = "/graduation/messages/form";
};

onMounted(() => {
  show.value = false;
});
</script>
