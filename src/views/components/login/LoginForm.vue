<template>
  <div class="mt-5">
    <input
      class="h-12 px-4 border rounded-lg w-full bg-white"
      type="text"
      placeholder="メールアドレス"
      v-model="email"
    />
    <input
      class="mt-4 h-12 px-4 border rounded-lg w-full bg-white"
      type="password"
      placeholder="パスワード"
      v-model="password"
    />
  </div>
  <BaseButton
    @click="requestLogin"
    class="mt-10"
    :disabled="isDisableLoginButton"
  >
    ログイン
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "@/views/components/common/BaseButton.vue";
import { ref, computed } from "vue";
import router from "@/router";
import { useUserSessionsStore } from "@/stores/userSessionsStore";
import { useOpenStore } from "@/stores/openStore";

const userSessionsStore = useUserSessionsStore();
const openStore = useOpenStore();

const email = ref("");
const password = ref("");
const isLoading = computed(() => userSessionsStore.getIsLoading);
const error = computed(() => userSessionsStore.getError);

const passwordPattern = /^.{4,}$/;

/**
 * メールアドレスのバリデーション
 */
const isEmailValid = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.value);
});

/**
 * パスワードのバリデーション
 */
const isPasswordValid = computed(() => {
  return passwordPattern.test(password.value);
});

/**
 * 新規登録ボタンが無効かどうか
 */
const isDisableLoginButton = computed(() => {
  return !isEmailValid.value || !isPasswordValid.value || isLoading.value;
});

/**
 * メールアドレスとパスワードを使って、ログインをリクエストする。
 */
const requestLogin = async () => {
  if (isDisableLoginButton.value) return;

  await userSessionsStore.requestLogin(email.value, "password.value");
  if (!error.value) {
    router.push("/blogs");
    openStore.setToast("success", "ログインしました");
  } else {
    openStore.setToast("error", error.value);
  }
};
</script>
