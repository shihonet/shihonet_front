<template>
  {{ id }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    id: {
      type: Number as PropType<number>,
      default: 0,
      required: true,
    },
  },
});
</script>
