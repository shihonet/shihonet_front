<template>
  <div
    class="h-14 bg-site-color flex items-center justify-between px-4 cursor-pointer"
    @click="dropdownOpen = !dropdownOpen"
  >
    <p
      class="text-center pl-6 flex-1 text-white text-xl tracking-wider"
    >
      よくあるご質問
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
        question="日向坂46公式の企画ですか？"
        answer="日向坂46運営の主催ではなく、加藤史帆さんを応援するファン有志により立ち上げた企画です。応援広告を掲示するにあたり、団体審査は承認済みとなっております。デザイン確定次第、所属事務所にも共有し準備を進めてまいります。"
      />
      <QuestionItem
        question="掲示場所や日時を詳しく知りたいです。"
        answer="掲示場所は公共のスペースである為、事前にお伝えすることはできません。また、期間は東京ドーム公演(2024年12月25日、26日)を含む1週間となります。詳細は後日発信いたします。"
      />
      <QuestionItem
        question="メッセージは参加者全員分掲載されますか？"
        answer="ご送金までが完了された参加者様分は、全員分を掲載いたします。ただし、主催者が内容を事前に確認させていただき、公に掲示するにあたり不適切と判断した場合は掲載しない可能性がございます。"
      />
      <QuestionItem
        question="２口以上応募した場合、その分文字数を増やせますか？"
        answer="本企画は口数を問わず、お一人あたり50文字までとさせていただきます。たくさんのファンの方々の想いと感謝を届けられるよう、ご理解いただけますと幸いです。"
      />
      <QuestionItem
        question="いつまで企画に参加できますか？"
        answer="11月10日を目処に締切とさせていただきます。ただし、目標集金額に達し次第、募集を終了させていただきますので、お早めにご参加ください。"
      />
      <QuestionItem
        question="参加申請したものの、支払いを忘れ一週間以上経過しまいました。"
        answer="申し訳ございませんが、再度フォームをご送信のうえお支払いをお願いいたします。"
      />
      <QuestionItem
        question="出資した予算はどのように使われますか？"
        answer="出資金は、広告掲示費用やポスター印刷費用として使用いたします。"
      />
      <QuestionItem
        question="想定金額に達しなかった場合、企画はどうなりますか？"
        answer="すでに掲示枠は確保しておりますので、集金状況に関わらず、当日の広告掲示は実施いたします。"
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
