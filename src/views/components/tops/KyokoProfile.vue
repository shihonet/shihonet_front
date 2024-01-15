<template>
  <FadeInOnScroll>
    <div class="mx-4 py-8 bg-kyoko rounded-md">
      <img src="../../../assets/images/kyoko_saito_name.png" class="mx-auto" />
      <img
        src="../../../assets/images/kyoko_saito_image.png"
        class="mx-auto mt-6 w-2/3"
      />
      <div class="mx-4 mt-6 mb-14">
        <p>日向坂46一期生。</p>
        <p>グループのお姉さん的存在。</p>
        <p>
          「かとし」「としちゃん」という愛称で親しまれており、親友であるキャプテン佐々木久美とグループを引っ張っている。
        </p>
        <p>.........</p>
      </div>
      <router-link
        to="/kyoko"
        class="mx-8 h-16 flex justify-center items-center text-[20px] bg-white rounded-[20px] border prof-button"
      >
        齊藤京子をもっと知る
      </router-link>
      <router-link
        to="/kyoko/blogs"
        class="mx-8 h-16 flex justify-center items-center text-[20px] bg-white rounded-[20px] border prof-button mt-4"
      >
        ブログを読む
      </router-link>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default {
  components: { FadeInOnScroll },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-kyoko {
  background-color: #f7f7f7;
}

.prof-button {
  color: #333;
  border: #333;
  box-shadow: 0 4px 2px -2px #bbb;
}
</style>
