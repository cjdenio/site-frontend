<template>
  <div class="webring-wrapper">
    <a :href="previousHref" class="previousBtn webring-anchor" title="Previous">
      ‹
    </a>
    <a
      href="https://webring.hackclub.com/"
      class="webring-logo"
      title="Hack Club Webring"
      alt="Hack Club Webring"
    ></a>
    <a :href="nextHref" class="nextBtn webring-anchor" title="Next">›</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data: () => ({
    previousHref: 'https://webring.hackclub.com',
    nextHref: 'https://webring.hackclub.com',
  }),
  async created() {
    let resp = await axios('https://webring.hackclub.com/public/members.json');
    const webring = resp.data;
    const siteHost = 'https://calebdenio.me/';

    let siteIndex = 0;
    let previousIndex = 0;
    let nextIndex = 0;

    for (var i = 0; i < webring.length; i++) {
      if (siteHost == webring[i].url.toLowerCase()) {
        siteIndex = i;
        break;
      }
    }

    previousIndex = siteIndex - 1;
    if (previousIndex == -1) previousIndex = webring.length - 1;
    this.previousHref = webring[previousIndex].url;

    nextIndex = siteIndex + 1;
    if (nextIndex == webring.length) nextIndex = 0;
    this.nextHref = webring[nextIndex].url;
  },
});
</script>

<style scoped>
.webring-anchor {
  font-size: 24px;
  color: rgba(132, 146, 166, 0.8);
  text-decoration: none;
  transition: color 0.5s;
}
.webring-anchor:hover {
  color: #8492a6;
  text-decoration: none;
}
.webring-logo {
  background-image: url(https://assets.hackclub.com/icon-rounded.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0 4px;
  vertical-align: middle;
}
</style>
