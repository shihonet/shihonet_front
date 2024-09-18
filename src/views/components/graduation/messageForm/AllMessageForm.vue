<template>
  <div class="mx-6">
    <div class="mt-6 border-2 border-site-color bg-white rounded-md">
      <div class="text-center text-[24px] font-bold text-site-color py-6">
        加藤史帆さん卒業記念企画
      </div>
    </div>
    <SummaryArea />

    <div
      class="mt-14 border-2 border-site-color text-site-color text-xl text-center"
    >
      参加申請フォーム
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        メールアドレス<span class="text-red-500">*</span>
      </p>
      <p class="mt-1 ml-1 text-gray-400 text-[12px]">
        フォーム送信後にお支払い先情報をお送りするため、正確なメールアドレスをご入力ください。
      </p>
      <input
        class="mt-2 h-12 px-4 border rounded-lg w-full bg-white"
        :class="{ 'border-red-500': email && !isEmailValid }"
        type="text"
        v-model="email"
        autocomplete="email"
      />
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">XアカウントID（任意）</p>
      <input
        class="mt-2 h-12 px-4 border rounded-lg w-full bg-white"
        type="text"
        v-model="xAccountId"
        autocomplete="new-password"
      />
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        加藤史帆さんへメッセージ<span class="text-red-500">*</span>
      </p>
      <ul class="mt-1 ml-5 text-gray-400 text-[12px] list-disc">
        <li>絵文字、特殊文字、改行は反映されない可能性がございます。</li>
        <li>お名前を掲載したい場合は、本文内にご記載ください。</li>
        <li>記入可能文字数は、最大50文字です。</li>
      </ul>
      <label class="mt-2 ml-1 w-full flex items-center cursor-pointer">
        <CustomCheckbox v-model:checked="isDonationOnly" />
        <span class="ml-2 text-gray-400 text-[12px]">
          ご支援のみでメッセージ記入不要の場合はチェックをつけてください。
        </span>
      </label>
      <div v-show="!isDonationOnly">
        <textarea
          class="mt-2 p-4 border rounded-lg w-full bg-white"
          v-model="message"
          rows="6"
        />
        <div
          class="text-[12px] ml-1"
          :class="{ 'text-red-500': remainingWordCount() < 0 }"
        >
          残り {{ remainingWordCount() }} 文字入力できます
        </div>
      </div>
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        参加口数<span class="text-red-500">*</span>
      </p>
      <p class="mt-1 ml-1 text-gray-400 text-[12px]">
        1口500円となります。一度で最大5口まで選択可能です。
      </p>
      <select
        v-model.number="selectedAmount"
        class="mt-2 h-12 px-4 border rounded-lg w-1/2 bg-white cursor-pointer"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        支払い方法<span class="text-red-500">*</span>
      </p>
      <p class="mt-1 ml-1 text-gray-400 text-[12px]">
        お支払い先は、送信後にお送りするメールにてご確認いただけます。
      </p>
      <div class="mt-4 ml-2">
        <div class="flex items-center">
          <label class="relative flex items-center cursor-pointer">
            <input
              name="payment"
              type="radio"
              v-model="paymentMethod"
              value="paypay"
              class="peer h-4 w-4 cursor-pointer bg-white appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            />
            <span
              class="absolute bg-blue-600 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></span>
          </label>
          <label class="ml-2 text-slate-600 text-sm" for="html">PayPay</label>
        </div>
        <div class="mt-4 flex items-center">
          <label class="relative flex items-center cursor-pointer">
            <input
              name="payment"
              type="radio"
              v-model="paymentMethod"
              value="bank_transfer"
              class="peer h-4 w-4 cursor-pointer bg-white appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            />
            <span
              class="absolute bg-blue-600 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></span>
          </label>
          <label class="ml-2 text-slate-600 text-sm" for="html">銀行振込</label>
        </div>
        <div class="mt-4 flex items-center">
          <label class="relative flex items-center cursor-pointer">
            <input
              name="payment"
              type="radio"
              v-model="paymentMethod"
              value="credit_card"
              class="peer h-4 w-4 cursor-pointer bg-white appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            />
            <span
              class="absolute bg-blue-600 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></span>
          </label>
          <label class="ml-2 text-slate-600 text-sm" for="html"
            >クレジットカード決済</label
          >
        </div>
        <p class="ml-6 text-gray-400 text-[12px]">
          利用者のデータは暗号化され、安全に保たれます。
        </p>
      </div>
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">その他コメント（任意）</p>
      <p class="mt-1 ml-1 text-gray-400 text-[12px]">
        主催者へ伝えておきたいことがあれば、ご自由にご記入ください。（こちらでのご質問へのご回答はいたしかねます）
      </p>
      <textarea
        class="mt-2 p-4 border rounded-lg w-full bg-white"
        v-model="note"
        rows="6"
      />
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        【確認事項】<span class="text-red-500">*</span>
      </p>
      <div class="mt-1 bg-gray-100 border rounded-lg">
        <ul class="mt-1 p-3 ml-5 text-[12px] list-disc">
          <li>送信後に入力内容の変更はできません。</li>
          <li>
            主催者が内容を事前に確認させていただきます。公に掲示するにあたり不適切と判断した場合は掲載しない可能性がございます。
          </li>
          <li>
            複数回答いただいた場合は、一番最後にご回答いただいたメッセージのみを使用させていただきます。
          </li>
          <li>
            ご入力いただいた内容は、その他目的での使用、第三者へのデータ譲渡など一切いたしません。
          </li>
          <li>
            企画中止とならない限り、ご返金はいたしかねます。予めご了承ください。
          </li>
          <li>
            銀行振込にて、振込手数料等が発生した場合は参加者側にてご負担いただきますようお願いいたします。
          </li>
          <li>
            その他お問い合わせは、X:
            <a
              href="https://x.com/shihonet0202"
              target="_blank"
              class="font-medium text-blue-500 underline"
            >
              @shihonet0202
            </a>
            または shihonet0202@gmail.com までお願いいたします。
          </li>
        </ul>
      </div>
      <label
        class="mt-2 h-12 px-4 border rounded-lg w-full flex items-center cursor-pointer"
        :class="isApproved ? 'bg-sky-100' : 'bg-white'"
      >
        <CustomCheckbox v-model:checked="isApproved" :size="'lg'" />
        <span class="ml-4">上記の内容を確認しました</span>
      </label>
    </div>

    <div v-if="!isDonationOnly" class="mt-8">
      <p class="text-gray-400 text-[12px]">
        応援広告のメッセージを、#shihonet
        サイト内にも掲載させていただく予定です。もし掲載を希望されない場合は、こちらにチェックをつけてください。
      </p>
      <label class="mt-2 w-full flex items-center cursor-pointer">
        <CustomCheckbox v-model:checked="excludeFromSiteMessage" :size="'md'" />
        <span class="ml-2 text-gray-400 text-[12px]">
          #shihonet サイト内のメッセージ掲載を希望しない
        </span>
      </label>
    </div>

    <BaseButton class="mt-20" @click="submit" :disabled="!isFormValid()">
      送信する
    </BaseButton>

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
import { computed, ref } from "vue";
import { SummaryArea } from "@/views/components/graduation/messageForm";
import { BaseButton, CustomCheckbox } from "@/views/components/common";
import { useGraduationMessagesStore } from "@/stores/graduationMessagesStore";
import { PaymentMethod } from "@/types/graduationMessagesTypes";

