<template>
  <div>
    <icon
      :icon="['fab', 'spotify']"
      class="green"
      size="3x"
      spin
      v-if="loading"
    />
    <div class="spotify" v-else>
      <icon
        :icon="['fab', 'spotify']"
        class="green"
        size="2x"
        :style="{ marginRight: '10px' }"
      />
      <div v-if="song != ''" style="text-align: left">
        Listening to
        <a :href="url"
          ><b>{{ song }}</b></a
        >
        by <b>{{ artist }}</b>
      </div>
      <div v-else style="text-align: left">
        I'm not listening to Spotify right now.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data: () => ({
    song: 'nothing',
    url: '#',
    artist: 'someone',
    loading: true,
  }),
  async created() {
    let resp = await axios.post(process.env.BACKEND_URL + '/graphql', {
      query: `
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
    });

    this.loading = false;

    if (resp.data.data.spotify.currentSong) {
      this.song = resp.data.data.spotify.currentSong.name;
      this.url = resp.data.data.spotify.currentSong.url;
      this.artist = resp.data.data.spotify.currentSong.artists[0].name;
    } else {
      this.song = '';
    }
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
