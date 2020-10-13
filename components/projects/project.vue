<template>
  <div class="project">
    <div class="image"></div>
    <div class="projectContent">
      <div class="header">
        <div class="name">{{ name }}</div>
        <div class="green-accent"></div>
        <badge :color="languageColor" :text="language" />
      </div>
      <div class="description" v-html="renderedDescription" />
      <div class="footer">
        <div class="tags">
          {{ joinedTags }}
        </div>
        <a :href="url" target="_blank">
          <Button :style="{ minWidth: 'unset' }" title="View on GitHub">
            <icon
              :icon="['fab', 'github']"
              :style="{
                /*marginRight: '10px'*/
              }"
            />
            <!-- View on GitHub -->
          </Button>
        </a>
      </div>
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
    tags: Array,
  },
  computed: {
    renderedDescription() {
      return this.description != null ? marked(this.description) : '';
    },
    joinedTags() {
      return this.tags.map((i) => '#' + i).join(', ');
    },
  },
});
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.image {
  height: 250px;
  background-color: #151515;
  border-radius: 10px 10px 0 0;
  display: flex;
  place-items: center;
  justify-content: center;
  text-align: center;
}
.image::after {
  content: 'C';
  color: #252525;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}
.projectContent {
  background-color: #424242;
  padding: 10px 30px 20px 30px;

  display: flex;
  flex-direction: column;

  border-radius: 0 0 10px 10px;

  flex: 1;
}

.header {
  display: flex;
  align-items: center;
}

.name {
  font-size: 30px;
  font-weight: bold;
  /* color: #a0a0a0; */
  color: var(--green);
}

.description {
  font-size: 18px;
  padding: 10px 0;
  flex: 1;
}

.footer {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.tags {
  flex: 1;
  text-align: left;
  color: #a0a0a0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 10px;
}

.green-accent {
  content: '';
  flex: 1;
  height: 5px;
  /* background-color: var(--green); */
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin: 0 20px;
}
</style>
