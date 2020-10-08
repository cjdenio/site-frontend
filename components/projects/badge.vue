<template>
  <div class="badge" :style="{ color, borderColor: color }">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    text: String,
    color: String,
  },
});
</script>

<style scoped>
.badge {
  border: 1px solid white;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 15px;
}
</style>
