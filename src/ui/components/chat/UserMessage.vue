<script setup>

import {UserMessageModel} from "@/core/models/UserMessageModel.js";

defineProps({
  UserMessageModel: UserMessageModel
})
</script>

<template>
<div class="wrapper">
  <img class="icon" alt="player-icon" src=""/>
  <p>{{ UserMessageModel.username }}:</p>
  <p>{{ UserMessageModel.message }}</p>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  padding: 8px;

  gap: 10px;
  width: calc(100% - 16px);
  height: 60px;
  background: var(--dark-color-background);
}
.icon {
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: #ffd7b1;
  border: 5px solid v-bind(UserMessageModel[borderColor]);
}
.wrapper > p {
  margin: 0;
  font-size: clamp(1rem, 2rem, 3rem);
  color: white;
  align-self: center;
}
p:first-of-type {
  color: v-bind(UserMessageModel[borderColor]);
}
</style>
