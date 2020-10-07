<template>
  <div :style="{ perspective: '800px' }">
    <img
      src="~assets/img/caleb.jpg"
      class="avatar"
      :style="{ transform: `rotateX(${rotationX}) rotateY(${rotationY})` }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    rotationX: '0deg',
    rotationY: '0deg',
  }),
  mounted() {
    document.addEventListener('mousemove', this.mouseMoveListener)
    document.addEventListener('mouseout', this.mouseLeaveListener)
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.mouseMoveListener)
    document.removeEventListener('mouseout', this.mouseLeaveListener)
  },
  methods: {
    mouseMoveListener(e: MouseEvent) {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      this.rotationY = (x - 0.5) * 20 + 'deg'
      this.rotationX = (y - 0.5) * 20 + 'deg'
    },
    mouseLeaveListener(e: MouseEvent) {
      this.rotationX = '0deg'
      this.rotationY = '0deg'
    },
  },
})
</script>

<style scoped>
.avatar {
  width: 250px;
  border-radius: 40px;
}
</style>
