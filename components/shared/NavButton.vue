<template>
  <nuxt-link
    :aria-label="name"
    class="navButton"
    :to="to"
    @click.native="$emit('click')"
  >
    <icon :icon="icon" :style="{ marginRight: '10px' }" />
    {{ name }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    active: Boolean,
    to: String,
    icon: String,
    name: String,
  },
});
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
  text-align: center;
  text-decoration: none;
  border-radius: 12px;

  transition-duration: 100ms;
  transition-property: transform, background-color, box-shadow, color;
}

.navButton.nuxt-link-exact-active {
  background-color: var(--green);
  color: #006449;

  box-shadow: 0px 4px 30px black;
}

.navButton.nuxt-link-exact-active:hover {
  transform: translateY(-2px);
}

.navButton:not(.nuxt-link-exact-active):hover {
  background-color: #444444;
  transform: translateY(-2px);
  box-shadow: 0px 4px 30px black;
}
</style>
