<template>

</template>

<script>
import Route from '../router';

export default {
  name: 'callback.vue',
  methods: {
    handleCallback() {
      // eslint-disable-next-line camelcase
      const access_hash = this.$route.hash;
      // eslint-disable-next-line camelcase
      const token_expires = access_hash.substring(access_hash.indexOf('expires_in=') + 11);
      // eslint-disable-next-line camelcase
      const access_token = access_hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
      // eslint-disable-next-line camelcase
      localStorage.token = access_token;
      // eslint-disable-next-line camelcase
      localStorage.token_expires = token_expires;
      Route.push({name: 'table' });
    },
  },
  beforeMount() {
    this.handleCallback();
  },
};
</script>

<style scoped>

</style>
