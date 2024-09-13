<template>
  <div class="mt-6 py-6 px-4 bg-white">
    日向坂46 加藤史帆さんのグループ卒業を記念して、全国ツアー2024ファイナル会場となる東京ドーム近辺に応援広告を掲出いたします！<br />
    <br />
    <br />
    <span class="font-bold">
    【企画コンセプト】<br />
    アイドル・加藤史帆さんへ<br />
    みんなの”大好き”を届けよう！<br />
    </span>
    <br />
    <br />
    ご参加いただいたファンのみなさまからのからのメッセージもデザインに組み込み、掲出する予定です。ぜひたくさんの温かいコメントをお寄せいただけますと幸いです！ご協力よろしくお願いいたします。<br />
    <div class="mt-12 px-2 pb-4 border-2 border-site-color rounded-md">
      <div class="ml-4 relative -top-4 font-bold">
        <span class="text-site-color text-lg bg-white px-2">参加方法</span>
      </div>
      <ol class="ml-5 relative -top-1 list-decimal">
        <li>以下の参加申請フォームを入力し、送信する。（1口500円〜）</li>
        <li>
          入力した口数分の金額を、フォーム送信日から1週間以内に送金する。（例：フォーム送信が
          2/2(火)10:00 の場合、2/8(月)23:59 まで有効）
        </li>
      </ol>
      <p class="mt-2 text-[12px]">
        ※フォーム送信とご送金をもってご参加完了となります。<br />
        ※参加定員に達しますと本フォームは閉じられますので、お早めにご申請、ご入金をお願いいたします。<br />
      </p>
    </div>
    <br />

    <hr class="my-6" />
    <FAQDropdown />
  </div>
</template>

<script setup lang="ts">
import { FAQDropdown } from "@/views/components/graduation/messageForm";
</script>
