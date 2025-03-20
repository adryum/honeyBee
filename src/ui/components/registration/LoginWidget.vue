<script setup>
import {ref} from "vue";
import InputField from "@/ui/components/InputField.vue";
import LockableButton from "@/ui/components/buttons/LockableButton.vue";

defineProps({
  username: String,
  // email: String,
  password: String
})
let email = ref("")
const requiredFields = [
  {
    "title": "E-mail",
    "placeHolder" : "...",
    "type" : "email"
  },
  {
    "title": "Password",
    "placeHolder" : "...",
    "type" : "password"
  }
]
</script>

<template>
<div class="container">
  <h1 class="login-title"><strong>Login</strong></h1>
  <InputField class="input-field" v-for="(field, i) in requiredFields" :key="i"
              :title="field['title']"
              :place-holder="field['placeHolder']"
              :type="field['type']"
              @onEdit="args => email = args"
  />
  <LockableButton class="submit-button" :is-unlocked="false" type="submit" text="Log in"/>
  <RouterLink to="/signup">Sign up</RouterLink>
  <RouterLink to="/accountRecovery">Forgot your password?</RouterLink>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 30rem;
  max-height: 40rem;

  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, .5);
  border-radius: 20px;
}
.container > * {
  margin: 10px 20px 10px;
}
.input-field {

}
.login-title {
  align-self: center;
  font-size: 3rem;
}
.checkbox {

}
.submit-button {
  align-self: center;
  font-size: 2.5rem;
  width: calc(100% - 40px);
  height: 2em;
}
.options {
  align-self: center;
  justify-self: center;
  margin-top: auto;
}
</style>
