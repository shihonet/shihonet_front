<template>
  <PageHeader/>
  <router-view></router-view>
</template>

<script lang="ts">
import './index.css';
import PageHeader from "@/views/components/PageHeader.vue";

export default {
  name: 'App',
  components: {PageHeader}
}
</script>

<style>
#app {
  max-width: 480px;
  margin: 0 auto;
  font-family: 'Rounded Mplus 1c', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
