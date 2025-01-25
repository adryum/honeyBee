<script>
import MessageList from "@/components/MessageList.vue";
import {JsonToArr} from "@/main.js";

export default {
  methods: {JsonToArr},
  components: {MessageList},
  props: ['messages', 'chatHeight']

}
</script>

<template>
<div class="wrappers">
  <div class="title"><strong>Chat</strong></div>
  <hr class="hr-horizontal">
  <MessageList :messages="JsonToArr(messages, 'users')" :chatHeight="chatHeight"/>
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
