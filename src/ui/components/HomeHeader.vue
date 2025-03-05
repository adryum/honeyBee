<script setup>

import {DeskView} from "@/main.js"

defineProps({
  currentView: Number
})

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
  <div class="top-header-part">

  </div>

  <div class="bottom-header-part">
    <button v-for="(view, i) in viewChoices" :key="i"
            @click="choseView(view.view)"
            :class="{'selected': (currentView === view.view)}"
            class="choice"
    >
      {{ view.text }}
    </button>
  </div>
</div>
</template>

<style scoped>
.header-container {
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: var(--header-height);
  z-index: 100;
}
.top-header-part {
  flex: 1;
  width: 100%;
  background: linear-gradient(90deg, green ,cyan);
}
.bottom-header-part {
  display: flex;
  justify-content: space-evenly;

  width: 100%;
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
  background: #323030;
}
.choice:hover {
  box-shadow: black 2px 2px 8px 0 inset;
}
.selected {
  filter: brightness(80%);
  box-shadow: black 2px 2px 8px 0 inset;
}
</style>
