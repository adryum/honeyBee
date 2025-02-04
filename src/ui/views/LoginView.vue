<script setup>
import LoginWidget from "@/ui/components/LoginWidget.vue";

const props = defineProps({
  username: String,
  email: String,
  password: String
})


</script>

<template>
  <main>
    <img class="background" src="/src/ui/assets/images/honeyCombWall.jpg" alt="honey-comb-wall">
    <LoginWidget/>
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
