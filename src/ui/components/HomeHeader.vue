<script setup>

import {DeskView} from "@/main.js";

const emits = defineEmits(['onClick'])
function choseView(view) {
  emits('onClick', view)
}

const viewChoices = [
  {
    "text": "Apiaries",
    "view": DeskView.Apiaries,
  },
  {
    "text": "Inventory",
    "view": DeskView.Inventory,
  },
  {
    "text": "Finances",
    "view": DeskView.Finances,
  },
]
</script>

<template>
<div class="header-container">
  <button v-for="(view, i) in viewChoices" :key="i"
              @click="choseView(view.view)"
              :class="{'selected': (currentView === view.view)}"
              class="choice"
  >
    {{ view.text }}
  </button>

</div>
</template>

<style scoped>
.header-container {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  width: 100%;
  height: 5vw;

  background: #323030;
}
.choice {
  display: flex;
  justify-content: center;
  flex: auto;
  font-size: 2vw;
  color: #ffd7b1;
  text-decoration: none;
  box-shadow: black 2px 2px 8px 0;

  /* removes default styling */
  padding: 0;
  border: none;
  background: none;
}
.choice:hover {
  box-shadow: black 2px 2px 8px 0 inset;
}
.selected {
  box-shadow: black 2px 2px 8px 0 inset;
}
</style>
