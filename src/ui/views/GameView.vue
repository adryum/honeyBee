<script setup>
import TextButton from "@/ui/components/buttons/TextButton.vue";
import ProfileWidget from "@/ui/components/ProfileWidget.vue";
import ChatMessages from "/tests/mock-data/ChatMessages.json"
import LeaderBoardData from "/tests/mock-data/LeaderBoardData.json"
import ChatBox from "@/ui/components/chat/ChatBox.vue";
import LeaderBoard from "@/ui/components/leaderboard/LeaderBoard.vue";
import {JsonToArr} from "@/main.js";
import UserLobbyCardContainer from "@/ui/components/lobby/UserLobbyCardContainer.vue";
</script>

<template>
  <main>
    <div class="side-screen">
      <ProfileWidget class="pop-out-centered-shadow cut-rounded-border"
        :username="ChatMessages['users'][0].username"
        :borderColor="ChatMessages['users'][0]['borderColor']"
      />
      <ChatBox class="pop-out-centered-shadow cut-rounded-border" :messages="ChatMessages"/>
      <TextButton class="big-button" text="Shop" :action="() => {console.log('shop-button')}"/>
      <TextButton class="big-button" text="Create" :action="() => {console.log('create-button')}"/>
    </div>
    <hr class="hr-vertical">
    <div class="middle-screen">
      <UserLobbyCardContainer class="user-lobby-container"/>
      <ChatBox  :messages="ChatMessages" chatHeight="400px"/>
    </div>
    <hr class="hr-vertical">
    <div class="side-screen">
      <LeaderBoard class="pop-out-centered-shadow cut-rounded-border" :gameStats="JsonToArr(LeaderBoardData, 'users')"/>
      <TextButton class="big-button" text="Maps" :action="() => {console.log('Maps-button')}"/>
      <TextButton class="big-button" text="Game mode" :action="() => {console.log('Game mode-button')}"/>
      <TextButton class="big-button" text="Play" :action="() => {console.log('play-button')}"/>
    </div>
  </main>
</template>

<style scoped>
.user-lobby-container {
  display: flex;
  flex: 3;
}
.side-screen > * {
  box-sizing: border-box;
  margin: 8px;
}
main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.side-screen {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex: 1;
  background: var(--lighter-dark-color);
}
.middle-screen {
  display: flex;
  justify-content: end;

  flex-direction: column;
  flex: 2;
  background: var(--background-dark-color);
}
.big-button {
  margin: 10px;

}
</style>
