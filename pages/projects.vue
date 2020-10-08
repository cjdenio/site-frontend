<template>
  <div>
    <project
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :description="project.description"
      :url="project.githubUrl"
      :language="project.language.name"
      :languageColor="project.language.color"
    />
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
        projects {
          name
          description
          logo {
            url
          }
          id
          githubUrl
          language {
            name
            color
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
    ],
  },
});
</script>
