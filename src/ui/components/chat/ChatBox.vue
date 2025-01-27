<script setup>
import MessageList from "@/ui/components/chat/MessageList.vue";
import {JsonToArr} from "@/main.js";
import {ref} from "vue";

defineProps({
  messages: Array,
  chatHeight: String
})

let isChatOpen = ref(true)
function toggleChat() {
  isChatOpen.value = !isChatOpen.value
}
</script>

<template>
<div class="wrappers">
  <div class="top">
    <div class="title"><strong>Chat</strong></div>
    <button @click="toggleChat">X</button>
  </div>

  <hr v-if="isChatOpen" class="hr-horizontal">
  <MessageList v-if="isChatOpen" :messages="JsonToArr(messages, 'users')" :chatHeight="chatHeight"/>
  <div v-if="isChatOpen" class="input"><input type="text" placeholder="type..."></div>
</div>
</template>

<style scoped>
.top {
  display: flex;
  padding: 8px;
  background: var(--lighter-dark-color);
}
.top > button {
  aspect-ratio: 1/1;
  width: 50px;
  margin-left: auto;
}
.wrappers {
  max-height: v-bind(chatHeight);
  display: flex;
  flex-direction: column;
}
.input {
  display: flex;
  height: 50px;
}
input {
  flex: 1;
  font-size: 28px;
  padding: 10px;
}
</style>
