<script setup>
defineProps({
  selected : Boolean
})
</script>

<template>
  <transition name="bounce">
    <div v-if="selected" class="layer-container">

    </div>
  </transition>
</template>

<style scoped>
.bounce-enter-active {
  transition: .3s ease-in-out;
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: close .05s ;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
  }
  30% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes close {
  from {

  }
  to {
    transform: translateY(-100%);
  }
}
.layer-container {
  position: relative;
  padding: 0 10px 10px;
  margin-top: 5vw;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: -1;
}
.layer-container::before {
  content: '';
  position: absolute; /* new stacking context */
  z-index: -1;
  background: saddlebrown;
  width: 100%;
  height: 100%;
}
.layer-container::after {
  content: '';
  position: absolute; /* new stacking context */
  z-index: -1;
  background: darkorange;
  width: calc(100% - 20px);
  height: calc(100% - 10px);
}
</style>
