<template>
  <div class="flex justify-center">
    <button
      class="py-3 px-10 rounded-full text-lg font-bold"
      :class="themeCss"
      :disabled="disabled"
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
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  setup(props) {
    const themeCss = computed(() => {
      if (props.disabled) {
        return "bg-disabled-color text-white";
      }

      const commonCss = "hover:opacity-70";
      switch (props.theme) {
        case "white":
          return `${commonCss} bg-white border-[1px] border-gray-400`;
        case "primary":
        default:
          return `${commonCss} bg-site-color text-white`;
      }
    });

    return {
      themeCss,
    };
  },
});
</script>
