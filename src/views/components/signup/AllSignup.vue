<template>
  <div class="mt-6 mx-8">
    <FadeInOnScroll>
      <ChangeFontToCaveat
        text="~ Signup ~"
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
        <p class="mt-2">
          すでにアカウントをお持ちの方は
          <RouterLink to="/login" class="text-site-color underline">
            ログイン
          </RouterLink>
          をしてください。
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

<script setup lang="ts">
import { computed } from "vue";
import { useSignupStore } from "@/stores/signupStore";
import { FadeInOnScroll, ChangeFontToCaveat } from "@/views/components/common";
import { SignupForm, SignupVerifyForm } from "@/views/components/signup";

const signupStore = useSignupStore();
const hasRequested = computed(() => signupStore.hasRequested);
</script>
