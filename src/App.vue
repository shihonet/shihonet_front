<script lang="ts">
// import {Options, Vue} from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';
import { getBlogs } from "@/utils/blogs";

// @Options({
//   components: {
//     HelloWorld,
//   },
// })

export default {
  data() {
    return {
      blogsData: getBlogs()
    };
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  ここだよ！！！！！！！→
  {{ blogsData }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
