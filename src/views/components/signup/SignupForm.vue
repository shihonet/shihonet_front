<template>
  <p class="my-1 text-error-color text-sm">{{ error }}</p>
  <div class="mt-5">
    <input
      class="h-12 px-4 border rounded-lg w-full"
      type="text"
      placeholder="メールアドレス"
      v-model="email"
    />
    <p v-if="email && !isEmailValid" class="text-error-color text-sm">
      無効なメールアドレスです。
    </p>
    <input
      class="mt-4 h-12 px-4 border rounded-lg w-full"
      type="password"
      placeholder="パスワード"
      v-model="password"
    />
    <p v-if="password && !isPasswordValid" class="text-error-color text-sm">
      パスワードは8文字以上で、アルファベットと数字を含む必要があります。使用できる特殊文字は「!@#$%^&*」です。
    </p>
    <input
      class="mt-4 h-12 px-4 border rounded-lg w-full"
      type="password"
      placeholder="パスワード（確認用）"
      v-model="passwordConfirmation"
    />
    <p
      v-if="passwordConfirmation && !isPasswordConfirmationValid"
      class="text-error-color text-sm"
    >
      パスワードが一致しません
    </p>
  </div>
  <BaseButton
    @click="requestSignup"
    class="mt-10"
    :disabled="isDisableSignupButton"
  >
    新規登録する
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "@/views/components/common/BaseButton.vue";
import { ref, computed } from "vue";
import { useSignupStore } from "@/stores/signupStore";
import { useUserSessionsStore } from "@/stores/userSessionsStore";

const userSessionsStore = useUserSessionsStore();

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const signupStore = useSignupStore();
const isLoading = computed(() => signupStore.getIsLoading);
const error = computed(() => signupStore.getError);

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

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
 * 確認用パスワードのバリデーション
 */
const isPasswordConfirmationValid = computed(() => {
  return passwordPattern.test(passwordConfirmation.value);
});

/**
 * 新規登録ボタンが無効かどうか
 */
const isDisableSignupButton = computed(() => {
  return (
    !isEmailValid.value ||
    !isPasswordValid.value ||
    !isPasswordConfirmationValid.value ||
    isLoading.value
  );
});

/**
 * メールアドレスとパスワードを使って、サインアップをリクエストする。
 */
const requestSignup = async () => {
  if (isDisableSignupButton.value) {
    return;
  }
  await signupStore.requestSignup(
    email.value,
    password.value,
    passwordConfirmation.value
  );
  await userSessionsStore.requestGetUserSessions();
};
</script>
