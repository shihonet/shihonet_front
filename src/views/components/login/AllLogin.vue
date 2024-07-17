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
            <RouterLink to="/signup" class="text-site-color underline"
              >新規登録</RouterLink
            >
            をしてください。
          </p>
        </div>
      </div>

      <LoginForm class="mt-10" />
    </FadeInOnScroll>
  </div>
</template>

<script setup lang="ts">
import { FadeInOnScroll, ChangeFontToCaveat } from "@/views/components/common";
import { LoginForm } from "@/views/components/login";
</script>
