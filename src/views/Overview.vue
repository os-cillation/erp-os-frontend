<template>
  <div class="overview">
    <overview-component msg="Overview Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OverviewComponent from '@/components/overviewComponent.vue';

export default {
  name: 'overview',
  components: {
    OverviewComponent,
  },
};
</script>
