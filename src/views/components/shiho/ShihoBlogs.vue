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
    axios.defaults.baseURL = 'https://shihonet-api-29ca225d2dcb.herokuapp.com/';
    axios.get('/api/blogs?member=shiho')
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
