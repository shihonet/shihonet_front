<template>
  <div class="mx-6">
    <div class="mt-6 border-2 border-site-color bg-white rounded-md">
      <div class="text-center text-[24px] font-bold text-site-color py-6">
        加藤史帆さん卒業記念企画
      </div>
    </div>

    <div class="mt-8">
      <div v-if="email">
        <p>{{ email }} 様</p>

        <p class="mt-6">
          「加藤史帆さん卒業記念企画」へご応募いただき、ありがとうございます！<br />
          以下に沿って、お支払いをお願いいたします。<br />
          ※お支払いを完了しないと、企画へのご参加が完了となりませんのでご注意ください。
        </p>

        <hr class="mt-6" />

        <p class="mt-6">【申込ＩＤ】{{ participantId }}</p>

        <p class="mt-6">【金 額】{{ amount }}</p>

        <p class="mt-6">【支払期日】{{ paymentDeadline }} 23:59 まで</p>

        <div class="mt-6">
          <div v-if="paymentMethod === 'paypay'">
            <p>
              【送金先】PayPay<br />
              下記リンクよりご送金ください。<br />
              <a :href="paypayLink" target="_blank" class="text-blue-500 cursor-pointer hover:underline">{{ paypayLink }}</a>
            </p>
            <p class="mt-3 text-red-500">[重要] 必ずメールアドレスをご記載の上ご送金ください！！</p>
          </div>
          <div v-else-if="paymentMethod == 'bank_transfer'">
            <p>
              【送金先】銀行振込<br />
              みずほ銀行 調布支店<br />
              普通 3137826<br />
              タカ** ****<br />
            </p>
            <p class="mt-3 text-red-500">[重要] 必ず申込ＩＤまたはメールアドレスをご記載の上ご送金ください！！</p>
          </div>
          <div v-else-if="paymentMethod == 'credit_card'">
            <p>
              【送金先】クレジットカード決済<br />
              ①こちらのリンクをタップ<br />
              <a :href="creditCardPaymentLink" target="_blank" class="text-blue-500 cursor-pointer hover:underline">{{
                creditCardPaymentLink
              }}</a
              ><br />
              ②参加口数を「数量」から選択<br />
              <span class="font-bold">③ご入力いただいたメールアドレスにて決済を完了（メールアドレスが一致しないと送金を確認できません）</span><br /><br />
              ※利用者のデータは暗号化され、安全に保たれます。<br />
              ※Stripeの利用規約に同意した上でご利用ください。
            </p>
          </div>
        </div>

        <hr class="mt-6" />

        <p class="mt-8 font-bold">注意事項</p>
        <ul class="ml-6 list-disc">
          <li class="mt-4 font-bold">
            ご入力いただいたメール宛てに送金先をお送りしましたので、そちらでもご確認いただくことができます。なお、メールが届かない場合は、迷惑フォルダに分類されていないかご確認ください。
          </li>
          <li>
            支払いが確認できましたら、ご送金後3日以内に同じメールアドレス宛てに参加完了のメールをお送りいたします。
          </li>
          <li>
            どうしても送信内容を変更したい場合は、再度
            <RouterLink
              to="/graduation/messages/form"
              class="text-blue-500 hover:underline"
              >参加申請フォーム
            </RouterLink>
            をご送信ください。
          </li>
        </ul>

        <p class="text-center mt-16 text-[12px]">
          「加藤史帆さん卒業記念企画」へ参加したことを<br />ぜひ共有してください！
        </p>
        <div class="mt-4 flex justify-center">
          <PostX
            link="https://x.com/intent/tweet?text=%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%E3%81%A1%E3%82%83%E3%82%93%E5%8D%92%E6%A5%AD%E8%A8%98%E5%BF%B5%F0%9F%A7%B8%F0%9F%8C%B8%0A%E5%BF%9C%E6%8F%B4%E5%BA%83%E5%91%8A%E3%81%AB%E5%8F%82%E5%8A%A0%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0A%23%E6%97%A5%E5%90%91%E5%9D%8246%20%23%E5%8A%A0%E8%97%A4%E5%8F%B2%E5%B8%86%20%0Ahttps%3A%2F%2Fwww.shihonet.site%2Fgraduation%2Fmessages%2Fform?1"
          />
        </div>
      </div>

      <div v-else>
        <p>
          ご参加は
          <RouterLink
            to="/graduation/messages/form"
            class="text-blue-500 hover:underline"
            >参加申請フォーム
          </RouterLink>
          よりお願いいたします！
        </p>
        <p class="mt-10">
          ＜すでにフォームを送信済みの方＞<br />
          セッション切れによりこのページにお支払い情報が表示されない場合がございます。<br />
          フォーム送信直後に、【お支払いのご案内に関するメール】をお送りしております。そちらをご確認ください。なお、メールが届いていない場合は、迷惑フォルダに分類されている可能性がございます。<br />
          それでもメールが見当たらない場合は、個別にご案内を差し上げますので、お気軽に以下のお問い合わせ先までご連絡ください。
        </p>
      </div>
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
import { useGraduationMessagesStore } from "@/stores/graduationMessagesStore";

const AMOUNT_PER_UNIT = 500;

const graduationMessagesStore = useGraduationMessagesStore();

const email = graduationMessagesStore.getEmail;
const participantId = graduationMessagesStore.getParticipantId;
const paymentMethod = graduationMessagesStore.getPaymentMethod;
const selectedAmount = graduationMessagesStore.getSelectedAmount;
const paymentDeadline = graduationMessagesStore.getPaymentDeadline;

const amount = `${selectedAmount}口（${selectedAmount * AMOUNT_PER_UNIT}円）`;

const creditCardPaymentLink = process.env.VUE_APP_CREDIT_CARD_PAYMENT_LINK;
const paypayLink = process.env.VUE_APP_PAYPAY_LINK;
</script>
