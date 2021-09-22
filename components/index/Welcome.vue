<template>
  <div class="welcome">
    <div class="avatar">
      <Avatar />
    </div>
    <div class="info">
      <h1 :style="{ fontSize: '50px' }">
        <span class="green">Caleb</span> Denio
      </h1>
      <h3 :style="{ fontWeight: 'normal' }">
        Developer · Designer · Musician(?)
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

.avatar {
  margin-right: 50px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info > * {
  margin: 10px 0;
}

@media screen and (max-width: 500px) {
  .avatar {
    margin-right: 0;
  }

  .welcome {
    flex-direction: column;
  }
}
</style>
