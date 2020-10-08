<template>
  <button><slot /></button>
</template>

<style scoped>
button {
  background: transparent;
  font-family: 'Poppins', sans-serif;
  border: none;
  font-weight: bold;
  font-size: 20px;
  padding: 8px 20px;
  min-width: 150px;
  text-align: center;
  text-decoration: none;
  border-radius: 12px;

  transition-duration: 100ms;
  transition-property: transform, background-color, box-shadow, color;

  background-color: var(--green);
  color: #006449;

  box-shadow: 0px 4px 30px black;
}

button:hover {
  transform: translateY(-2px);
}
</style>
