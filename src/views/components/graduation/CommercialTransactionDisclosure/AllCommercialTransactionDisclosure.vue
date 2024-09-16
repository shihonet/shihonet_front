<template>
  <div class="mx-6 mt-10">
    <div class="text-center text-lg font-bold">特定商取引法に基づく表記</div>
    <div class="mt-6">
      <p>販売業者：</p>
      <p>髙橋祥太</p>
    </div>
    <div class="mt-6">
      <p>所在地：</p>
      <p>請求があったら遅滞なく開示します。</p>
    </div>
    <div class="mt-6">
      <p>電話番号：</p>
      <p>請求があったら遅滞なく開示します。</p>
    </div>
    <div class="mt-6">
      <p>メールアドレス：</p>
      <p>shihonet0202@gmail.com</p>
    </div>
    <div class="mt-6">
      <p>運営統括責任者：</p>
      <p>髙橋祥太</p>
    </div>
    <div class="mt-6">
      <p>追加手数料等の追加料金：</p>
      <p>
        なし（各種お支払にて決済手数料が発生する場合はご負担をお願いいたします）。
      </p>
    </div>
    <div class="mt-6">
      <p>交換および返品（返金ポリシー）：</p>
      <p>企画中止とならない限り、ご返金はいたしかねます。</p>
    </div>
    <div class="mt-6">
      <p>引渡時期：</p>
      <p>12/23(月)より応援広告掲示開始予定。</p>
    </div>
    <div class="mt-6">
      <p>受け付け可能な決済手段：</p>
      <p>PayPay, 国内の銀行振込, クレジットカード</p>
    </div>
    <div class="mt-6">
      <p>決済期間：</p>
      <p>参加申請フォーム送信より一週間以内</p>
    </div>
    <div class="mt-6">
      <p>販売価格：</p>
      <p>500円/口</p>
    </div>

    <div class="mt-16 py-6 px-4 bg-white">
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
      </div>
    </div>

    <BaseButton class="mt-20" theme="white" @click="toFormPage">参加申請フォームへ</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from "@/views/components/common";

const toFormPage = () => {
  window.location.href = "/graduation/messages/form";
};
</script>
