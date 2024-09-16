<template>
  <div class="mx-6">
    <div class="mt-6 border-2 border-site-color bg-white rounded-md">
      <div class="text-center text-[24px] font-bold text-site-color py-6">
        加藤史帆さん卒業記念企画
      </div>
    </div>

    <div class="mt-8">
      <p>ご参加いただきありがとうございます！！</p>
      <p class="mt-6">
        決済が正常に行われました。<br/>これにて参加完了となります。
      </p>
      <p class="mt-6">
        後日、参加完了メールを通知いたします。<br/>（通常一週間以内にお送りいたします）
      </p>
    </div>

    <p class="text-center mt-16 text-[12px]">
      「加藤史帆さん卒業記念企画」へ参加したことを<br />ぜひ共有してください！
    </p>
    <div class="mt-4 flex justify-center">
      <PostX
        link="https://x.com/intent/tweet?text=%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%E3%81%A1%E3%82%83%E3%82%93%E5%8D%92%E6%A5%AD%E8%A8%98%E5%BF%B5%F0%9F%A7%B8%F0%9F%8C%B8%0A%E5%BF%9C%E6%8F%B4%E5%BA%83%E5%91%8A%E3%81%AB%E5%8F%82%E5%8A%A0%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0A%23%E6%97%A5%E5%90%91%E5%9D%8246%20%23%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%20%0Ahttps%3A%2F%2Fwww.shihonet.site%2Fgraduation%2Fmessages%2Fform"
      />
    </div>

    <div class="mt-16 py-6 px-4 bg-white">
      [イラスト・デザイン] しかた（X:
      <a href="https://x.com/skt_sk_" class="text-blue-500 hover:underline"
        >@skt_sk_</a
      >）<br />
      <div class="h-1" />
      [主催団体] #shihonet（しほねっと）<br />
      <div class="mt-1 text-[12px]">
        <p>
          #shihonet とは…
          <a
            href="https://www.shihonet.site/about"
            target="_blank"
            class="font-medium text-blue-500 hover:underline"
            >https://www.shihonet.site/about</a
          >
        </p>
        <p class="mt-1">※お問い合わせ先</p>
        <p>
          X:
          <a
            href="https://x.com/shihonet0202"
            target="_blank"
            class="font-medium text-blue-500 hover:underline"
            >@shihonet0202</a
          >
          / email: shihonet0202@gmail.com
        </p>
        <div class="mt-2">
          「特定商取引法に基づく表記」は
          <RouterLink
            to="/graduation/commercial_transaction_disclosure"
            class="text-blue-500 hover:underline"
          >
            こちら
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostX } from "@/views/components/common";
</script>