const MAX_MESSAGE_LENGTH = 50;

const graduationMessagesStore = useGraduationMessagesStore();

const xAccountId = ref("");
const email = ref("");
const paymentMethod = ref<PaymentMethod>("paypay");
const selectedAmount = ref(1);
const isDonationOnly = ref(false);
const message = ref("");
const note = ref("");
const isApproved = ref(false);
const excludeFromSiteMessage = ref(false);

const options = [
  { value: 1, text: "1口（500円）" },
  { value: 2, text: "2口（1,000円）" },
  { value: 3, text: "3口（1,500円）" },
  { value: 4, text: "4口（2,000円）" },
  { value: 5, text: "5口（2,500円）" },
];

const remainingWordCount = () => {
  return MAX_MESSAGE_LENGTH - message.value.length;
};

const isEmailValid = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.value);
});

const isMessageValid = computed(() => {
  const isMessageLengthValid =
    message.value.length > 0 && message.value.length <= MAX_MESSAGE_LENGTH;
  return isDonationOnly.value || isMessageLengthValid;
});

const isFormValid = () => {
  return (
    isEmailValid.value &&
    paymentMethod.value &&
    selectedAmount.value &&
    isMessageValid.value &&
    isApproved.value &&
    !graduationMessagesStore.getIsLoading
  );
};

const submit = async () => {
  const isConfirmed = confirm(
    "一度送信すると取り消しはできません。\nこの内容で送信してよろしいですか？"
  );
  if (!isConfirmed) {
    return;
  }

  await graduationMessagesStore.requestPost({
    xAccountId: xAccountId.value,
    email: email.value,
    paymentMethod: paymentMethod.value,
    selectedAmount: selectedAmount.value,
    message: isDonationOnly.value ? null : message.value,
    note: note.value,
    excludeFromSiteMessage: excludeFromSiteMessage.value,
  });
};
</script>
