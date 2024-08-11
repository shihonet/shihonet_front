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
        <p>・寄せ書きを投稿できる（絶賛実装予定）</p>
        <p class="mt-2">以上の機能をご利用いただくことができます。</p>
        <p class="underline">
          （サイト内にて、一切の費用がかかることはございません）
        </p>
        <p class="mt-2">
          すでにアカウントをお持ちの方は
          <RouterLink to="/login" class="text-site-color underline">ログイン</RouterLink>
          をしてください。
        </p>
      </div>

      <div class="mt-10">
        <p class="font-bold">メールアドレスで登録</p>
        <div v-if="!hasRequested">
          <SignupForm />
        </div>

        <div v-else class="mt-5 text-center text-[14px]">
          <div class="mx-5 py-4 px-2 bg-white border rounded-lg">
            <p>{{ email }}</p>
          </div>
          <p class="mt-5">
            上記メールアドレスへ、認証メールを送信しました。<br />
            メールに記載されたリンクをタップして、<br />
            登録を完了してください。
          </p>
        </div>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useSignupStore } from "@/stores/signupStore";
import { FadeInOnScroll, ChangeFontToCaveat } from "@/views/components/common";
import { SignupForm } from "@/views/components/signup";
import router from "@/router";
import { useUserSessionsStore } from "@/stores/userSessionsStore";
import { useOpenStore } from "@/stores/openStore";

const signupStore = useSignupStore();
const userSessionsStore = useUserSessionsStore();
const openStore = useOpenStore();

const email = computed(() => signupStore.getEmail);
const hasRequested = computed(() => signupStore.getHasRequested);
const isLoggedIn = computed(() => userSessionsStore.getIsLoggedIn);

onMounted(async () => {
  await userSessionsStore.requestGetUserSessions();
  if (!isLoggedIn.value) return;

  await router.push("/blogs");
  openStore.setToast("success", "すでにログインしています");
});
</script>
