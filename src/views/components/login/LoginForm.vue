<template>
  <p class="my-1 text-error-color text-sm">{{ error }}</p>
  <div class="mt-5">
    <input
      class="h-12 px-4 border rounded-lg w-full"
      type="text"
      placeholder="メールアドレス"
      v-model="email"
    />
    <input
      class="mt-4 h-12 px-4 border rounded-lg w-full"
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
import { useLoginStore } from "@/stores/loginStore";
import router from "@/router";

const email = ref("");
const password = ref("");
const loginStore = useLoginStore();
const isLoading = computed(() => loginStore.getIsLoading);
const error = computed(() => loginStore.getError);

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
  return (
    !isEmailValid.value ||
    !isPasswordValid.value ||
    isLoading.value
  );
});

/**
 * メールアドレスとパスワードを使って、サインアップをリクエストする。
 */
const requestLogin = async () => {
  if (isDisableLoginButton.value) {
    return;
  }
  await loginStore.requestLogin(
    email.value,
    password.value
  );
  if (!error.value) {
    router.push("/blogs");
  }
};
</script>
