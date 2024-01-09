<template>
  <div>
    <p>トップページ</p>
    <HelloWorld />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import HelloWorld from "@/views/components/HelloWorld.vue";

export default defineComponent({
  components: {HelloWorld}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
