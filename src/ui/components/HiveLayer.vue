<script setup>

</script>

<template>
<div class="layer-container">

</div>
</template>

<style scoped>
.layer-container {
  position: relative;
  background: darkorange;
}
.layer-container::after {
  content: '';
  position: absolute; /* new stacking context */
  z-index: -1;
  background: saddlebrown;
}
</style>
