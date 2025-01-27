<script setup>
import UserMessage from "@/ui/components/chat/UserMessage.vue";

defineProps({
  messages: Array,
  chatHeight: String
})
</script>

<template>
  <div class="chat">
    <UserMessage v-for="(user, index) in messages" :key="index"
                 :borderColor="user.borderColor"
                 :username="user.username"
                 :message="user.message"
                 :pathToIcon="user.icon"
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
