<template>
  <FadeInOnScroll>
    <div class="mx-4 py-8 bg-shiho rounded-md">
      <img src='../../../assets/shiho_kato_name.png' class="mx-auto">
      <img src='../../../assets/shiho_kato_image.png' class="mx-auto mt-6 w-2/3">
      <div class="mx-4 mt-6 mb-14">
        <p>日向坂46一期生。</p>
        <p>グループのお姉さん的存在。</p>
        <p>「かとし」「としちゃん」という愛称で親しまれており、親友であるキャプテン佐々木久美とグループを引っ張っている。</p>
        <p>.........</p>
      </div>
      <router-link to="/shiho"
                   class="mx-8 h-16 flex justify-center items-center text-[20px] bg-white rounded-[20px] border prof-button">
        加藤史帆をもっと知る
      </router-link>
      <router-link to="/shiho/blogs"
                   class="mx-8 h-16 flex justify-center items-center text-[20px] bg-white rounded-[20px] border prof-button mt-4">
        ブログを読む
      </router-link>
    </div>
  </FadeInOnScroll>
</template>

<script lang="ts">
import FadeInOnScroll from "@/views/components/common/FadeInOnScroll.vue";

export default {
  components: {FadeInOnScroll}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-shiho {
  background-color: #D1FAFF;
}

.prof-button {
  color: #6197FF;
  border: #6197FF;
  box-shadow: 0 4px 2px -2px #BBBBBB;
}
</style>
