<template>
  <div class="page">
    <Loading v-if="$apollo.loading" />
    <div class="projects">
      <project
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :url="project.githubUrl"
        :language="project.language.name"
        :languageColor="project.language.color"
        :tags="project.tags.map((i) => i.name)"
        :image="project.logo ? project.logo.url : null"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  data: () => ({
    projects: [],
  }),
  apollo: {
    projects: gql`
      {
        projects(sort: "name") {
          name
          description
          logo {
            url
          }
          githubUrl
          language {
            name
            color
          }
          tags {
            name
          }
        }
      }
    `,
  },
  head: {
    title: 'Projects | Caleb Denio',
    meta: [
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Projects | Caleb Denio',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://og.calebdenio.me/Projects.png?theme=major',
      },
    ],
  },
});
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
  gap: 25px;
  grid-gap: 24px;
}
</style>
