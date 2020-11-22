<template>
  <div class="backdrop" v-if="loader.isLoading">
    <div class="sk-wave">
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['loader'])
  }
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, .5);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.sk-wave {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.sk-wave-rect {
  background-color: #42b983;
  height: 100%;
  width: 15%;
  animation: sk-wave 1.2s infinite ease-in-out; 
}

.sk-wave-rect:nth-child(1) { animation-delay: -1.2s; }
.sk-wave-rect:nth-child(2) { animation-delay: -1.1s; }
.sk-wave-rect:nth-child(3) { animation-delay: -1.0s; }
.sk-wave-rect:nth-child(4) { animation-delay: -0.9s; }
.sk-wave-rect:nth-child(5) { animation-delay: -0.8s; }

@keyframes sk-wave {
  0%, 40%, 100% {
    transform: scaleY(0.4); 
  } 20% {
    transform: scaleY(1); 
  } 
}
</style>