<script setup>


import {ref} from "vue";
import {DeskView} from "@/main.js";
import ItemCard from "@/ui/components/cards/ItemCard.vue";
import HiveCard from "@/ui/components/cards/HiveCard.vue";
import ApiaryCard from "@/ui/components/cards/ApiaryCard.vue";

let currentView = ref(DeskView.Home)
function setView(view) {
  (currentView.value === view) ? currentView.value = DeskView.Home : currentView.value = view
  console.log('current view: ' + currentView.value)
}

const viewChoices = [
  {
    "text": "Apiaries",
    "view": DeskView.Apiaries
  },
  {
    "text": "Inventory",
    "view": DeskView.Inventory
  },
  {
    "text": "Finances",
    "view": DeskView.Finances
  },
]
</script>

<template>
  <header class="header">
    <RouterLink to="login">LoginView</RouterLink>
    <RouterLink to="signup">SignupView</RouterLink>
    <RouterLink to="game">GameView</RouterLink>
    <RouterLink to="about">AboutView</RouterLink>
    <RouterLink to="accountRecovery">AccountRecoveryView</RouterLink>
  </header>
  <main>
    <div class="view-choice">
      <button v-for="(view, i) in viewChoices" :key="i"
        @click="setView(view.view)" :class="{'selected-button': (currentView === view.view)}" class="button">{{ view.text }}
      </button>
    </div>
    <hr class="hr-vertical">
    <div class="desk">
      <div v-if="currentView === DeskView.Apiaries" class="spaced-evenly-container scroll-y">
        <ApiaryCard v-for="i in 10" :key="i" :name="'hive numero ' + i"/>
      </div>
      <div v-if="currentView === DeskView.Inventory" class="spaced-evenly-container scroll-y">
        <ItemCard v-for="i in 10" :key="i"/>
      </div>
      <div v-if="currentView === DeskView.Finances" class="spaced-evenly-container scroll-y">
        <ItemCard v-for="i in 10" :key="i"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  gap: 20px;
  height: 100px;
  background: gold;
}
header > * {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.view-choice {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 400px;
  height: 100%;
  background: #323030;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;

  width: 100%;
  flex: 1;
  background: #f3db7c;
}
.selected-button {
  background: orange;
  filter: brightness(80%);
}
.button:hover {
  filter: brightness(80%);
}
.desk {
  display: flex;
  flex: 1;
  background: #fff4d6;
}
</style>
