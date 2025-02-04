<script setup>
import {ref} from "vue";
import InputField from "@/ui/components/InputField.vue";

defineProps({
  username: String,
  // email: String,
  password: String
})
let email = ref("")
const requiredFields = [
  [
    {"title": "E-mail"},
    {"placeHolder" : "..."},
    {"type" : "email"}
  ],
  [
    {"title": "Password"},
    {"placeHolder" : "..."},
    {"type" : "password"}
  ]
]
</script>

<template>
<div class="container">
  <h1>Login</h1>

  <InputField v-for="(field, i) in requiredFields" :key="i"
              :title="field['title']"
              :place-holder="field['placeHolder']"
              :type="field['type']"
              @onEdit="args => email = args"
  />
  <input type="checkbox"/>
  <input type="checkbox"/>
  <button>LogIn</button>
</div>
</template>

<style scoped>
.container {
  width: 40vw;
  height: 50vw;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, .5);
  border-radius: 20px;
}
</style>
