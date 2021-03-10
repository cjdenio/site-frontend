<template>
  <div>
    <div class="menuOpener">
      <div
        :style="{ display: 'inline-block', marginRight: 'auto' }"
        class="calebwrapper"
      >
        <CalebDenio fontSize="40px" />
      </div>
      <Button
        @click="openMenu()"
        :style="{ padding: '10px', minWidth: 'unset' }"
        aria-label="Open menu"
      >
        <icon icon="bars" size="2x" fixed-width />
      </Button>
    </div>
    <div class="navbar" :class="{ open }">
      <Button
        @click="closeMenu()"
        :style="{ padding: '10px', minWidth: 'unset' }"
        class="menuClose"
      >
        <icon icon="times" size="2x" fixed-width />
      </Button>
      <NavButton @click="closeMenu()" to="/tech" icon="briefcase" name="Tech" />
      <NavButton
        @click="closeMenu()"
        to="/projects"
        icon="laptop-code"
        name="Projects"
      />
      <NavButton @click="closeMenu()" to="/" icon="home" name="Home" />
      <NavButton @click="closeMenu()" to="/blog" icon="pen-alt" name="Blog" />
      <NavButton
        @click="closeMenu()"
        to="/contact"
        icon="paper-plane"
        name="Contact"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    open: false,
  }),
  methods: {
    openMenu() {
      this.open = true;
    },
    closeMenu() {
      this.open = false;
    },
  },
});
</script>

<style scoped>
.menuClose {
  display: none;

  position: absolute;
  top: 30px;
  right: 30px;
}

.menuOpener {
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 75%;
  max-width: 1000px;
  display: none;

  flex-wrap: wrap;
}

.navbar {
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  z-index: 10;
}

@media screen and (max-width: 500px) {
  .menuOpener {
    flex-direction: column;
  }
  .menuOpener .calebwrapper {
    margin: 0 0 10px 0 !important;
  }
}

@media screen and (max-width: 1200px) {
  .menuClose {
    display: block;
  }

  .menuOpener {
    display: flex;
  }

  .navbar {
    flex-direction: column !important;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #262626;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: unset;
    width: 100%;

    display: none;
  }

  .navbar.open {
    display: flex;
  }

  .navbar .navButton {
    margin: 10px 0;
    width: 90%;
    max-width: 300px;
  }
}
</style>
