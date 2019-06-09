<template>
  <div class="apiview">
    <API msg="Welcome to API Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import API from '@/components/API.vue';

export default {
  name: 'apiview',
  components: {
    API,
  },
};
</script>
