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
        <div v-if="!hasReceivedEmail">
          <div class="mt-5">
            <input
              class="h-12 px-4 border rounded-lg w-full"
              type="text"
              placeholder="メールアドレス"
              v-model="email"
            />
            <input
              class="mt-2 h-12 px-4 border rounded-lg w-full"
              type="password"
              placeholder="パスワード"
              v-model="password"
            />
          </div>
          <BaseButton @click="receiveVerifyEmail" class="mt-10"
            >新規登録する</BaseButton
          >
        </div>

        <div v-else class="mt-5 text-center text-[14px]">
          <p>{{ email }}</p>
          <p class="mt-5">
            上記メールアドレスへ、確認メールを送信しました。<br />
            メールに記載された4桁の認証コードを入力して、<br />
            登録を完了してください。
          </p>
          <div class="mt-10">
            <p class="font-bold">認証コード</p>
            <input
              class="mt-2 h-12 px-4 border rounded-lg w-full"
              type="text"
              placeholder="認証コード"
              v-model="verifyCode"
            />
            <BaseButton @click="sendVerifyCode" class="mt-10" theme="primary">認証コードを送信</BaseButton>
            <BaseButton @click="backToSignup" class="mt-10" theme="white">＜戻る</BaseButton>
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
        </div>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import BaseButton from "@/views/components/common/BaseButton.vue";
import { useSignupStore } from "@/stores/signupStore";

export default defineComponent({
  components: { BaseButton, FadeInOnScroll },
  setup() {
    const signupStore = useSignupStore();
    const email = ref("");
    const password = ref("");
    const verifyCode = ref("");

    /**
     * email と password を送信して、認証コードを含めメールを受け取る。
     */
    const receiveVerifyEmail = async () => {
      signupStore.setEmail(email.value);
      signupStore.setHasReceivedEmail(true);
      await signupStore.requestSignup(email.value, password.value);
    };

    /**
     * サインアップ最初の画面へ戻る。
     * サインアップ途中の情報はリセットされる。
     */
    const backToSignup = async () => {
      const confirmed = confirm("登録画面へ戻ってもよろしいですか？");
      if (confirmed) {
        signupStore.setEmail("");
        signupStore.setHasReceivedEmail(false);
      }
    };

    /**
     * 認証コードを送信して、サインアップを完了する。
     */
    const sendVerifyCode = async () => {
      await signupStore.requestVerify(verifyCode.value);
    };

    /**
     * 認証コードを再受信する。
     */
    const reReceiveEmail = async () => {
      const confirmed = confirm("もう一度メールを受信しますか？");
      if (confirmed) {
        await signupStore.requestSignup(email.value, null);
      }
    };

    return {
      email,
      password,
      verifyCode,
      receiveVerifyEmail,
      backToSignup,
      sendVerifyCode,
      reReceiveEmail,
      hasReceivedEmail: computed(() => signupStore.hasReceivedEmail),
    };
  },
});
</script>
