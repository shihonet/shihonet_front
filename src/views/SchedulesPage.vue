<template>
  <div class="hello">
    <p>{{ schedules }}</p>
    <HelloWorld />
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from "@/views/components/HelloWorld.vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      schedules: []
    }
  },
  created() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://shihonet-api-stg-f80a0764e52a.herokuapp.com';
    axios.get('/api/schedules')
        .then(response => {
          console.log(response.data);
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
