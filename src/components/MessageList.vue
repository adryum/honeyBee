<script>
import UserMessage from "@/components/UserMessage.vue";

export default {
  components: {UserMessage},
  props: ['messages', 'chatHeight']
}
</script>

<template>
  <div class="chat">
    <UserMessage v-for="(user, index) in messages['users']" :key="index"
                 :border_color="user['border-color']"
                 :username="user.username"
                 :message="user.message"
    />
  </div>
</template>

<style scoped>
.chat {
  flex: 1;
  height: v-bind(chatHeight);
  overflow-y: scroll;
}
</style>
