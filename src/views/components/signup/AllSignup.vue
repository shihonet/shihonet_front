<template>
  <div class="mt-6 mx-8">
    <FadeInOnScroll>
      <ChangeFontToCaveat
        :text="subTitle"
        class="text-[38px] font-bold text-center"
      />

      <div class="mt-6 text-[14px] text-left">
        <p>「#shihonet club」へログインすると、</p>
        <p class="mt-2">・ブログをお気に入りにできる</p>
        <p>・寄せ書きを投稿できる</p>
        <p class="mt-2">以上の機能をご利用いただくことができます。</p>
        <p class="underline">
          （サイト内にて、一切の費用がかかることはございません）
        </p>
      </div>

      <div class="mt-10">
        <p class="font-bold">メールアドレスで登録</p>
        <div v-if="!hasRequested">
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
import ChangeFontToCaveat from "@/views/components/common/ChangeFontToCaveat.vue";

export default defineComponent({
  components: {
    ChangeFontToCaveat,
    FadeInOnScroll,
    SignupForm,
    SignupVerifyForm,
  },
  setup() {
    const signupStore = useSignupStore();

    return {
      subTitle: "~ Signup ~",
      hasRequested: computed(() => signupStore.hasRequested),
    };
  },
});
</script>
