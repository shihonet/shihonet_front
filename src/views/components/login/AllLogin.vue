<template>
  <div class="mt-6 mx-8">
    <FadeInOnScroll>
      <ChangeFontToCaveat
        :text="subTitle"
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

<script lang="ts">
import { defineComponent } from "vue";
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";
import ChangeFontToCaveat from "@/views/components/common/ChangeFontToCaveat.vue";
import LoginForm from "@/views/components/login/LoginForm.vue";

export default defineComponent({
  components: {
    LoginForm,
    ChangeFontToCaveat,
    FadeInOnScroll,
  },
  setup() {
    return {
      subTitle: "~ Login ~",
    };
  },
});
</script>
