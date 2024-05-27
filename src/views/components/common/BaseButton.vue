<template>
  <div class="flex justify-center">
    <button
      class="py-3 px-10 rounded-full text-lg font-bold hover:opacity-70"
      :class="themeCss"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<string>,
      default: "primary",
    },
  },

  setup(props) {
    const themeCss = computed(() => {
      switch (props.theme) {
        case "white":
          return "bg-white border-[1px] border-gray-400";
        case "primary":
        default:
          return "bg-site-color text-white";
      }
    });
    return {
      themeCss,
    };
  },
});
</script>
