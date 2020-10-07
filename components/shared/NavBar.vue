<template>
  <div class="navbar">
    <NavButton to="/skills" icon="briefcase">Skills</NavButton>
    <NavButton to="/projects" icon="laptop-code">Projects</NavButton>
    <NavButton to="/" icon="home">Home</NavButton>
    <NavButton to="/blog" icon="pen-alt">Blog</NavButton>
    <NavButton to="/contact" icon="paper-plane">Contact</NavButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
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
  max-width: 1000px;
}
</style>
