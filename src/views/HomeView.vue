<script setup>
import TextButton from "@/components/TextButton.vue";
import ProfileWidget from "@/components/ProfileWidget.vue";
</script>

<template>
  <main>
    <div class="side-screen">
      <ProfileWidget/>
      <TextButton class="big-button" text="Shop" :action="() => {console.log('shop-button')}"/>
      <TextButton class="big-button" text="Create" :action="() => {console.log('create-button')}"/>
    </div>
    <hr>
    <div class="middle-screen"></div>
    <hr>
    <div class="side-screen">
      <TextButton class="big-button" text="Maps" :action="() => {console.log('Maps-button')}"/>
      <TextButton class="big-button" text="Game mode" :action="() => {console.log('Game mode-button')}"/>
      <TextButton class="big-button" text="Play" :action="() => {console.log('play-button')}"/>
    </div>
  </main>
</template>

<style scoped>
hr {
  width: 2px;
  background: transparent;
  border: none;
}
main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.side-screen {
  flex: 1;
  background: antiquewhite;
}
.middle-screen {
  flex: 2;
  background: cadetblue;
}
.big-button {
  margin: 10px;

}
</style>
