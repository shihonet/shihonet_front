<template>
  {{ schedules }}
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      schedules: []
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-29ca225d2dcb.herokuapp.com/';
    axios.get('/api/schedules?member=kyoko')
        .then(response => {
          this.schedules = response.data;
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
