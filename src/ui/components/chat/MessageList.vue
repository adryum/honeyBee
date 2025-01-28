<script setup>
import UserMessage from "@/ui/components/chat/UserMessage.vue";
import { toUserMessageModel } from "@/core/models/UserMessageModel.js"

defineProps({
  messages: Array,
  chatHeight: String
})
</script>

<template>
  <div class="chat">
    <UserMessage v-for="(user, index) in messages" :key="index"
                 :UserMessageModel="toUserMessageModel(user)"
    />
  </div>
</template>

<style scoped>
.chat {
  flex: 1;
  max-height: v-bind(chatHeight);
  overflow-y: scroll;
}
</style>
