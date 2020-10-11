<template>
  <div class="footer">
    <CalebDenio fontSize="30px" />
    <div class="buttons">
      <a href="https://github.com/cjdenio" target="_blank">
        <icon :icon="['fab', 'github']" class="icon" fixed-width />
      </a>
      <a href="https://codepen.io/cjdenio" target="_blank">
        <icon :icon="['fab', 'codepen']" class="icon" fixed-width />
      </a>
      <a href="https://dev.to/cjdenio" target="_blank">
        <icon :icon="['fab', 'dev']" class="icon" fixed-width />
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

.buttons {
  display: flex;
}
.buttons .icon {
  font-size: 25px;
  color: white;
  margin: 0 5px;
}
.buttons .icon:hover {
  color: var(--green);
}
</style>
