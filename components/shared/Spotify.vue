<template>
  <div>
    <icon
      :icon="['fab', 'spotify']"
      class="green"
      size="3x"
      spin
      v-if="$apollo.loading"
    />
    <div class="spotify" v-else>
      <icon
        :icon="['fab', 'spotify']"
        class="green"
        size="2x"
        :style="{ marginRight: '10px' }"
      />
      <div v-if="spotify.currentSong" style="text-align: left">
        Listening to
        <a :href="spotify.currentSong.url"
          ><b>{{ spotify.currentSong.name }}</b></a
        >
        by <b>{{ spotify.currentSong.artists[0].name }}</b>
      </div>
      <div v-else style="text-align: left">
        I'm not listening to Spotify right now.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import gql from 'graphql-tag';

export default Vue.extend({
  data: () => ({
    spotify: {},
  }),
  apollo: {
    spotify: {
      query: gql`
        {
          spotify {
            currentSong {
              name
              url
              artists {
                name
              }
            }
          }
        }
      `,
      pollInterval: 2000,
    },
  },
});
</script>

<style scoped>
.spotify {
  font-size: 15px;
  display: flex;
  align-items: center;
}
</style>
