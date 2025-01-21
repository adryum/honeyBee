<script setup>
import TextButton from "@/components/TextButton.vue";
import ProfileWidget from "@/components/ProfileWidget.vue";
import ChatMessages from "/tests/mock-data/ChatMessages.json"
import LeaderBoardData from "/tests/mock-data/LeaderBoardData.json"
import ChatBox from "@/components/ChatBox.vue";
import LeaderBoard from "@/components/LeaderBoard.vue";
</script>

<template>
  <main>
    <div class="side-screen">
      <ProfileWidget
        :username="ChatMessages['users'][0].username"
        :borderColor="ChatMessages['users'][0]['border-color']"
      />
      <ChatBox :messages="ChatMessages" chatHeight="350px"/>
      <TextButton class="big-button" text="Shop" :action="() => {console.log('shop-button')}"/>
      <TextButton class="big-button" text="Create" :action="() => {console.log('create-button')}"/>
    </div>
    <hr class="hr-vertical">
    <div class="middle-screen">
      <ChatBox :messages="ChatMessages" chatHeight="400px"/>

    </div>
    <hr class="hr-vertical">
    <div class="side-screen">
      <LeaderBoard :gameStats="LeaderBoardData"/>
      <TextButton class="big-button" text="Maps" :action="() => {console.log('Maps-button')}"/>
      <TextButton class="big-button" text="Game mode" :action="() => {console.log('Game mode-button')}"/>
      <TextButton class="big-button" text="Play" :action="() => {console.log('play-button')}"/>
    </div>
  </main>
</template>

<style scoped>

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
  display: flex;
  justify-content: end;

  flex-direction: column;
  flex: 2;
  background: cadetblue;
}
.big-button {
  margin: 10px;

}
</style>
