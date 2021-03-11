<template>
  <div>
    <NavBar />

    <div
      :style="{
        width: '75%',
        maxWidth: '1000px',
        margin: '0 auto',
      }"
    >
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    padding: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style>
html {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  --green: #11e38c;
}

html,
body {
  height: 100%;
  color: white;
}

body {
  background-color: #262626;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.green {
  color: var(--green);
}

.content {
  /* padding-top: 150px; */
}

a {
  color: white;
}
a:hover {
  color: var(--green);
}

.page-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 250px);
}
.page {
  min-height: calc(100vh - 250px);
}
</style>
