<script>
import MessageList from "@/components/MessageList.vue";

export default {
  components: {MessageList},
  props: ['messages', 'chatHeight']

}
</script>

<template>
<div class="wrappers">
  <div class="title"><strong>Chat</strong></div>
  <hr class="hr-horizontal">
  <MessageList :messages="messages" :chatHeight="chatHeight"/>
  <div class="input">
    <input type="text" placeholder="type...">
  </div>

</div>
</template>

<style scoped>
.wrappers {
  max-height: 300px;
  display: flex;
  flex-direction: column;
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
