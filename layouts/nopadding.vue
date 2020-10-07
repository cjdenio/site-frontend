<template>
  <default :padding="false" />
</template>

<script lang="ts">
import Vue from 'vue';
import defaultComponent from './default.vue';

export default Vue.extend({
  components: {
    default: defaultComponent,
  },
});
</script>
