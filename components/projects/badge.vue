<template>
  <div class="badge">
    <div class="badge-circle" :style="{ backgroundColor: color }"></div>
    <div class="badge-text">
      {{ text }}
    </div>
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
  font-size: 15px;

  display: flex;
  align-items: center;
}

.badge-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
