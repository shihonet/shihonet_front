<template>
  {{ blogs }}
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blogs: []
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-stg-f80a0764e52a.herokuapp.com';
    axios.get('/api/blogs?member=kyoko')
        .then(response => {
          this.blogs = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #42b983;
}
</style>
