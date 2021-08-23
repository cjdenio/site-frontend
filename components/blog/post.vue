<template>
  <div class="post">
    <h1>{{ title }}</h1>
    <h2>{{ formattedDate }}</h2>
  </div>
</template>

<style scoped>
.post {
  background-color: #444444;
  padding: 30px;
  color: white;
  border-radius: 12px;
  margin: 25px 0;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { DateTime } from 'luxon';

export default Vue.extend({
  props: {
    title: String,
    date: String,
  },
  computed: {
    formattedDate() {
      return DateTime.fromISO(this.date).toLocaleString();
    },
  },
});
</script>
