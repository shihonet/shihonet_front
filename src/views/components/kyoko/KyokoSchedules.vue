<template>
  {{ schedules }}
</template>

<script lang="ts">
import axios from 'axios';
import {defineComponent} from "vue";
import camelcaseKeys from "camelcase-keys";

export default defineComponent({
  data() {
    return {
      schedules: [] as any[]
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-29ca225d2dcb.herokuapp.com/';

    // 開始日を今日に設定
    const startDate = new Date().toISOString().split('T')[0];

    // 終了日を一週間後に設定
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const formattedEndDate = endDate.toISOString().split('T')[0];

    axios.get('/api/schedules', {
      params: {
        member_pattern_number: 2,
        started_date: startDate,
        ended_date: formattedEndDate,
      },
    })
        .then(response => {
          this.schedules = camelcaseKeys(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #42b983;
}
</style>
