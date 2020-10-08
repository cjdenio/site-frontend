<template>
  <div>
    <project
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :description="project.description"
      :url="project.githubUrl"
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
});
</script>
