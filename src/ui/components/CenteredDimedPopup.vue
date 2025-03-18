<script setup>

</script>

<template>
  <div class="modal-container">
  </div>
</template>

<style scoped>
.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* puts modal below header */
  height: calc(100% - var(--header-height));
  bottom: 0;
  backdrop-filter: brightness(20%) blur(4px);

  transition: .3s;
}
</style>
