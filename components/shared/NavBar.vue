<template>
  <div class="navbar">
    <NavButton>Skills</NavButton>
    <NavButton>Projects</NavButton>
    <NavButton active>Home</NavButton>
    <NavButton>Blog</NavButton>
    <NavButton>Contact</NavButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.navbar {
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-between;
}
</style>
