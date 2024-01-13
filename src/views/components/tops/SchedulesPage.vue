<template>
  <p>{{ schedules }}</p>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      schedules: []
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-stg-f80a0764e52a.herokuapp.com';
    axios.get('/api/schedules?member_pattern_number=1&started_date=2019-10-01&ended_date=2019-10-10')
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
