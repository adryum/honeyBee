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
<div class="">
  <h1>{{title}}</h1>
  <input @change="onEdit"
         :type="type"
         :value="value"
         :placeholder="placeHolder"
  />
</div>
</template>

<style scoped>

</style>
