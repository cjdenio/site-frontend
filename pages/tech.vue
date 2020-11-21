<template>
  <div class="content">
    <div class="intro">
      I use a variety of
      <span class="green">cool apps & technologies</span> during my development
      process!<br />Here's some of my favorites:
    </div>

    <div class="item">
      <h1 class="green"><a href="https://pop.system76.com">Pop!_OS</a></h1>
      <div class="description">
        Pop!_OS is a Linux distro for creative professionals, based on Ubuntu. I
        use it extensively for development (as well as for everything else). I'm
        a huge fan of Pop!_OS's keybindings, as well as its built-in tiling
        window manager.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
.intro {
  margin-bottom: 20px;
}

h1 > a {
  text-decoration: none;
  color: inherit !important;
}

.item > h1 {
  margin-bottom: 20px;
}
</style>
