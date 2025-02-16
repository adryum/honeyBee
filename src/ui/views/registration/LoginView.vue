<script setup>
import LoginWidget from "@/ui/components/LoginWidget.vue";
import {BackgroundType} from "@/main.js";
import BackgroundWidget from "@/ui/components/BackgroundWidget.vue";

defineProps({
  username: String,
  email: String,
  password: String
})


</script>

<template>
  <main>
    <BackgroundWidget :type="BackgroundType.DimmedAndBlurred" src="/src/ui/assets/images/honeyCombWall.jpg" alt="honey-comb-wall"/>
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
</style>
