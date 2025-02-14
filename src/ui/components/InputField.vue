<script setup>
import {ref} from "vue";

defineProps({
  title: String,
  type: String,
  placeHolder: String
})
const emits = defineEmits(['onEdit'])

let value = ref("")
function onEdit() {
  emits('onEdit', value)
}
</script>

<template>
<form class="input-wrapper">
  <h1>{{ title }}</h1>
  <input class="local-input-field" @change="onEdit"
         :type="type"
         :value="value"
         :placeholder="placeHolder"
  />
</form>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;

  font-family: var(--font-main);
}
.local-input-field {
  position: relative;
  font-size: 1rem;
  transition: .3s;
}
.local-input-field:focus {
  outline: none;
  background: gold;
}
h1 {
  margin: 0 0 10px 0
}
input {
  align-self: center;
  height: 2.5rem;
  width: 100%;

  box-sizing: border-box;
  padding-left: 8px;
  border-radius: var(--widget-border-radius);
  border: none;
}
</style>
