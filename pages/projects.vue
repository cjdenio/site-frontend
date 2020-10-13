<template>
  <div class="content">
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
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data: () => ({
    projects: [],
  }),
  async fetch() {
    let resp = await axios.post(process.env.BACKEND_URL + '/graphql', {
      query: `
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
    });
    resp.data.data.projects.map((i: any) => {
      if (i.logo) {
        i.logo.url = process.env.BACKEND_URL + i.logo.url;
      }
    });
    this.projects = resp.data.data.projects;
    console.log(resp);
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
