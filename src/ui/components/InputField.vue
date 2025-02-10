<script setup>
import {ref} from "vue";

defineProps({
  title: String,
  type: String,
  placeHolder: String
})
const emits = defineEmits(['onEdit'])

let value = ref("")
let isFocused = ref(false)
function onEdit() {
  emits('onEdit', value)
}
</script>

<template>
<div class="input-wrapper">
  <h1>{{ title }}</h1>
<input :class="(isFocused) ? focused-input : unfocused-input" @change="onEdit" @focusin="isFocused.value = true" @focusout="isFocused.value = false"
         :type="type"
         :value="value"
         :placeholder="placeHolder"
  />
</div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;

  font-family: var(--font-main);
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
  border-radius: 8px;
  border: none;
}
.focused-input {

}
.unfocused-input {

}
</style>
