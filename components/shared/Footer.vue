<template>
  <div class="footer">
    <CalebDenio fontSize="30px" style="flex-shrink: 0" />
    <Spotify />
    <div class="buttons">
      <a
        href="https://github.com/cjdenio"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
      >
        <icon :icon="['fab', 'github']" class="icon" fixed-width />
      </a>
      <a
        href="https://codepen.io/cjdenio"
        target="_blank"
        rel="noopener"
        aria-label="CodePen"
      >
        <icon :icon="['fab', 'codepen']" class="icon" fixed-width />
      </a>
      <a
        href="https://twitter.com/CalebDenio"
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
      >
        <icon :icon="['fab', 'twitter']" class="icon" fixed-width />
      </a>
      <a
        href="https://clb.li"
        target="_blank"
        rel="noopener"
        aria-label="Links"
      >
        <icon :icon="['fa', 'link']" class="icon" fixed-width />
      </a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;

  padding: 20px 0;
}

.footer > * {
  padding: 10px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: right;
}
.buttons .icon {
  font-size: 25px;
  color: white;
  margin: 0 5px;
}
.buttons .icon:hover {
  color: var(--green);
}

@media screen and (max-width: 800px) {
  .footer {
    flex-direction: column;
  }
  .footer > * {
    padding: 0;
  }
  .buttons {
    margin-top: 10px;
  }
}
</style>
