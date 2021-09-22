<template>
  <div :style="{ perspective: '800px' }">
    <img
      src="~assets/img/caleb.jpg"
      class="avatar"
      alt="Caleb Denio"
      width="250"
      height="250"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.avatar {
  width: 250px;
  border-radius: 40px;

  transition-property: transform, box-shadow;
  transition-duration: 150ms;
}

.avatar:hover {
  transform: scale(1.05) rotate(3deg);
  box-shadow: 0px 0px 10px black;
}
</style>
