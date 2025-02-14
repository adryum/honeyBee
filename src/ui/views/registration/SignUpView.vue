<script setup>
import SignUpWidget from "@/ui/components/SignUpWidget.vue";
</script>

<template>
  <main>
    <img class="background" src="/src/ui/assets/images/honeyCombWall.jpg" alt="honey-comb-wall">
    <SignUpWidget/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
}
.background {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: blur(4px);
  z-index: -1;
}
</style>
