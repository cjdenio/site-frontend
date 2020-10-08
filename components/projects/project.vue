<template>
  <div class="project">
    <div class="header">
      <div class="name">{{ name }}</div>
      <div class="green-accent"></div>
      <badge :color="languageColor" :text="language" />
    </div>
    <div class="description" v-html="renderedDescription" />
    <div class="footer">
      <a :href="url" target="_blank"
        ><Button
          ><icon
            :icon="['fab', 'github']"
            :style="{ marginRight: '10px' }"
          />View on GitHub</Button
        ></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';

export default Vue.extend({
  props: {
    name: String,
    description: String,
    url: String,
    language: String,
    languageColor: String,
  },
  computed: {
    renderedDescription() {
      return this.description != null ? marked(this.description) : '';
    },
  },
});
</script>

<style scoped>
.project {
  width: 50%;
  background-color: #424242;
  padding: 10px 30px 20px 30px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
}

.header {
  display: flex;
  align-items: center;
}

.name {
  font-size: 40px;
  font-weight: bold;
  color: #a0a0a0;
}

.description {
  font-size: 20px;
  padding: 10px 0;
}

.footer {
  margin-top: 20px;
}

.green-accent {
  content: '';
  flex: 1;
  height: 5px;
  background-color: var(--green);
  border-radius: 20px;
  margin: 0 20px;
}
</style>
