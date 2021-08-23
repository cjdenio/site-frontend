<template>
  <div class="page">
    <h1 class="title">{{ post.title }}</h1>
    <h2 class="date">{{ renderedDate }}</h2>
    <div class="post" v-html="renderedContent" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import marked from 'marked';

import hljs from 'highlight.js';
import { DateTime } from 'luxon';

export default Vue.extend({
  apollo: {
    post: {
      query: gql`
        query Post($postId: ID!) {
          post(id: $postId) {
            title
            created_at
            id
            content
          }
        }
      `,
      variables: {
        postId: '4',
      },
    },
  },
  computed: {
    renderedContent() {
      return marked(this.post.content, {
        highlight: function (code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        },
      });
    },
    renderedDate() {
      return DateTime.fromISO(this.post.created_at).toLocaleString();
    },
  },
});
</script>

<style scoped>
.page {
  text-align: left;
}

.post {
  line-height: 2em;
}

.title {
  margin-bottom: 20px;
}

.date {
  font-weight: normal;
  margin-bottom: 30px;
}
</style>

<style>
.post pre {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 16px;
}

.post pre code,
.post pre {
  font-family: 'Fira Code';
}
.post p {
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
}
.post h2 {
  font-size: 30px;
  margin: 20px 0;
}

.post a {
  color: var(--green);
}
</style>
