<template>
  <div class="page">
    <h2 :style="{ textAlign: 'left', color: 'gray' }">Recent thoughts</h2>

    <Loading v-if="$apollo.loading" />
    <NuxtLink
      :style="{ textDecoration: 'none' }"
      v-for="post in posts"
      :key="post.id"
      :to="`/blog/${post.id}`"
    >
      <post :title="post.title" :date="post.created_at" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  apollo: {
    posts: gql`
      {
        posts {
          title
          created_at
          id
        }
      }
    `,
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
