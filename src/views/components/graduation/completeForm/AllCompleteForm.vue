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
        ご入力いただいたメール宛てに送金先をお送りしました。ご確認の上、フォーム送信日から一週間以内にお支払いいただき応募完了となります。
      </p>
      <hr class="mt-6" />
      <p class="mt-10 font-bold">注意事項</p>
      <ul class="ml-6 list-disc">
        <li class="mt-4 font-bold">
          ご送金の際には必ず、フォームにご入力いただいたXアカウントのIDや、メールアドレスの記載をお願いいたします。
        </li>
        <li>
          メールが届かない場合は、迷惑フォルダに分類されていないかご確認ください。どうしても受け取れない場合は、ページ下記にあるお問い合わせ先までご連絡お願いいたします。
        </li>
        <li>
          どうしても送信内容を変更したい場合は、再度フォームをご送信ください。
        </li>
        <li>
          ご送金は、
          <RouterLink
            to="/graduation/messages/form/AfOT3voj"
            class="text-blue-500 hover:underline"
            >参加申請フォーム
          </RouterLink>
          送信後に行ってください。
        </li>
      </ul>
    </div>

    <p class="text-center mt-16 text-[12px]">
      「加藤史帆さん卒業記念企画」へ参加したことを<br />ぜひ共有してください！
    </p>
    <div class="mt-4 flex justify-center">
      <PostX
        link="https://x.com/intent/tweet?text=%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%E3%81%A1%E3%82%83%E3%82%93%E5%8D%92%E6%A5%AD%E8%A8%98%E5%BF%B5%E5%BF%9C%E6%8F%B4%E5%BA%83%E5%91%8A%E3%81%AB%E5%8F%82%E5%8A%A0%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%F0%9F%8C%BA%0A%23%E6%97%A5%E5%90%91%E5%9D%8246%20%23%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%20%0Ahttps%3A%2F%2Fwww.shihonet.site%2Fgraduation%2Fmessages%2Fform"
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
            class="text-site-color hover:underline"
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
