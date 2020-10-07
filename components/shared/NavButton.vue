<template>
  <button :class="{ active: active, navButton: true }"><slot></slot></button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    active: Boolean,
  },
})
</script>

<style scoped>
.navButton {
  background: transparent;
  font-family: 'Poppins', sans-serif;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 20px;
  padding: 8px 20px;
  min-width: 150px;
}

.navButton.active {
  background-color: var(--green);
  border-radius: 12px;
  color: #006449;

  box-shadow: 0px 4px 30px black;
}

.navButton:active {
  transform: none;
}
</style>
