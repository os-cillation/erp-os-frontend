<template>
  <div class="overview">
    Welcome To
    <button v-on:click="handleLogin">To erp-os</button>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  props: {
    msg: String,
  },
  methods: {
    handleLogin() {
      window.location = `${process.env.VUE_APP_API_URL
      }/oauth/authorize/?client_id=${
        process.env.VUE_APP_API_CLIENT_ID
      }&redirect_uri=${
        process.env.VUE_APP_CALLBACK_URL
      }&response_type=token`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
