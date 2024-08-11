<template>
  <div class="mt-6 mx-8">
    <FadeInOnScroll>
      <ChangeFontToCaveat
        text="~ Login ~"
        class="text-[38px] font-bold text-center"
      />

      <div class="mt-6">
        <p class="font-bold">メールアドレスでログイン</p>
        <div class="mt-6 text-[14px] text-left">
          <p>お持ちのアカウントでログインしてください。</p>
          <p>
            アカウントをお持ちでない方は
            <RouterLink to="/signup" class="text-site-color underline">新規登録</RouterLink>
            をしてください。
          </p>
        </div>
      </div>

      <div class="mt-10">
        <LoginForm />
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script setup lang="ts">
import { FadeInOnScroll, ChangeFontToCaveat } from "@/views/components/common";
import { LoginForm } from "@/views/components/login";
import { computed, onMounted } from "vue";
import router from "@/router";
import { useUserSessionsStore } from "@/stores/userSessionsStore";
import { useOpenStore } from "@/stores/openStore";

const userSessionsStore = useUserSessionsStore();
const openStore = useOpenStore();

const isLoggedIn = computed(() => userSessionsStore.getIsLoggedIn);

onMounted(async () => {
  await userSessionsStore.requestGetUserSessions();
  if (!isLoggedIn.value) return;

  await router.push("/blogs");
  openStore.setToast("success", "すでにログインしています");
});
</script>
