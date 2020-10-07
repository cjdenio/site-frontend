<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }"
  >
    <h1 :style="{ fontSize: '60px' }" class="fourohfour">
      <span :class="{ green: outside }">4</span>
      <span :class="{ green: !outside }">0</span>
      <span :class="{ green: outside }">4</span>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'nopadding',
  data: () => ({
    outside: true,
  }),
  created() {
    setInterval(() => {
      this.outside = !this.outside;
    }, 1000);
  },
});
</script>

<style scoped>
.fourohfour > span {
  transition: all 300ms;
}
</style>
