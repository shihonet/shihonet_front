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
      <p class="ml-1 text-[16px] font-bold">XアカウントID(任意)</p>
      <input
        class="mt-2 h-12 px-4 border rounded-lg w-full bg-white"
        type="text"
        v-model="xAccountName"
        autocomplete="new-password"
      />
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        メールアドレス<span class="text-red-500">*</span>
      </p>
      <p class="mt-1 ml-1 text-gray-400 text-[12px]">
        お支払い先情報をお送りするため、正確なメールアドレスをご入力ください。
      </p>
      <input
        class="mt-2 h-12 px-4 border rounded-lg w-full bg-white"
        type="text"
        v-model="contact"
        autocomplete="new-password"
      />
    </div>

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        掲載メッセージ<span class="text-red-500">*</span>
      </p>
      <ul class="mt-1 ml-5 text-gray-400 text-[12px] list-disc">
        <li>絵文字、特殊文字、改行は反映されない可能性がございます。</li>
        <li>お名前を記載したい場合は、本文内にご記載ください。</li>
        <li>記入可能文字数は、最大100文字です。</li>
      </ul>
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

    <div class="mt-8">
      <p class="ml-1 text-[16px] font-bold">
        参加口数<span class="text-red-500">*</span>
      </p>
      <select
        v-model.number="selectedAmount"
        class="mt-2 h-12 px-4 border rounded-lg w-1/2 bg-white"
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
        お支払い先は、送信後に表示される
        <RouterLink to="/graduation/payment/ORDypUSr">こちら</RouterLink>
        のページにてご確認いただけます。
      </p>
      <div class="mt-2 space-y-2">
        <label class="ml-4 flex items-center">
          <input
            type="radio"
            v-model="paymentMethod"
            name="payment"
            value="paypay"
            class="mr-2 bg-white"
          />
          PayPay
        </label>
        <label class="ml-4 flex items-center">
          <input
            type="radio"
            v-model="paymentMethod"
            name="payment"
            value="bank_transfer"
            class="mr-2 bg-white"
          />
          銀行振込
        </label>
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
        class="mt-2 h-12 px-4 border rounded-lg w-full bg-white flex items-center hover:cursor-pointer"
      >
        <Checkbox v-model="isApproved" binary class="bg-white" />
        <span class="ml-4">上記の内容を確認しました</span>
      </label>
    </div>

    <div class="mt-8">
      <p class="text-gray-400 text-[12px]">
        応援広告のメッセージを、#shihonet
        サイト内にも掲載させていただく予定です。もし掲載を希望されない場合は、こちらにチェックをつけてください。
      </p>
      <label class="mt-2 w-full flex items-center hover:cursor-pointer">
        <input
          type="checkbox"
          v-model="excludeFromSiteMessage"
          class="bg-white"
        />
        <span class="ml-2 text-gray-400 text-[12px]">
          #shihonet サイト内のメッセージ掲載を希望しない
        </span>
      </label>
    </div>

    <BaseButton
      class="mt-20"
      @click="submit"
      :disabled="isSubmitButtonDisabled()"
    >
      送信する
    </BaseButton>

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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "primevue/checkbox";
import { SummaryArea } from "@/views/components/graduation/messageForm";
import { BaseButton } from "@/views/components/common";
import { useGraduationMessagesStore } from "@/stores/graduationMessagesStore";

const graduationMessagesStore = useGraduationMessagesStore();

const xAccountName = ref("");
const contact = ref("");
const paymentMethod = ref("");
const selectedAmount = ref(1);
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
  return 100 - message.value.length;
};

const isSubmitButtonDisabled = () => {
  return (
    !contact.value ||
    !paymentMethod.value ||
    !selectedAmount.value ||
    !message.value ||
    !isApproved.value ||
    graduationMessagesStore.getIsLoading
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
    xAccountName: xAccountName.value,
    contact: contact.value,
    paymentMethod: paymentMethod.value,
    selectedAmount: selectedAmount.value,
    message: message.value,
    note: note.value,
    excludeFromSiteMessage: excludeFromSiteMessage.value,
  });
};
</script>
