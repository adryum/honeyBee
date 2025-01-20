<script>
import UserMessage from "@/components/UserMessage.vue"

export default {
  components: {UserMessage},
  props: ['messages', 'chatHeight']

}
</script>

<template>
<div class="wrappers">
  <div class="title"><strong>Chat</strong></div>
  <hr>
  <div class="chat">
    <UserMessage v-for="(user, index) in messages['users']" :key="index"
                 :border_color="user['border-color']"
                 :username="user.username"
                 :message="user.message"
    />
  </div>
  <div class="input">
    <input type="text" placeholder="type...">
  </div>

</div>
</template>

<style scoped>
.wrappers {
  border: 5px solid var(--lighter-dark-color);
}
.title {
  display: flex;
  align-items: center;
  font-family: var(--font-main);
  color: var(--font-color-main);
  font-size: 48px;
  height: 50px;
  padding: 8px;
  background: var(--dark-color-background);
}
hr {
  margin: 0;
  height: 2px;
  border: none;
  background: white;
}
.chat {
  height: v-bind(chatHeight);
  overflow-y: scroll;
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
