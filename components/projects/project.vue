<template>
  <div class="project">
    <div class="header">
      {{ name }}
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="footer">
      <Button>View on GitHub</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    name: String,
    description: String,
    url: String,
  },
});
</script>

<style scoped>
.project {
  width: 50%;
  background-color: #424242;
  padding: 10px 30px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
}

.header {
  font-size: 50px;
  font-weight: bold;
  color: #a0a0a0;

  display: flex;
  align-items: center;
}

.header::after {
  content: '';
  flex: 1;
  height: 5px;
  background-color: var(--green);
  border-radius: 20px;
  margin: 0 5px 0 20px;
}
</style>
