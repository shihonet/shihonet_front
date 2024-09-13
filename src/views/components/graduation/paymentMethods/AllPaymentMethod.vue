<template>
  <div class="mx-6">
    <div class="mt-6 border-2 border-site-color bg-white rounded-md">
      <div class="text-center text-[24px] font-bold text-site-color py-6">
        加藤史帆ちゃん卒業記念<br />
        応援広告
      </div>
    </div>

    <div class="mt-8">
      <p class="font-bold">＜お支払い先について＞</p>
      <p class="mt-6 text-red-500">
        ※ご送金時には、必ず、送金元が分かるように、フォームにご入力いただいたXアカウント名やID、メールアドレスなどを記載してご送金ください。
      </p>
      <p>
        ※メッセージは、フォームの送信とお支払いが確認できた方のみ掲載いたします。フォーム送信日から1週間以内にご送金ください。
      </p>
      <p>
        ※ご入金は、
        <RouterLink
          to="/graduation/form/AfOT3voj"
          class="text-blue-500 hover:underline"
          >参加申請フォーム</RouterLink
        >
        送信後に行ってください。
      </p>
    </div>

    <div class="mt-6">
      <p class="text-[20px] font-bold">PayPay</p>
      <p>~送金先linkを入れる~</p>
    </div>

    <div class="mt-6">
      <p class="text-[20px] font-bold">銀行振込</p>
      <p>~送金先口座を入れる~</p>
    </div>

    <p class="text-center mt-16 text-[12px]">
      加藤史帆ちゃん卒業記念応援広告へ参加したことを<br/>ぜひ共有してください！
    </p>
    <div class="mt-4 flex justify-center">
      <PostX
        link="https://x.com/intent/tweet?text=%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%E3%81%A1%E3%82%83%E3%82%93%E5%8D%92%E6%A5%AD%E8%A8%98%E5%BF%B5%E5%BF%9C%E6%8F%B4%E5%BA%83%E5%91%8A%E3%81%AB%E5%8F%82%E5%8A%A0%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%F0%9F%8C%BA%0A%23%E6%97%A5%E5%90%91%E5%9D%8246%20%23%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%20%0Ahttps%3A%2F%2Fwww.shihonet.site%2Fgraduation%2Fform%2FAfOT3voj"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostX } from "@/views/components/common";
</script>
