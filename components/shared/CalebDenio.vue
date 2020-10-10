<template>
  <div class="caleb" :style="{ fontSize }">
    <span class="green">Caleb</span>
    Denio
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    fontSize: String,
  },
});
</script>

<style scoped>
.caleb {
  font-weight: bold;
}
</style>
