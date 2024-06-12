<template>
  <p>{{ email }}</p>
  <p class="mt-5">
    上記メールアドレスへ、確認メールを送信しました。<br />
    メールに記載された認証コードを入力して、<br />
    登録を完了してください。
  </p>
  <div class="mt-10">
    <p class="font-bold">認証コード</p>
    <input
      class="mt-2 h-12 px-4 border rounded-lg w-full"
      type="text"
      placeholder="認証コード"
      v-model="verifyCode"
      @change="refreshError"
    />
    <p v-if="error" class="mt-1 text-left text-error-color text-sm">
      {{ error }}
    </p>
    <BaseButton
      @click="requestVerify"
      class="mt-10"
      theme="primary"
      :disabled="isDisableVerifyCodeButton"
    >
      認証コードを送信
    </BaseButton>
    <BaseButton @click="backToSignup" class="mt-10" theme="white"
      >＜戻る</BaseButton
    >
  </div>
  <div class="mt-20 border-[1px] border-gray-400 bg-white rounded-lg py-4 px-2">
    <p class="font-medium">メールが届かない場合</p>
    <p class="mt-5">
      迷惑メールと認識されている可能性がございます。<br />
      「迷惑フォルダ」内のメールもご確認ください。<br /><br />
      もう一度メールを受信する場合は<span
        @click="reReceiveEmail"
        class="text-blue-500 underline cursor-pointer"
        >こちら</span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import BaseButton from "@/views/components/common/BaseButton.vue";
import { useSignupStore } from "@/stores/signupStore";

const signupStore = useSignupStore();

const verifyCode = ref("");
const error = computed(() => signupStore.getError);
const email = computed(() => signupStore.getEmail);
const isLoading = computed(() => signupStore.getIsLoading);

/**
 * 認証コードを送信して、サインアップを完了する。
 */
const requestVerify = async () => {
  await signupStore.requestVerify(email.value, verifyCode.value);
};

/**
 * サインアップ最初の画面へ戻る。
 * サインアップ途中の情報はリセットされる。
 */
const backToSignup = async () => {
  const confirmed = confirm("登録画面へ戻ってもよろしいですか？");
  if (confirmed) {
    signupStore.setEmail("");
    signupStore.setHasGotEmailAuthCode(false);
    signupStore.setError("");
  }
};

/**
 * 認証コードを再送信する。
 * パスワードはそのまま。
 */
const reReceiveEmail = async () => {
  const confirmed = confirm("認証コードを再度送信しますか？");
  if (confirmed) {
    await signupStore.requestSignup(email.value, '');
  }
};

/**
 * 認証コードが入力されているかどうか。
 */
const isDisableVerifyCodeButton = computed(() => {
  return verifyCode.value.trim().length === 0 || isLoading.value;
});

const refreshError = () => {
  signupStore.setError("");
};

onMounted(() => {
  // NOTE: email が残っていなかったら初期画面に戻る
  if (!email.value) {
    signupStore.setHasGotEmailAuthCode(false);
  }
});
</script>
