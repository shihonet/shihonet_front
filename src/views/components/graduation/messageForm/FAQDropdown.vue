<template>
  <div
    class="h-14 bg-site-color flex items-center justify-between px-4"
    @click="dropdownOpen = !dropdownOpen"
  >
    <p
      class="text-center pl-6 flex-1 text-white text-3xl font-bold tracking-wider"
    >
      FAQ
    </p>
    <i
      class="pi pi-angle-down text-white transition-transform duration-300"
      style="font-size: 1.5rem"
      :class="{ 'rotate-180': dropdownOpen }"
    />
  </div>

  <transition name="fade-slide">
    <div v-show="dropdownOpen">
      <QuestionItem
        question="参加条件はありますか？"
        answer="この企画に賛同していただける方であれば、どなたでもご参加いただけます。"
        :isOpenedFirst="true"
      />
      <QuestionItem
        question="掲示場所や日時を詳しく知りたいです。"
        answer="掲載場所は、交通広告は公共の場である観点から、広告掲出前に掲出場所をお伝えすることはできません。また、掲載期間は東京ドーム公演を含む1週間となります。詳細は後日発信いたします。"
      />
      <QuestionItem
        question="メッセージは参加者全員分掲載されますか？"
        answer="ご入金までが完了された参加者様分は、全員分を掲載いたします。ただし、主催者が内容を事前に確認させていただき、公に掲載するにあたり不適切と判断した場合は掲載しない可能性がございます。"
      />
      <QuestionItem
        question="２口以上応募した場合、その分文字数を増やせますか？"
        answer="申し訳ございませんが、増やせません。しかし、ご出資金は参加者様からのお気持ちとして大切に頂戴いたします。無理のない範囲でご参加ください。"
      />
      <QuestionItem
        question="いつまで企画に参加できますか？"
        answer="11月10日を目処に締切とさせていただきます。ただし、目標集金額に達し次第、募集を締め切らせていただきますので、お早めにご参加ください。"
      />
      <QuestionItem
        question="参加申請したものの、入金を忘れ一週間以上経過しまいました。"
        answer="申し訳ございませんが、再度フォームをご送信のうえお支払いをお願いいたします。"
      />
      <QuestionItem
        question="出資した予算はどのように使われますか？"
        answer="出資金は、広告掲出費用やそれに係るポスター印刷費用として使用いたします。"
      />
      <QuestionItem
        question="想定金額に達しなかった場合、企画はどうなりますか？"
        answer="すでに掲載枠は確保しておりますので、集金状況に関わらず、当日の広告掲載は実施いたします。"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuestionItem } from "@/views/components/graduation/messageForm";

const dropdownOpen = ref(false);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
