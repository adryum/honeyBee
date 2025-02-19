<script setup>


import {ref} from "vue";
import {DeskView} from "@/main.js";

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
  <main>
    <div class="view-choice">
      <button v-for="(view, i) in viewChoices" :key="i"
        @click="setView(view.view)" :class="{'selected-button': (currentView === view.view)}" class="button">{{ view.text }}
      </button>
    </div>
    <hr class="hr-vertical">
    <div class="desk">
      <div v-if="currentView === DeskView.Apiaries" class="apiaries">
        <div v-for="i in 10" :key="i" class="apiary">apiary {{ i }}</div>
      </div>
      <div v-if="currentView === DeskView.Inventory" class="apiaries">
        <div v-for="i in 10" :key="i" class="apiary">Inventory {{ i }}</div>
      </div>
      <div v-if="currentView === DeskView.Finances" class="apiaries">
        <div v-for="i in 10" :key="i" class="apiary">Finances {{ i }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
.apiaries {
  display: grid;
  overflow-y: scroll;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  margin: 10px;
  width: 100%;

  background: #789197;
}
.apiary {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  background: #fff4d6;
}
</style>
