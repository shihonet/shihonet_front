<template>
  <div class="mx-5 py-4 px-2 bg-white border rounded-lg">
    <p>{{ email }}</p>
  </div>
  <p class="mt-5">
    上記メールアドレスへ、認証メールを送信しました。<br />
    メールに記載されたリンクをタップして、<br />
    登録を完了してください。
  </p>
</template>

<script setup lang="ts">
import { useSignupStore } from "@/stores/signupStore";
const signupStore = useSignupStore();

const email = signupStore.getEmail;
</script>
