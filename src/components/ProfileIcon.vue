<script>
export default {
  props: ['pathToIcon', 'borderColor', 'borderWidth', 'iconWidth']
}
</script>

<template>
<div class="icon">
  <img class="image" alt="profile image" src="">
</div>
</template>

<style scoped>
.icon {
  width: v-bind(iconWidth);
  border: v-bind(borderWidth) solid v-bind(borderColor);
  border-radius: 100%;
  aspect-ratio: 1/1;
}
</style>
