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
        <BaseButton @click="signup" class="mt-10"> 新規登録する</BaseButton>
      </div>
    </FadeInOnScroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import BaseButton from "@/views/components/common/BaseButton.vue";
import { useSignupStore } from "@/stores/signupStore";

export default defineComponent({
  components: { BaseButton, FadeInOnScroll },
  setup() {
    const signupStore = useSignupStore();
    const email = ref("");
    const password = ref("");

    const signup = () => {
      signupStore.requestSignup(email.value, password.value);
    };

    return {
      email: email,
      password: password,
      signup: signup,
    };
  },
});
</script>
