<template>
  <Dialog :visible="props.isOpen" modal :show-header="false">
    <div class="flex flex-col max-w-72 pt-8 pb-4">
      <div class="text-right">
        <i
          class="pi pi-times hover:cursor-pointer"
          style="font-size: 1.5rem"
          @click="closeModal"
        ></i>
      </div>
      <div class="mt-4">
        <p class="mt-2 text-xl font-bold text-site-color">
          ブログをお気に入り登録にするにはログインが必要です⭐️
        </p>
        <div class="text-sm">
          <p class="mt-2">「#shihonet club」へログインすると、</p>
          <p class="mt-2">・ブログをお気に入りにできる</p>
          <p>・寄せ書きを投稿できる（絶賛実装予定）</p>
          <p class="mt-2">以上の機能をご利用いただくことができます。</p>
          <p class="mt-2 text-gray-800 text-[12px]">
            ※サイト内にて、一切の費用がかかることはございません
          </p>
        </div>
      </div>
      <div class="mt-6 flex justify-between">
        <RouterLink to="/signup" class="flex-grow">
          <Button label="新規登録" severity="info" class="w-full" />
        </RouterLink>
        <div class="w-2"></div>
        <RouterLink to="/login" class="flex-grow">
          <Button label="ログイン" severity="info" class="w-full" />
        </RouterLink>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {
    isOpen: false,
  }
);

const emits = defineEmits(["update:isOpen"]);

const closeModal = () => {
  emits("update:isOpen", false);
};
</script>
