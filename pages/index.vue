<template>
  <div class="container">
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }"
    >
      <Avatar />
      <h1 :style="{ fontSize: '50px' }">
        <span class="green">Caleb</span> Denio
      </h1>
      <h3 :style="{ fontWeight: 'normal' }">
        Software Developer · Graphic Designer
      </h3>
      <HackClubWebring />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
.container {
  height: 100%;
}
</style>
