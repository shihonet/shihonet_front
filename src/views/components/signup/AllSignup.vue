<template>
  <div class="mx-8">
    <FadeInOnScroll>
      <div class="mt-6 text-[14px] text-center">
        <p>「#shihonet CLUB」へログインすると、</p>
        <p class="mt-2">・ブログをお気に入りにできる</p>
        <p>・寄せ書きを投稿できる</p>
        <p class="mt-2">以上の機能をご利用いただくことができます。</p>
        <p class="underline">
          （サイト内にて、一切の費用がかかることはございません）
        </p>
      </div>

      <div class="mt-10">
        <p class="font-bold">メールアドレスで登録</p>
        <div v-if="!hasGotEmailAuthCode">
          <SignupForm />
        </div>

        <div v-else class="mt-5 text-center text-[14px]">
          <SignupVerifyForm />
        </div>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import { useSignupStore } from "@/stores/signupStore";
import SignupForm from "@/views/components/signup/SignupForm.vue";
import SignupVerifyForm from "@/views/components/signup/SignupVerifyForm.vue";

export default defineComponent({
  components: { FadeInOnScroll, SignupForm, SignupVerifyForm },
  setup() {
    const signupStore = useSignupStore();

    return {
      hasGotEmailAuthCode: computed(() => signupStore.hasGotEmailAuthCode),
    };
  },
});
</script>
