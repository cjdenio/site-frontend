<template>
  <div class="welcome">
    <div :style="{ marginRight: '50px' }">
      <Avatar />
    </div>
    <div class="info">
      <h1 :style="{ fontSize: '50px' }">
        <span class="green">Caleb</span> Denio
      </h1>
      <h3 :style="{ fontWeight: 'normal' }">
        Software Developer · Graphic Designer
      </h3>
      <!-- <HackClubWebring /> -->
    </div>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info > * {
  margin: 10px 0;
}
</style>
