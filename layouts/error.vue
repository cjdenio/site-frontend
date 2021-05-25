<template>
  <div class="page-centered">
    <h1>ˌɡadˈzo͞oks!</h1>
    <h2 :style="{ fontWeight: 'normal', margin: '10px 0 20px 0' }">
      you've stumbled across a
    </h2>
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
