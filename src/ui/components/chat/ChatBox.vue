<script setup>
import MessageList from "@/ui/components/chat/MessageList.vue";
import {JsonToArr} from "@/main.js";
import {ref} from "vue";
import DropdownToggleButton from "@/ui/components/buttons/DropdownToggleButton.vue";

defineProps({
  messages: Array,
  chatHeight: String
})

let isChatOpen = ref(true)

</script>

<template>
<div class="wrappers">
  <DropdownToggleButton title="Chat" :isOpen="isChatOpen" @isOpen="(bool) => {isChatOpen = bool}"/>

  <hr v-if="isChatOpen" class="hr-horizontal">
  <MessageList v-if="isChatOpen" :messages="JsonToArr(messages, 'users')" :chatHeight="chatHeight"/>
  <div v-if="isChatOpen" class="input"><input type="text" placeholder="type..."></div>
</div>
</template>

<style scoped>
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
